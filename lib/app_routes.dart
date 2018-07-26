import 'package:angular_router/angular_router.dart';

/// Homepage route.
final RoutePath home = RoutePath(
  path: '',
  useAsDefault: true,
);

/// Bio route.
final RoutePath bio = RoutePath(
  path: 'bio',
);

/// Résumé route.
final RoutePath resume = RoutePath(
  path: 'resume',
);

/// Projects route.
final RoutePath projects = RoutePath(
  path: 'projects',
);

/// 404 route.
final RoutePath notFound = RoutePath(
  path: 'not-found',
);
