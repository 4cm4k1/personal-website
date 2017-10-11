import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'not-found',
  styleUrls: const <String>[
    'not_found_component.css',
  ],
  templateUrl: 'not_found_component.html',
  directives: const <Object>[
    CORE_DIRECTIVES,
    materialDirectives,
  ]
)
/// Page shown on 404 errors.
class NotFoundComponent implements OnInit {
  @override
  Future<Null> ngOnInit() async {
  }
}
