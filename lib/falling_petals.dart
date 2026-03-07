// falling_petals.dart
import 'dart:math';
import 'package:flutter/material.dart';

const String kPetalAsset = 'assets/images/petal.png';

class FallingPetals extends StatefulWidget {
  /// Density factor: petals per million square pixels.
  /// Higher values = more petals. Default is 0.5 (works well for most screens).
  final double density;

  const FallingPetals({
    //
    super.key,
    required this.density,
  });

  @override
  State<FallingPetals> createState() => _FallingPetalsState();
}

class _FallingPetalsState extends State<FallingPetals>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  final Random _random = Random();
  late int _petalCount;
  late List<_Petal> _petals;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 20),
    )..repeat();
    _petalCount = 35; // temporary, will be updated in didChangeDependencies
    _petals = List.generate(_petalCount, (_) => _Petal(_random));
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final size = MediaQuery.of(context).size;
    final newCount = _calculatePetalCount(size);
    if (newCount != _petalCount) {
      setState(() {
        _petalCount = newCount;
        _petals = List.generate(_petalCount, (_) => _Petal(_random));
      });
    }
  }

  /// Calculates the number of petals based on screen area and density.
  /// Larger screens get more petals, so visual density stays roughly the same.
  int _calculatePetalCount(Size size) {
    final area = size.width * size.height; // in logical pixels
    final rawCount = (area * widget.density / 1e6)
        .round(); // per million pixels
    // Clamp to reasonable bounds (adjust min/max as needed)
    return rawCount.clamp(15, 100);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final screenH = MediaQuery.of(context).size.height;
    final screenW = MediaQuery.of(context).size.width;

    return IgnorePointer(
      child: AnimatedBuilder(
        animation: _controller,
        builder: (_, __) {
          return Stack(
            children: _petals.map((petal) {
              final progress = (_controller.value + petal.delay) % 1.0;
              final y = progress * screenH;
              final drift =
                  sin(progress * 2 * pi * petal.swingSpeed) * petal.swingAmount;

              // Base position (0..1) times screen width
              double x = petal.startX * screenW + drift;

              // Clamp x so the entire petal stays visible
              // (assume petal width ≈ petal.size)
              x = x.clamp(0.0, screenW - petal.size);

              final rotation = progress * 2 * pi * petal.rotateSpeed;

              return Positioned(
                top: y,
                left: x,
                child: Transform.rotate(
                  angle: rotation,
                  child: Image.asset(kPetalAsset, width: petal.size),
                ),
              );
            }).toList(),
          );
        },
      ),
    );
  }
}

class _Petal {
  final double startX;
  final double size;
  final double delay;
  final double swingAmount;
  final double swingSpeed;
  final double rotateSpeed;

  _Petal(Random random)
    : startX = random.nextDouble(),
      size = 14 + random.nextDouble() * 14,
      delay = random.nextDouble(),
      swingAmount = 20 + random.nextDouble() * 40,
      swingSpeed = 0.5 + random.nextDouble() * 1.5,
      rotateSpeed = 0.5 + random.nextDouble() * 2;
}
