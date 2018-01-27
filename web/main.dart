import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:firebase/firebase.dart' as fb;
// import 'package:firebase/firestore.dart';
import 'package:website/app_component.dart';

import 'main.template.dart' as ng;

void main() {
  const WINDOW = const OpaqueToken<String>('Window');

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

  bootstrapStatic(
    AppComponent,
    [
      routerProviders,
      const ValueProvider.forToken(APP_BASE_HREF, '/'),
      const ValueProvider.forToken(WINDOW, 'window'),
    ],
    ng.initReflector,
  );
}
