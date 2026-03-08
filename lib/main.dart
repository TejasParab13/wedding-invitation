// main.dart
import 'package:flutter/material.dart';
import 'wedding_page.dart';
import 'wedding_decorations.dart'; // for DeviceType enum

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final deviceType = constraints.maxWidth < 600
            ? DeviceType.mobile
            : DeviceType.desktop;
        return WeddingPage(deviceType: deviceType);
      },
    );
  }
}
