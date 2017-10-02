@Tags(const ['aot'])
@TestOn('browser')
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_test/angular_test.dart';
import 'package:pageloader/objects.dart';
import 'package:test/test.dart';
import 'package:anthony_codes/anthony_codes_component.dart';

NgTestFixture<AnthonyCodesComponent> fixture;
AppPO appPO;

@AngularEntrypoint()
void main() {
  final testBed = new NgTestBed<AnthonyCodesComponent>();

  setUp(() async {
    fixture = await testBed.create();
    appPO = await fixture.resolvePageObject(AppPO);
  });

  tearDown(disposeAnyRunningTest);

  test('title', () async {
    expect(await appPO.title, 'Anthony Codes');
  });
}

class AppPO {
  @ByTagName('h1')
  PageLoaderElement _title;

  Future<String> get title => _title.visibleText;
}
