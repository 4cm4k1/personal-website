import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';
import 'src/home/home_component.dart';
import 'src/not_found/not_found_component.dart';

@Component(
  selector: 'anthony-codes',
  styleUrls: const [
		'anthony_codes_component.css',
		'package:angular_components/src/components/app_layout/layout.scss.css',
	],
  templateUrl: 'anthony_codes_component.html',
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

class AnthonyCodesComponent {
	bool end = false;
	bool overlay = true;
}
