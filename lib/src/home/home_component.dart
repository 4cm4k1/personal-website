import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'home',
  styleUrls: const ['home_component.css'],
  templateUrl: 'home_component.html',
  directives: const [
    CORE_DIRECTIVES,
    materialDirectives,
  ]
)
class HomeComponent implements OnInit {
  @override
  Future<Null> ngOnInit() async {
		print("Home is loaded!");
  }
}
