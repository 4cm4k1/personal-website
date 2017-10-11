import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'home',
  styleUrls: const <String>[
    'home_component.css',
  ],
  templateUrl: 'home_component.html',
  directives: const <Object>[
    CORE_DIRECTIVES,
    materialDirectives,
  ]
)
/// Main page of website.
class HomeComponent implements OnInit {
  @override
  Future<Null> ngOnInit() async {
  }
}
