import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';
import 'src/home/home_component.dart';
import 'src/not_found/not_found_component.dart';

@Component(
  selector: 'app',
  styleUrls: const <String>[
		'package:angular_components/src/components/app_layout/layout.scss.css',
		'app_component.css',
	],
  templateUrl: 'app_component.html',
  directives: const <Object>[
		materialDirectives,
		ROUTER_DIRECTIVES,
		DeferredContentDirective,
    MaterialButtonComponent,
    MaterialIconComponent,
    MaterialTemporaryDrawerComponent,
    MaterialToggleComponent,
	],
  providers: const <Object>[
		materialProviders,
		ROUTER_PROVIDERS,
	],
)

@RouteConfig(const [
  const Route(
		path: '/',
		name: 'Home',
		component: HomeComponent,
	),
	const Route(
		path: '/not-found',
		name: 'NotFound',
		component: NotFoundComponent,
	),
	const Redirect(
		path: '/**',
		redirectTo: const ['Home'],
	)
])

/// Entire app.
class AppComponent {
	/// Whether pop-out drawer appears on left or right.
	bool end = false;

	/// Whether overlay darkening rest of page activates when drawer pops out.
	bool overlay = true;
}
