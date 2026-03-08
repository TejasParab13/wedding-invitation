// wedding_page.dart
import 'package:flutter/material.dart';
import 'falling_petals.dart';
import 'wedding_animation.dart';
import 'wedding_logic.dart';
import 'wedding_decorations.dart';

class WeddingPage extends StatefulWidget {
  final DeviceType deviceType;
  const WeddingPage({super.key, required this.deviceType});

  @override
  State<WeddingPage> createState() => _WeddingPageState();
}

class _WeddingPageState extends State<WeddingPage>
    with TickerProviderStateMixin {
  late WeddingController _controller;

  @override
  void initState() {
    super.initState();
    _controller = WeddingController(
      vsync: this,
      onLoadedChanged: () {
        if (mounted) setState(() {});
      },
    );

    // Start preloading assets after first frame
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _controller.preloadAssets(context).then((_) {
        if (mounted) {
          _controller.resetInactivityTimer();
        }
      });
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // While not loaded, return empty – HTML splash is still visible
    if (!_controller.loaded) {
      return const SizedBox.shrink();
    }

    final size = MediaQuery.sizeOf(context);
    final device = widget.deviceType;

    return Scaffold(
      body: SafeArea(
        child: SizedBox.fromSize(
          size: size,
          child: AnimationScope(
            floatAnim: _controller.floatAnim,
            archWarpAnim: _controller.archWarpAnim,
            themTiltAnim: _controller.themTiltAnim,
            child: Stack(
              children: [
                const Positioned.fill(child: BackgroundImage()),
                RepaintBoundary(
                  child: FallingPetals(
                    density: device == DeviceType.mobile ? 1 : 2,
                  ),
                ),
                Positioned.fill(
                  child: NotificationListener<ScrollNotification>(
                    onNotification: (notification) {
                      if (notification is UserScrollNotification) {
                        _controller.stopAutoScroll();
                        _controller.resetInactivityTimer();
                      } else if (notification is ScrollEndNotification) {
                        _controller.resetInactivityTimer();
                      }
                      return false;
                    },
                    child: SingleChildScrollView(
                      controller: _controller.scrollController,
                      physics: const BouncingScrollPhysics(),
                      child: Column(
                        children: [
                          SizedBox(
                            height: device == DeviceType.mobile ? 150 : 200,
                          ),
                          InviteText(deviceType: device),
                          const SizedBox(height: 50),
                          GlassButton(deviceType: device),
                          SizedBox(
                            height: device == DeviceType.mobile ? 300 : 275,
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                IgnorePointer(child: DecorativeElements(deviceType: device)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
