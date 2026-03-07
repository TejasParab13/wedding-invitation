// wedding_page.dart
import 'dart:async';
import 'dart:math' as math;
import 'dart:html' as html;
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter/material.dart';
import 'falling_petals.dart';

// Asset constants (including petal asset for preloading)
const String kBgAsset = 'assets/images/BG1.png';
const String kTextAsset = 'assets/images/text.png';
const String kFlorAsset = 'assets/images/flor1.png';
const String kRallAsset = 'assets/images/Rall1.png';
const String kArchAsset = 'assets/images/Arch1.png';
const String kPillarAsset = 'assets/images/Pillerr3.png';
const String kThemAsset = 'assets/images/them.png';
const String kPetalAsset =
    'assets/images/petal.png'; // from falling_petals.dart

String _getTextAsset() {
  final path = html.window.location.pathname;
  if (path!.contains('/Chetans/')) {
    return 'assets/images/text_chetan.png';
  } else if (path.contains('/Ravinas/')) {
    return 'assets/images/text_ravina.png';
  }
  return kTextAsset;
}

/// Provides all animations to decorative widgets.
class _AnimationScope extends InheritedWidget {
  const _AnimationScope({
    required super.child,
    required this.floatAnim,
    required this.archWarpAnim,
    required this.themTiltAnim,
  });

  final Animation<double> floatAnim;
  final Animation<double> archWarpAnim;
  final Animation<double> themTiltAnim;

  static _AnimationScope? of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<_AnimationScope>();
  }

  @override
  bool updateShouldNotify(_AnimationScope old) =>
      floatAnim != old.floatAnim ||
      archWarpAnim != old.archWarpAnim ||
      themTiltAnim != old.themTiltAnim;
}

class WeddingPageP extends StatefulWidget {
  const WeddingPageP({super.key});

  @override
  State<WeddingPageP> createState() => _WeddingPagePState();
}

class _WeddingPagePState extends State<WeddingPageP>
    with TickerProviderStateMixin {
  late AnimationController _floatController;
  late Animation<double> _floatAnim;
  late Animation<double> _archWarpAnim;
  late Animation<double> _themTiltAnim;

  // Auto‑scroll members
  late ScrollController _scrollController;
  late AnimationController _autoScrollController;
  late Animation<double> _curvedAutoScroll; // curved version for smooth ends
  Timer? _inactivityTimer;
  bool _loaded = false;

  @override
  void initState() {
    super.initState();

    _floatController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 6),
    )..repeat(reverse: true);

    _floatAnim = Tween<double>(begin: -8, end: 8).animate(
      CurvedAnimation(parent: _floatController, curve: Curves.easeInOut),
    );

    _archWarpAnim = Tween<double>(begin: 0.98, end: 1.02).animate(
      CurvedAnimation(parent: _floatController, curve: Curves.easeInOut),
    );

    _themTiltAnim =
        Tween<double>(
          begin: -2 * math.pi / 180,
          end: 2 * math.pi / 180,
        ).animate(
          CurvedAnimation(parent: _floatController, curve: Curves.easeInOut),
        );

    // Scroll controller
    _scrollController = ScrollController();

    // Auto‑scroll controller – 20s down, 20s up → full cycle 40s
    _autoScrollController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 20),
      reverseDuration: const Duration(seconds: 20),
    );

    // Wrap with an easing curve to dampen at the ends
    _curvedAutoScroll = CurvedAnimation(
      parent: _autoScrollController,
      curve: Curves.easeInOut,
    );

    // Listener to map curved animation value (0…1) to scroll position (min…max)
    _autoScrollController.addListener(_autoScrollListener);

    // Preload assets after first frame
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _preloadAssets();
    });
  }

  /// Pre‑caches every image asset used in the page.
  Future<void> _preloadAssets() async {
    final List<String> assetPaths = [
      kBgAsset,
      kTextAsset,
      kFlorAsset,
      kRallAsset,
      kArchAsset,
      kPillarAsset,
      kThemAsset,
      kPetalAsset,
    ];

    await Future.wait(
      assetPaths.map((path) => precacheImage(AssetImage(path), context)),
    );

    if (mounted) {
      setState(() {
        _loaded = true;
      });
      // Start the inactivity timer once the UI is fully built
      WidgetsBinding.instance.addPostFrameCallback((_) {
        _resetInactivityTimer();
      });
    }
  }

  // ---------------------------------------------------------------------------
  // Auto‑scroll logic (continuous back‑and‑forth with damping)
  // ---------------------------------------------------------------------------
  void _autoScrollListener() {
    if (!_scrollController.hasClients) return;
    final min = _scrollController.position.minScrollExtent;
    final max = _scrollController.position.maxScrollExtent;
    if (max <= min) return; // nothing to scroll

    // Map the CURVED animation value (0…1) to scroll position (min…max)
    final position = min + (_curvedAutoScroll.value * (max - min));
    _scrollController.jumpTo(position);
  }

  void _resetInactivityTimer() {
    _inactivityTimer?.cancel();
    _inactivityTimer = Timer(const Duration(seconds: 20), _startAutoScroll);
  }

  void _stopAutoScroll() {
    if (_autoScrollController.isAnimating) {
      _autoScrollController.stop();
    }
  }

  void _startAutoScroll() {
    if (!_scrollController.hasClients) return;
    final min = _scrollController.position.minScrollExtent;
    final max = _scrollController.position.maxScrollExtent;
    if (max <= min) return; // nothing to scroll

    // Normalise current scroll position to a value between 0 and 1
    final currentPosition = _scrollController.position.pixels;
    final normalized = (currentPosition - min) / (max - min);

    // Set the controller to that value (without animating)
    _autoScrollController.value = normalized.clamp(0.0, 1.0);

    // Start the infinite back‑and‑forth with smooth damping at ends
    _autoScrollController.repeat(reverse: true);
  }
  // ---------------------------------------------------------------------------

  @override
  void dispose() {
    _floatController.dispose();
    _scrollController.dispose();
    _autoScrollController.removeListener(_autoScrollListener);
    _autoScrollController.dispose();
    _inactivityTimer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (!_loaded) {
      return Scaffold(
        body: Container(
          color: Colors.white,
          child: const Center(child: CircularProgressIndicator()),
        ),
      );
    }

    final size = MediaQuery.sizeOf(context);

    return Scaffold(
      body: SafeArea(
        child: SizedBox.fromSize(
          size: size,
          child: _AnimationScope(
            floatAnim: _floatAnim,
            archWarpAnim: _archWarpAnim,
            themTiltAnim: _themTiltAnim,
            child: Stack(
              children: [
                const Positioned.fill(child: _BackgroundImage()),
                const RepaintBoundary(child: FallingPetals(density: 2)),
                Positioned.fill(
                  child: NotificationListener<ScrollNotification>(
                    onNotification: (notification) {
                      if (notification is UserScrollNotification) {
                        // User started interacting → stop auto‑scroll & reset timer
                        _stopAutoScroll();
                        _resetInactivityTimer();
                      } else if (notification is ScrollEndNotification) {
                        // Finished scrolling → restart timer
                        _resetInactivityTimer();
                      }
                      return false;
                    },
                    child: _ScrollableContent(controller: _scrollController),
                  ),
                ),
                const IgnorePointer(child: _DecorativeElements()),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// -------------------- Helper widgets (unchanged) --------------------

class _BackgroundImage extends StatelessWidget {
  const _BackgroundImage();

  @override
  Widget build(BuildContext context) {
    return Image.asset(kBgAsset, fit: BoxFit.cover);
  }
}

class _ScrollableContent extends StatelessWidget {
  const _ScrollableContent({required this.controller});

  final ScrollController controller;

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      controller: controller,
      physics: const BouncingScrollPhysics(),
      child: const Column(
        children: [
          SizedBox(height: 200),
          _InviteText(),
          SizedBox(height: 50),
          _GlassButton(),
          SizedBox(height: 275),
        ],
      ),
    );
  }
}

class _InviteText extends StatelessWidget {
  const _InviteText();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        width: 300,
        child: Image.asset(_getTextAsset(), fit: BoxFit.contain),
      ),
    );
  }
}

class _GlassButton extends StatelessWidget {
  const _GlassButton();

  Future<void> _openMap() async {
    const url =
        'https://www.google.com/maps/place/Shree+Saunsthan+Shantadurga+Chamundeshwari+Kudtari+Mahamaya/@15.228697,74.05419,123m/data=!3m1!1e3!4m6!3m5!1s0x3bbfad152f2fe5f3:0x85258c6b5dbf1d1e!8m2!3d15.2285273!4d74.0540636!16s%2Fg%2F1tdckdsc?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D';
    if (await canLaunchUrl(Uri.parse(url))) {
      await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
    } else {
      debugPrint('Could not launch $url');
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _openMap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 14),
        decoration: BoxDecoration(
          color: Colors.white.withOpacity(1),
          borderRadius: BorderRadius.circular(30),
          border: Border.all(color: Colors.white.withOpacity(0.3), width: 1.5),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.2),
              blurRadius: 10,
              offset: const Offset(0, 5),
            ),
          ],
        ),
        child: const Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.location_on, color: Colors.black87),
            SizedBox(width: 10),
            Text(
              'Open Venue Location',
              style: TextStyle(
                color: Colors.black87,
                fontSize: 16,
                fontWeight: FontWeight.w500,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _DecorativeElements extends StatelessWidget {
  const _DecorativeElements();

  @override
  Widget build(BuildContext context) {
    return const Stack(
      children: [_Floor(), _Railing(), _Arch(), _Pillars(), _ThemImage()],
    );
  }
}

class _Floor extends StatelessWidget {
  const _Floor();

  @override
  Widget build(BuildContext context) {
    return const Positioned(
      bottom: 0,
      left: 0,
      right: 0,
      child: SizedBox(
        height: 60,
        child: FittedBox(
          fit: BoxFit.fitHeight,
          alignment: Alignment.bottomCenter,
          child: Row(
            children: [
              Image(image: AssetImage(kFlorAsset)),
              Image(image: AssetImage(kFlorAsset)),
              Image(image: AssetImage(kFlorAsset)),
            ],
          ),
        ),
      ),
    );
  }
}

class _Railing extends StatelessWidget {
  const _Railing();

  @override
  Widget build(BuildContext context) {
    final animation = _AnimationScope.of(context)!.floatAnim;
    return Positioned(
      bottom: 50,
      left: -40,
      right: 0,
      child: SizedBox(
        height: 200,
        child: FittedBox(
          fit: BoxFit.fitHeight,
          alignment: Alignment.bottomCenter,
          child: _FloatWidget(
            animation: animation,
            child: const Image(image: AssetImage(kRallAsset)),
          ),
        ),
      ),
    );
  }
}

class _Arch extends StatelessWidget {
  const _Arch();

  @override
  Widget build(BuildContext context) {
    final scope = _AnimationScope.of(context)!;
    return Stack(
      children: [
        Positioned(
          bottom: -300,
          left: 0,
          right: 0,
          child: SizedBox(
            height: 1100,
            child: FittedBox(
              fit: BoxFit.fitHeight,
              alignment: Alignment.bottomCenter,
              child: _FloatWidget(
                animation: scope.floatAnim,
                child: AnimatedBuilder(
                  animation: scope.archWarpAnim,
                  builder: (_, child) => Transform.scale(
                    scaleX: scope.archWarpAnim.value,
                    scaleY: 1.0,
                    alignment: Alignment.center,
                    child: child,
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Image(image: AssetImage(kArchAsset)),
                      const SizedBox(width: 300),
                      const Image(image: AssetImage(kArchAsset)),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
        Positioned(
          bottom: -150,
          left: 0,
          right: 0,
          child: SizedBox(
            height: 1100,
            child: FittedBox(
              fit: BoxFit.fitHeight,
              alignment: Alignment.bottomCenter,
              child: _FloatWidget(
                animation: scope.floatAnim,
                child: AnimatedBuilder(
                  animation: scope.archWarpAnim,
                  builder: (_, child) => Transform.scale(
                    scaleX: scope.archWarpAnim.value,
                    scaleY: 1.0,
                    alignment: Alignment.center,
                    child: child,
                  ),
                  child: const Image(image: AssetImage(kArchAsset)),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class _Pillars extends StatelessWidget {
  const _Pillars();

  @override
  Widget build(BuildContext context) {
    final animation = _AnimationScope.of(context)!.floatAnim;
    return Stack(
      children: [
        Positioned(
          bottom: -10,
          left: 0,
          right: 0,
          child: SizedBox(
            height: 580,
            child: FittedBox(
              fit: BoxFit.fitHeight,
              alignment: Alignment.bottomCenter,
              child: _FloatWidget(
                animation: animation,
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Image(image: AssetImage(kPillarAsset)),
                    const SizedBox(width: 500),
                    Transform.flip(
                      flipX: true,
                      child: const Image(image: AssetImage(kPillarAsset)),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
        Positioned(
          bottom: -10,
          left: 0,
          right: 0,
          child: SizedBox(
            height: 580,
            child: FittedBox(
              fit: BoxFit.fitHeight,
              alignment: Alignment.bottomCenter,
              child: _FloatWidget(
                animation: animation,
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Image(image: AssetImage(kPillarAsset)),
                    const SizedBox(width: 800),
                    Transform.flip(
                      flipX: true,
                      child: const Image(image: AssetImage(kPillarAsset)),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
        Positioned(
          bottom: -10,
          left: 0,
          right: 0,
          child: SizedBox(
            height: 580,
            child: FittedBox(
              fit: BoxFit.fitHeight,
              alignment: Alignment.bottomCenter,
              child: _FloatWidget(
                animation: animation,
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Image(image: AssetImage(kPillarAsset)),
                    const SizedBox(width: 2225),
                    Transform.flip(
                      flipX: true,
                      child: const Image(image: AssetImage(kPillarAsset)),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class _ThemImage extends StatelessWidget {
  const _ThemImage();

  @override
  Widget build(BuildContext context) {
    final scope = _AnimationScope.of(context)!;
    return Positioned(
      bottom: -50,
      left: 0,
      right: -40,
      child: SizedBox(
        height: 375,
        child: FittedBox(
          fit: BoxFit.fitHeight,
          alignment: Alignment.bottomCenter,
          child: _FloatWidget(
            animation: scope.floatAnim,
            child: AnimatedBuilder(
              animation: scope.themTiltAnim,
              builder: (_, child) => Transform.rotate(
                angle: scope.themTiltAnim.value,
                child: child,
              ),
              child: const Row(
                children: [
                  Image(image: AssetImage(kThemAsset)),
                  SizedBox(width: 900),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// Helper that applies the floating translation.
class _FloatWidget extends StatelessWidget {
  const _FloatWidget({required this.animation, required this.child});

  final Animation<double> animation;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: animation,
      builder: (_, __) =>
          Transform.translate(offset: Offset(0, animation.value), child: child),
    );
  }
}
