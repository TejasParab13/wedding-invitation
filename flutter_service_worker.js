'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ea155ad133c0a6cb980153dfac5f7634",
".git/config": "770169e81a43826e342cd79bb0f58b5e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "618cbdfadf6aa8cbf8fef1493413171a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67ae0f4512ff91c2bc9dd62be2254cdc",
".git/logs/refs/heads/main": "67ae0f4512ff91c2bc9dd62be2254cdc",
".git/logs/refs/remotes/origin/HEAD": "a774b93ddc2bd7667479c0457121b9ae",
".git/logs/refs/remotes/origin/main": "4021371d92511ea79e548fa2e42510d9",
".git/objects/03/6e64bb8ca11a222d3ef81097a716c52432b7e3": "440d016334bc92eeed12676039aad579",
".git/objects/05/695607577f058fc6501125c40b0f413cf8ee05": "6286c0b9c9a50396ea4e619aa458f389",
".git/objects/26/394fec8149f69b136f65e914d40f3537de4d0b": "f47ca949d75ff28da9839741567d48be",
".git/objects/27/dc006ce8d0d258f91f42a75f8adf49b6194637": "0928df3e316e906614402bdb662f6690",
".git/objects/31/57b3d0fd0601324805623d8be6c980b21c8525": "30e1db831d169e7d566d1f7e063d9598",
".git/objects/41/f9791540f0706fab415ba4cd22c3ff8d7c1574": "cc93e7d8e992aa0dd2deb79f704a0d50",
".git/objects/48/0f9da6c1628acf93be5ec6d116573f87010656": "869e8084efe272c447f0d14ec9df7c5a",
".git/objects/56/5b4ec3fb7657e4c8d81bf0437de9e2cb9ea4df": "e0b06d0032109dedc2a4fd50fa001927",
".git/objects/62/8f889706d689b8fb9592fd7ecfdf269fcac674": "3c140f861aa0fb0a4c25dc806658a2ef",
".git/objects/6a/26eee353ea0adee0756eba93186c1ecea382b1": "4be3df3a697e666da41b2e3392251e93",
".git/objects/7b/95a8802ecd6b6aaa324e1e7117bc180fb2d56c": "c3fd23ab28760c15a2be8473cb4d92ba",
".git/objects/7d/0e285f4eb368ba8706efa371fcb6355197b16a": "220c360656bad950bd146564155011d4",
".git/objects/81/29142ccbbbfeaa7101ae76148dfb9388fc9b19": "bbd601cc2f5d8fa76fe0d51cb16728cb",
".git/objects/82/d5e9ea80be8f414bd764acc2aa0621f895e82d": "a174df85a18f78c0d71970ebcef9925c",
".git/objects/a6/7d2a4128a7eec7044e3d17a1aa98953a49618d": "7597f2eb3b250df78b877da70748811f",
".git/objects/af/2b0f51a46a288669adc8fbab8e443a1caddc28": "6a013ba3b8d9d0a87d8fe8108ff4856c",
".git/objects/b1/9455addf58968ebd2d2b34dabcb0065b115b3e": "a05403e340672dab0e296b79bc26e7ca",
".git/objects/b1/d750977254e634222cb6f23aebbd2e2edbe10c": "d56bde655e22a1fb9d02cc1c2be1749b",
".git/objects/b3/14b4ebbae17e463e6350ba8536f15718ee805a": "cacbcb591d4a410fe725f1da55c91c73",
".git/objects/b4/d98c9f021f60666327785f3ac75832db996fd4": "6df768784b380cc132f78af2069f553f",
".git/objects/b7/57112a98f1745e316bacf88982cd4c1dacdf51": "700aca077160b025ff471a710258608d",
".git/objects/c8/03f3178ce9f317de8569e3f66dd432aeef5ddd": "5a2924595d2569613ead5ca5f69c0efd",
".git/objects/c8/8f21ae713098393efdfd94a5873903e29deb6b": "44861e4373c9ace16fbbe73ed3f19640",
".git/objects/ca/68d9aa4029a898ab47564ee69cfbcf99be95d6": "ee52ab845a36c92c2e9a94505624127e",
".git/objects/cb/53f23cb6361280ddef1f2c28194a2012c23a7e": "92fd97b1ffd3f2b3e410bc9538f10824",
".git/objects/d8/5003f1c5e1011896b29ef38d912a97fbac8eda": "9f4e605eedc2ec3d9d9b7b4944e6aa3d",
".git/objects/da/dddbae24f825b351386e55002868426a2ff01c": "18d7e51bebf42cb0912a542feb7dbe96",
".git/objects/e1/662d276d6d28542b1f7bde0b82b48b66816293": "0ce322cc802b6969353a16876186d12f",
".git/objects/eb/996effd2a831d8ee177b9961951ccaed47f76b": "cc7af61446b084669dfa89a6b83657fb",
".git/objects/f3/3d6140ec81d378fa1c1b218b9682e632dc76fc": "7dee18b5ec41762684ada78bac631ab7",
".git/objects/pack/pack-652107545dfa742d22b53caa0ca971c2f3003fb3.idx": "206ba2857fc7a7ea7451faf0a79040e9",
".git/objects/pack/pack-652107545dfa742d22b53caa0ca971c2f3003fb3.pack": "a337b49cc2f1ba1f41923292545679b8",
".git/objects/pack/pack-652107545dfa742d22b53caa0ca971c2f3003fb3.rev": "9fd78ba15b6739c7bb062aec504f5de2",
".git/packed-refs": "015b99936ff5c5b6957aaa64cf9f1426",
".git/refs/heads/main": "f010a35f0fee8e484bc5a5fa1deff55c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f010a35f0fee8e484bc5a5fa1deff55c",
"assets/AssetManifest.bin": "40e1978b95d3376c4038f322e97c05b6",
"assets/AssetManifest.bin.json": "185fa462021643f432ecfc65ea0088cd",
"assets/assets/images/Arch1.png": "133fa7baa94043b19597c5ca773e7885",
"assets/assets/images/BG1.png": "55a53050ef7db19465902a76e939906d",
"assets/assets/images/flor1.png": "4878aac3b5080e25153003275565f6ca",
"assets/assets/images/G1.png": "039089d5d0de90cec57ab36b9eef01f0",
"assets/assets/images/petal.png": "0951a660687e3773643c54de8880b811",
"assets/assets/images/Pillerr3.png": "b0b23d52d682a677da480dd5c439b52e",
"assets/assets/images/Rall1.png": "e5e076c3a99f65a904838a5087fd34ff",
"assets/assets/images/text.png": "134846d9846722d674e6e91890795812",
"assets/assets/images/them.png": "9188129a5dc94f985cf3a0f502238e06",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ae945d7cd305ec4632c0a4e7147e5d2d",
"assets/NOTICES": "6976dc88411e42cd30187f1cf62e4271",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "2508ee14644d7f831d0233bd7871aaa4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d6288e51ff10fabc7fdbd8ddc6bd38c",
"/": "6d6288e51ff10fabc7fdbd8ddc6bd38c",
"main.dart.js": "1e17eee0a0578d709e34ccbaf8afef90",
"manifest.json": "a7b3de0ff4368eff4fa1b36ef9555702",
"version.json": "fa62a0f385fd246e09c15612da75b2b8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
