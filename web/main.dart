// import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular/experimental.dart';
import 'package:angular_router/angular_router.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:pwa/client.dart' as pwa;
import 'package:website/app_component.template.dart' as app;

import 'main.template.dart' as ng;

// New way to inject dependencies, but doesn't fully work
@GenerateInjector(const [
  routerProviders,
  const Provider(APP_BASE_HREF, useValue: '/'),
  //  new ValueProvider(Window, window), - doesn't work
])
final InjectorFactory appInjector = ng.appInjector$Injector;

void main() {
  new pwa.Client();

  try {
    fb.initializeApp(
        apiKey: 'AIzaSyBQFtT5GU6KyUgZrHo_ko0cBPA02uSVaC8',
        authDomain: 'anthony-codes.firebaseapp.com',
        databaseURL: 'https://anthony-codes.firebaseio.com',
        projectId: 'anthony-codes',
        storageBucket: 'anthony-codes.appspot.com');
  } on fb.FirebaseJsNotLoadedException catch (e) {
    print(e);
  }

  // Experimental version until runApp is exported
  bootstrapFactory(
    app.AppComponentNgFactory,
    appInjector,
  );
}
