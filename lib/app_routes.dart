import 'package:angular_router/angular_router.dart';

/// Homepage route.
final RoutePath home = new RoutePath(
  path: '',
  useAsDefault: true,
);

/// Bio route.
final RoutePath bio = new RoutePath(
  path: 'bio',
);

/// Résumé route.
final RoutePath resume = new RoutePath(
  path: 'resume',
);

/// Projects route.
final RoutePath projects = new RoutePath(
  path: 'projects',
);

/// 404 route.
final RoutePath notFound = new RoutePath(
  path: 'not-found',
);