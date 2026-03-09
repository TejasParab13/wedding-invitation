// wedding_logic.dart
import 'dart:async';
import 'dart:math' as math;
import 'dart:html' as html;
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

// ---------------------------------------------------------------------------
// Asset constants (shared with decorations)
// ---------------------------------------------------------------------------
const String kBgAsset = 'assets/images/BG1.png';
const String kTextAsset = 'assets/images/text.png';
const String kFlorAsset = 'assets/images/flor1.png';
const String kRallAsset = 'assets/images/Rall1.png';
const String kArchAsset = 'assets/images/Arch1.png';
const String kPillarAsset = 'assets/images/Pillerr3.png';
const String kThemAsset = 'assets/images/them.png';
const String kPetalAsset = 'assets/images/petal.png';

/// Returns the correct invitation text image based on URL path.
String getTextAsset() {
  final path = html.window.location.pathname;
  if (path!.contains('/Chetans/')) {
    return 'assets/images/text_chetan.png';
  } else if (path.contains('/Ravinas/')) {
    return 'assets/images/text_ravina.png';
  }
  return kTextAsset;
}

// ---------------------------------------------------------------------------
// Main controller – handles animations, auto‑scroll, preloading, map launch
// ---------------------------------------------------------------------------
class WeddingController {
  WeddingController({
    required TickerProvider vsync,
    required VoidCallback onLoadedChanged,
  }) : _vsync = vsync,
       _onLoadedChanged = onLoadedChanged {
    _initAnimations();
    _initScroll();
  }

  final TickerProvider _vsync;
  final VoidCallback _onLoadedChanged;

  // Animations
  late AnimationController floatController;
  late Animation<double> floatAnim;
  late Animation<double> archWarpAnim;
  late Animation<double> themTiltAnim;

  // Scroll & auto‑scroll
  late ScrollController scrollController;
  late AnimationController autoScrollController;
  late Animation<double> curvedAutoScroll;
  Timer? inactivityTimer;

  bool _loaded = false;
  bool get loaded => _loaded;
  set loaded(bool value) {
    if (_loaded != value) {
      _loaded = value;
      _onLoadedChanged();
    }
  }

  void _initAnimations() {
    floatController = AnimationController(
      vsync: _vsync,
      duration: const Duration(seconds: 6),
    )..repeat(reverse: true);

    floatAnim = Tween<double>(begin: -8, end: 8).animate(
      CurvedAnimation(parent: floatController, curve: Curves.easeInOut),
    );

    archWarpAnim = Tween<double>(begin: 0.98, end: 1.02).animate(
      CurvedAnimation(parent: floatController, curve: Curves.easeInOut),
    );

    themTiltAnim =
        Tween<double>(
          begin: -2 * math.pi / 180,
          end: 2 * math.pi / 180,
        ).animate(
          CurvedAnimation(parent: floatController, curve: Curves.easeInOut),
        );
  }

  void _initScroll() {
    scrollController = ScrollController();

    autoScrollController = AnimationController(
      vsync: _vsync,
      duration: const Duration(seconds: 10),
      reverseDuration: const Duration(seconds: 10),
    );

    curvedAutoScroll = CurvedAnimation(
      parent: autoScrollController,
      curve: Curves.easeInOut,
    );

    autoScrollController.addListener(_autoScrollListener);
  }

  void _autoScrollListener() {
    if (!scrollController.hasClients) return;
    final min = scrollController.position.minScrollExtent;
    final max = scrollController.position.maxScrollExtent;
    if (max <= min) return;
    final position = min + (curvedAutoScroll.value * (max - min));
    scrollController.jumpTo(position);
  }

  void resetInactivityTimer() {
    inactivityTimer?.cancel();
    inactivityTimer = Timer(const Duration(seconds: 2), startAutoScroll);
  }

  void stopAutoScroll() {
    if (autoScrollController.isAnimating) {
      autoScrollController.stop();
    }
  }

  void startAutoScroll() {
    if (!scrollController.hasClients) return;
    final min = scrollController.position.minScrollExtent;
    final max = scrollController.position.maxScrollExtent;
    if (max <= min) return;

    final currentPosition = scrollController.position.pixels;
    final normalized = (currentPosition - min) / (max - min);
    autoScrollController.value = normalized.clamp(0.0, 1.0);
    autoScrollController.repeat(reverse: true);
  }

  /// Preload all image assets
  Future<void> preloadAssets(BuildContext context) async {
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

    loaded = true;
  }

  /// Open the venue location in maps
  static Future<void> openMap() async {
    const url =
        'https://www.google.com/maps/place/Shree+Saunsthan+Shantadurga+Chamundeshwari+Kudtari+Mahamaya/@15.228697,74.05419,123m/data=!3m1!1e3!4m6!3m5!1s0x3bbfad152f2fe5f3:0x85258c6b5dbf1d1e!8m2!3d15.2285273!4d74.0540636!16s%2Fg%2F1tdckdsc?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D';
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    } else {
      debugPrint('Could not launch $url');
    }
  }

  void dispose() {
    floatController.dispose();
    scrollController.dispose();
    autoScrollController.removeListener(_autoScrollListener);
    autoScrollController.dispose();
    inactivityTimer?.cancel();
  }
}
