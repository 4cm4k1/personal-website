import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';

import 'app_routes.dart' as app_routes;
import 'src/bio/bio_component.template.dart' as bio_component;
import 'src/home/home_component.template.dart' as home_component;
import 'src/not_found/not_found_component.template.dart' as not_found_component;
import 'src/projects/projects_component.template.dart' as projects_component;
import 'src/resume/resume_component.template.dart' as resume_component;

@Component(
  selector: 'app',
  styleUrls: const [
    'package:angular_components/app_layout/layout.scss.css',
    'app_component.css',
  ],
  templateUrl: 'app_component.html',
  directives: const [
    materialDirectives,
    routerDirectives,
    DeferredContentDirective,
    MaterialButtonComponent,
    MaterialIconComponent,
    MaterialTemporaryDrawerComponent,
    MaterialToggleComponent,
  ],
  providers: const [
    materialProviders,
  ],
)

/// Route app component.
class AppComponent {
  /// Home page route.
  String homeRoute = app_routes.home.toUrl();

  /// Bio page route.
  String bioRoute = app_routes.bio.toUrl();

  /// Résumé page route.
  String resumeRoute = app_routes.resume.toUrl();

  /// Projects page route.
  String projectsRoute = app_routes.projects.toUrl();

  /// 404 page route.
  String notFoundRoute = app_routes.notFound.toUrl();

  /// Blog page route.
  String blogRoute = 'https://blog.anthony.codes';

  /// List of route definitions.
  final List<RouteDefinition> routes = [
    new RouteDefinition(
      routePath: app_routes.home,
      component: home_component.HomeComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: app_routes.bio,
      component: bio_component.BioComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: app_routes.resume,
      component: resume_component.ResumeComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: app_routes.projects,
      component: projects_component.ProjectsComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: app_routes.notFound,
      component: not_found_component.NotFoundComponentNgFactory,
    ),
  ];

  /// Whether pop-out drawer appears on left or right.
  bool end = false;

  /// Whether overlay darkening rest of page activates when drawer pops out.
  bool overlay = true;
}
