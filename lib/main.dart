import 'package:flutter/material.dart';
import 'package:wedding_invitation/wedding_page_M.dart';
import 'package:wedding_invitation/wedding_page_P.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: LayoutBuilder(
        builder: (context, constraints) {
          // If width is less than 600px, treat as mobile
          if (constraints.maxWidth < 600) {
            return const WeddingPageM();
          } else {
            return const WeddingPageP(); // your existing desktop version
          }
        },
      ),
    );
  }
}
