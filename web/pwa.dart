import 'package:pwa/worker.dart';
import 'package:website/pwa/offline_urls.g.dart' as offline;

void main() {
  // Make 3 caches
  final analyticsCache = DynamicCache('analytics');
  final cdnCache = DynamicCache('cdn');
  final fontsCache = DynamicCache('fonts');

  // Initialize the PWA worker
  new Worker()
    // Assign the worker's offline URLS to the variable defined above
    ..offlineUrls = offline.offlineUrls

    // Define cache strategies for 3rd-party assets
    ..router.registerGetUrl(
        'https://www.google-analytics.com/', analyticsCache.networkFirst)
    ..router.registerGetUrl(
        'https://www.googletagmanager.com/', analyticsCache.networkFirst)
    ..router.registerGetUrl('https://cdn.jsdelivr.net/', cdnCache.cacheFirst)
    ..router
        .registerGetUrl('https://fonts.googleapis.com/', fontsCache.cacheFirst)
    ..router.registerGetUrl('https://fonts.gstatic.com/', fontsCache.cacheFirst)
    ..router.registerGetUrl(
        'https://storage.googleapis.com/', fontsCache.cacheFirst)

    // Start the PWA worker
    ..run(version: offline.lastModified);
}
