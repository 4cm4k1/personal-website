@Tags(const <String>['aot'])
@TestOn('browser')
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_test/angular_test.dart';
import 'package:pageloader/objects.dart';
import 'package:test/test.dart';
import 'package:website/app_component.dart';

/// Test fixture.
NgTestFixture<AppComponent> fixture;

/// App page object.
AppPO appPO;

@AngularEntrypoint()
void main() {
  final testBed = new NgTestBed<AppComponent>();

  setUp(() async {
    fixture = await testBed.create();
    appPO = await fixture.resolvePageObject(AppPO);
  });

  tearDown(disposeAnyRunningTest);

  test('title', () async {
    expect(await appPO.title, 'Anthony Codes');
  });
}

/// App page object.
class AppPO {
  @ByTagName('h1')
  PageLoaderElement _title;

  /// Gets the content of the <h1> tag.
  Future<String> get title => _title.visibleText;
}
