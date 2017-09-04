import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'nav-bar',
  styleUrls: const ['nav_bar_component.css'],
  templateUrl: 'nav_bar_component.html',
  directives: const [
    CORE_DIRECTIVES,
    materialDirectives,
  ]
)
class NavBarComponent implements OnInit {
  @override
  Future<Null> ngOnInit() async {
		print("Nav bar is loaded!");
  }
}
