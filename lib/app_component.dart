import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';
import 'src/home/home_component.dart';
import 'src/not_found/not_found_component.dart';

@Component(
  selector: 'app',
  styleUrls: const [
		'package:angular_components/src/components/app_layout/layout.scss.css',
		'app_component.css',
	],
  templateUrl: 'app_component.html',
  directives: const [
		materialDirectives,
		ROUTER_DIRECTIVES,
		DeferredContentDirective,
    MaterialButtonComponent,
    MaterialIconComponent,
    MaterialTemporaryDrawerComponent,
    MaterialToggleComponent,
	],
  providers: const [materialProviders, ROUTER_PROVIDERS],
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

class AppComponent {
	bool end = false;
	bool overlay = true;
}
