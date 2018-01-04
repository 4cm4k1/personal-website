import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:firebase/firebase.dart' as fb;
// import 'package:firebase/firebase_firestore.dart';
import 'package:website/app_component.dart';

import 'main.template.dart' as ng;

void main() {
  // testing FB here
  try {
    fb.initializeApp(
        apiKey: 'apiKey',
        authDomain: 'authDomain',
        databaseURL: 'databaseUrl',
        storageBucket: 'storageBucket',
        projectId: 'projectId');
  } on fb.FirebaseJsNotLoadedException catch (e) {
    print(e);
  }

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
