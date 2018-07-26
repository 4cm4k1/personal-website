import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';

@Component(
    selector: 'home',
    styleUrls: [
      'home_component.css',
    ],
    templateUrl: 'home_component.html',
    directives: [
      coreDirectives,
      MaterialProgressComponent,
    ])

/// Home page.
class HomeComponent implements OnActivate {
  @override
  Future<Null> onActivate(_, __) async {}
}
