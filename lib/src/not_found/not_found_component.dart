import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'not-found',
  styleUrls: const ['not_found_component.css'],
  templateUrl: 'not_found_component.html',
  directives: const [
    CORE_DIRECTIVES,
    materialDirectives,
  ]
)
class NotFoundComponent implements OnInit {
  @override
  Future<Null> ngOnInit() async {
  }
}
