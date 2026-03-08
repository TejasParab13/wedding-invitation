// wedding_animation.dart
import 'package:flutter/material.dart';

/// Provides all animations to decorative widgets.
class AnimationScope extends InheritedWidget {
  const AnimationScope({
    super.key,
    required super.child,
    required this.floatAnim,
    required this.archWarpAnim,
    required this.themTiltAnim,
  });

  final Animation<double> floatAnim;
  final Animation<double> archWarpAnim;
  final Animation<double> themTiltAnim;

  static AnimationScope? of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<AnimationScope>();
  }

  @override
  bool updateShouldNotify(AnimationScope old) =>
      floatAnim != old.floatAnim ||
      archWarpAnim != old.archWarpAnim ||
      themTiltAnim != old.themTiltAnim;
}
