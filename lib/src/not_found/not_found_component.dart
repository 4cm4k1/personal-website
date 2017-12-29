import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
// import 'package:angular_components/angular_components.dart';

@Component(
    selector: 'not-found',
    styleUrls: const [
      'not_found_component.css',
    ],
    templateUrl: 'not_found_component.html',
    directives: const [
      CORE_DIRECTIVES,
    ])

/// 404 page.
class NotFoundComponent implements OnActivate {
  @override
  Future<Null> onActivate(_, __) async {}
}
