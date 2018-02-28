import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
// import 'package:angular_components/angular_components.dart';

@Component(
    selector: 'projects',
    styleUrls: const [
      'projects_component.css',
    ],
    templateUrl: 'projects_component.html',
    directives: const [
      coreDirectives,
    ])

/// Projects page.
class ProjectsComponent implements OnActivate {
  @override
  Future<Null> onActivate(_, __) async {}
}
