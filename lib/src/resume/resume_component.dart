import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'resume',
  styleUrls: const [
    'resume_component.css',
  ],
  templateUrl: 'resume_component.html',
  directives: const [
    CORE_DIRECTIVES,
    materialDirectives,
  ]
)
/// Résumé page.
class ResumeComponent implements OnActivate {
  @override
  Future<Null> onActivate(_, __) async {
  }
}
