import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:website/app_component.dart';

import 'main.template.dart' as ng;

void main() {
  bootstrapStatic(
    AppComponent,
    [
      routerProviders,
      const Provider(APP_BASE_HREF, useValue: '/'),
      new Provider(Window, useValue: window),
    ],
    ng.initReflector,
  );
}
