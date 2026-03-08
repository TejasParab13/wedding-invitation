// wedding_decorations.dart
import 'package:flutter/material.dart';
import 'wedding_animation.dart';
import 'wedding_logic.dart';

enum DeviceType { mobile, desktop }

// ---------------------------------------------------------------------------
// Background
// ---------------------------------------------------------------------------
class BackgroundImage extends StatelessWidget {
  const BackgroundImage({super.key});

  @override
  Widget build(BuildContext context) {
    return Image.asset(kBgAsset, fit: BoxFit.cover);
  }
}

// ---------------------------------------------------------------------------
// Invite Text (size differs by device)
// ---------------------------------------------------------------------------
class InviteText extends StatelessWidget {
  final DeviceType deviceType;
  const InviteText({super.key, required this.deviceType});

  @override
  Widget build(BuildContext context) {
    final width = deviceType == DeviceType.mobile ? 250.0 : 300.0;
    return Center(
      child: SizedBox(
        width: width,
        child: Image.asset(getTextAsset(), fit: BoxFit.contain),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Glass Button (style differs by device)
// ---------------------------------------------------------------------------
class GlassButton extends StatelessWidget {
  final DeviceType deviceType;
  const GlassButton({super.key, required this.deviceType});

  @override
  Widget build(BuildContext context) {
    final hPadding = deviceType == DeviceType.mobile ? 20.0 : 28.0;
    final vPadding = deviceType == DeviceType.mobile ? 10.0 : 14.0;
    final fontSize = deviceType == DeviceType.mobile ? 10.0 : 16.0;

    return GestureDetector(
      onTap: WeddingController.openMap,
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: hPadding, vertical: vPadding),
        decoration: BoxDecoration(
          color: Colors.white,
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
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(Icons.location_on, color: Colors.black87),
            const SizedBox(width: 10),
            Text(
              'Open Venue Location',
              style: TextStyle(
                color: Colors.black87,
                fontSize: fontSize,
                fontWeight: FontWeight.w500,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Floor (identical for both)
// ---------------------------------------------------------------------------
class Floor extends StatelessWidget {
  const Floor({super.key});

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

// ---------------------------------------------------------------------------
// Railing (identical)
// ---------------------------------------------------------------------------
class Railing extends StatelessWidget {
  const Railing({super.key});

  @override
  Widget build(BuildContext context) {
    final animation = AnimationScope.of(context)!.floatAnim;
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

// ---------------------------------------------------------------------------
// Arch (differs between mobile and desktop)
// ---------------------------------------------------------------------------
class Arch extends StatelessWidget {
  final DeviceType deviceType;
  const Arch({super.key, required this.deviceType});

  @override
  Widget build(BuildContext context) {
    final scope = AnimationScope.of(context)!;
    if (deviceType == DeviceType.mobile) {
      return Positioned(
        bottom: 50,
        left: 0,
        right: 0,
        child: SizedBox(
          height: 800,
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
      );
    } else {
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
}

// ---------------------------------------------------------------------------
// Pillars (different number of rows)
// ---------------------------------------------------------------------------
class Pillars extends StatelessWidget {
  final DeviceType deviceType;
  const Pillars({super.key, required this.deviceType});

  @override
  Widget build(BuildContext context) {
    final animation = AnimationScope.of(context)!.floatAnim;
    if (deviceType == DeviceType.mobile) {
      return Stack(
        children: [
          _buildPillarRow(animation, 400),
          _buildPillarRow(animation, 800),
        ],
      );
    } else {
      return Stack(
        children: [
          _buildPillarRow(animation, 500),
          _buildPillarRow(animation, 800),
          _buildPillarRow(animation, 2225),
        ],
      );
    }
  }

  Widget _buildPillarRow(Animation<double> animation, double spacing) {
    return Positioned(
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
                SizedBox(width: spacing),
                Transform.flip(
                  flipX: true,
                  child: const Image(image: AssetImage(kPillarAsset)),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Them Image (bottom offset and spacing differ)
// ---------------------------------------------------------------------------
class ThemImage extends StatelessWidget {
  final DeviceType deviceType;
  const ThemImage({super.key, required this.deviceType});

  @override
  Widget build(BuildContext context) {
    final scope = AnimationScope.of(context)!;
    final bottom = deviceType == DeviceType.mobile ? -75.0 : -50.0;
    final spacing = deviceType == DeviceType.mobile ? 700.0 : 900.0;
    return Positioned(
      bottom: bottom,
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
              child: Row(
                children: [
                  const Image(image: AssetImage(kThemAsset)),
                  SizedBox(width: spacing),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Helper widget for floating translation
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Composite decorative elements (used in main page)
// ---------------------------------------------------------------------------
class DecorativeElements extends StatelessWidget {
  final DeviceType deviceType;
  const DecorativeElements({super.key, required this.deviceType});

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        const Floor(),
        const Railing(),
        Arch(deviceType: deviceType),
        Pillars(deviceType: deviceType),
        ThemImage(deviceType: deviceType),
      ],
    );
  }
}
