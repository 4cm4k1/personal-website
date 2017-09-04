import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'src/nav_bar/nav_bar_component.dart';

@Component(
  selector: 'anthony-codes',
  styleUrls: const ['anthony_codes_component.css'],
  templateUrl: 'anthony_codes_component.html',
  directives: const [materialDirectives, NavBarComponent],
  providers: const [materialProviders],
)
class AnthonyCodesComponent {
}
