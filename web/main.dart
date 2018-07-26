import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:pwa/client.dart' as pwa;
import 'package:website/app_component.template.dart' as app;

import 'main.template.dart' as ng;

void main() {
  // Initialize Service Worker
  pwa.Client();

  // Initialize Firebase
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

  // Initialize App
  runApp(app.AppComponentNgFactory, createInjector: appInjector);
}

// Inject things into App
@GenerateInjector([
  routerProviders,
  ValueProvider.forToken(appBaseHref, '/'),
])
final InjectorFactory appInjector = ng.appInjector$Injector;
