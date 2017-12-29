import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
// import 'package:angular_components/angular_components.dart';

@Component(
    selector: 'bio',
    styleUrls: const [
      'bio_component.css',
    ],
    templateUrl: 'bio_component.html',
    directives: const [
      CORE_DIRECTIVES,
    ])

/// Bio page.
class BioComponent implements OnActivate {
  @override
  Future<Null> onActivate(_, __) async {}
}
