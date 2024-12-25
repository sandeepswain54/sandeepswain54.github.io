'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "93591349f1212dfc43c9d1b8dd8d8eab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c2b1c39bc49a20991b757e23f002b086",
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
".git/index": "520a083b82058595b00af45e502eacb6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23c20298e387c0a11e974385e853c94a",
".git/logs/refs/heads/main": "bd1a017693b31e5bdef6640bfdd2fa9d",
".git/logs/refs/remotes/origin/main": "41e84778a15369ce6d49b616961c44b2",
".git/objects/06/9eee09be06a3e464cac0005effcbd80a7fd88b": "87243520b859d2426361da7953766c30",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/bbea9a441a5a29daa52ea54b559f55560228a7": "26bda7b3a02d7f6bb8ae83391de00af2",
".git/objects/0c/8731b3cdc85224629ec75f24c6edc01dfc43a5": "fc558f92e8de39fc19ea238e1fcc6850",
".git/objects/12/49efb3019ef7b6acf61679b1c86bce90ea4f72": "708c940cc43e0ce251d0d83ab0567a1b",
".git/objects/13/670e03cc4e58017562e4914d9e34be92fb7a6e": "5498a20451a4288bf449fea608c67ef8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/b619f6e0454a4daf638c1eb580897c47eb4190": "dff1288d6dd09adb7f12426961a0a67d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2d/c711a9b06e4869ae8278dc966a5ff620f94e23": "34b163fae63b3f258058bcba7f420306",
".git/objects/2e/5e6de2d1866c0ef1d375796dd5466ad611f0ee": "4b95450753a372e5c70fb0608467c461",
".git/objects/30/ba572c97fb8a516d8a3be83ecf23e83fb2d629": "28ebb15e82b79f6d7d052ee60262ce9a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/97341ce4c7a9aa65a8176a2908c89d1c124a16": "9d9bb9520c78e3c8e58fe249851d2bca",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/6191ca19a7a5bd26b6910e0e897de17a38c3b7": "d6de65efdca3486fa23fdd4eb1a5e164",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/ca6c58adb7c384405cde4ffe5d0f500b28934a": "7ce59df40b522932be0b638e4f0acf0f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/5c6d310ec25948660e5a1daa95be08bd73675e": "20272d1b3b30b28c505a775a80869c7d",
".git/objects/4b/23265da2601503c895414ee3f71f4a100700b3": "562f4047cba84a116aa2059a9ffece75",
".git/objects/4c/a4bb02ba08c00b079992e368cec8742f35fa8f": "5aa7ff62a3618a720893294b85e67f2f",
".git/objects/4d/d98baddbf154a93a4c4a9b6445edb75cd77fb7": "a3f685f8b33899f35921facb534dd1bd",
".git/objects/52/0a31bbb365ac9009f7dec1f6a91b3a04a9ee60": "caa32527bd51c579650de29ce63da52f",
".git/objects/53/32db02d89a0aa02d5e0f411b830d9aab56a280": "5aebfe1d361534e832440d5d229bcc47",
".git/objects/56/a31068d4f5be49732b0256e2692a3cb76cc4d3": "b30b2cb266de6314b16ddce79b551ba1",
".git/objects/5e/96b742ee7aae8375ab7df0894584feb5b9a452": "de6421fb47d914bf2956a77b7641b689",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/56064f1aa8bb7e6295f6579f8b67b83b28c898": "2cfd00336d9be65f2e41e416045a661b",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/60/05d82bfc2142be5aeb4c01e379e28cc2e801c8": "cd99b6b12a67a22cdc7672393a75c657",
".git/objects/62/3c487afecfaed190bea5e37ed43d53fb60423c": "32796bac6b8e42e4eeac88bf282ab98d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/79/22645b5acba8e1170b1b6852bf99a6a14640b2": "5f70e54cb4de5ef94a3b7440c2609289",
".git/objects/7c/084cd3fdede2d69efa06b529a39af8d01a34b1": "37712285164adca02e9ce15c8a9e667d",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/692f76a5d727188a20a3dd092111b077201fc6": "08541874f38a920c5bc1fe91eb8d6e6b",
".git/objects/83/13aefd6059255c87b6f378e6434e99b89be9cb": "e6e96fcc96dd92ca8b2a1bf6a1ea2cab",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/83333d13e77ffde3d329549342cdd54bcc9f42": "68c2b5ef3c812b624f04d80bf30e9e4b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/655c3e0f1c2ba68764a065433ffd6247b7ad29": "3d25175f517ddc746745b35f5c441122",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/6137bdeb882bfc374933626d93450cdf4d5dbf": "deb749476c061c3d23ce1e09090ec1ec",
".git/objects/a2/74b587e4172076c5e2dada2900e7484b318eba": "15109311370d43daabc76388076586db",
".git/objects/a8/ed47452fb0afa98b697de48c2d267b694be57a": "e8a8f4d0e0e58e743b6895b302c31524",
".git/objects/a9/22c94b6c1f3a664f607425a5fbf88c0a8fdfe8": "299c34c050d9ab68871c1b7715b76f8e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b9/a159016fb78e854abeccc909bcd4f5c74d1c84": "2c7aa1fa5e41bde85e66d13c7a868752",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/faf409cd02083eb100b5cda5021fbcdfe2d6d9": "3bc91050e20624fd7b15d4dca7b5e6b3",
".git/objects/c3/75fda5863682a5c73b1ace64e146f3376e53f1": "9cf71ce6a0fd1db825e44e6057670d67",
".git/objects/c6/5dd2b4b75cffc66806a3357411a76b6e899e48": "a01c00cbb00d25f8b7f11c4bbcd90bc8",
".git/objects/c7/45639621433d1b8031de7dbe7b2b318f3e053d": "cd4741e6f6557e180230d5e565502c13",
".git/objects/c7/f9a0689a93b3d6ec1b840b924d557b86735b82": "e53ec6c170be38dc3754a331e22fb2d0",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/1a4f83063a085cf1a668eecf9def553052340d": "a46880287a81eb957d0c2f7bb6bce24f",
".git/objects/d2/c5915ef5e7f9fe2a896bb45783198c25ea013d": "df69a207f0b0e0d32d43c51313394b0a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/a0c60f9940e6f78f8c6a78e41604169acccaef": "bc2eda1631462852a2a0ce2bdeca56b2",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/31006b5590df407a0e776d5d731691024df948": "b4736b80b3d998e5e9857f3e040ed090",
".git/objects/db/be183dced3ca4cffd443134425af9d850d3809": "f8908c26df69dcfee0a3a3da41ad388c",
".git/objects/de/143f9c02ec0e925f49b91fb71cf7c6002e2d2d": "9d646e10b6203acc987128853e156bf0",
".git/objects/e3/f4f60e9258c8d96dc9b93fdb85349e49790e72": "252cac512b914ab0991f4c542c408930",
".git/objects/e5/33c4ffcd43c051491db6aaeb087e036d2efe7b": "f37d89ccf300beb6bfa26df12fd61fff",
".git/objects/e7/0459b8faf0d9ad295865e62ad8cbda322e55f4": "43c91f252d3dad74e7fe1ccbaaf1cf59",
".git/objects/e9/2977f94b28540f6e16da9b20a104adafd10d2a": "8da8eca8a2ec481e64260f929e7c32f4",
".git/objects/e9/29cd706786f70cf43d4616707885e0aa7d4ee0": "e438f7d8de6438462624bba6258abb1e",
".git/objects/ef/13f1cc688e483a1b2ee8eaff287b223f0b22b9": "260594309a424c404b0d31cf9d707ff7",
".git/objects/ef/2794d59bf8fbc3250bb3bf3bd1be9823344389": "ecf3b63147b0d45c538242246c9a77b4",
".git/objects/ef/48c6c2614ec33f892f8bbec6a6559acc012b4b": "ad906cacb53c020daba7aedef0833180",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/ca99953098f4e7f6e2945868afcafdf0bc8cf4": "c57d8dd87cb4ed7f47c48eb506bade0f",
".git/objects/ff/d4ed5679aab8ee1c61e1d05370aab8318518e7": "b0687ef8ef4d27e8bf984ec1b9f50ef2",
".git/refs/heads/main": "d01cd1271af2c1ea259e394b2d9e5532",
".git/refs/remotes/origin/main": "d01cd1271af2c1ea259e394b2d9e5532",
"assets/AssetManifest.bin": "3220eb0b314b44e5cdb1f0b9924ea1d6",
"assets/AssetManifest.bin.json": "98a0420a64ec855421aaf9faaf7fc0e2",
"assets/AssetManifest.json": "2edbb5387a49926e77d71fc10584d697",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4f86039a499d48ca4718076f317450b9",
"assets/lib/assets/anurag.jpg": "af11ce22e2a27c4fe16ac0d7a9f29744",
"assets/lib/assets/anurag2.jpg": "da450fc6144ba56d9689b8d949f870d8",
"assets/lib/assets/cyber1.jpg": "b70bd3a8de359de75b27702373260617",
"assets/lib/assets/cyber11.jpg": "cf590d5f80c01e15c086bad3c2b4bef6",
"assets/lib/assets/ff.jpg": "c48e643e09913fd6ebad8c49cdb82967",
"assets/lib/assets/ff2.jpg": "b1034038db757ec059aacabbc74d96e0",
"assets/lib/assets/me.png": "b6d4f2999723f7581cf2c56f1e0caed2",
"assets/lib/assets/price.jpg": "2f60ffbd8426e763e4a7651572a88832",
"assets/lib/assets/s2.jpg": "229bc82035876a2b4ef3452859c87aa9",
"assets/lib/assets/st1.jpg": "49e3ceaf3e84656d72bad7fd0d253ac9",
"assets/lib/assets/st11.jpg": "45dc65103ca143c9d999d55eaae5186a",
"assets/lib/assets/tt.jpg": "56e61c64e8da2c20288f57c963e0e7e5",
"assets/lib/assets/we.jpg": "ef31c36c81c4f679c2247cef1600587d",
"assets/NOTICES": "a44d5668ca1e6d4411642f11dc78916f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0e062d1f1e56c74a77e7ced2a6449c2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7ccaa80254e12ef2680e02b71c32a7f1",
"icons/android-chrome-512x512.png": "3ce8eef442269890c78de1a392531e1b",
"icons/apple-touch-icon.png": "28168ba793b2b16a7f80a270b3a605ca",
"icons/logo.png": "0db526bfd61a59460560af9d94c37aa0",
"index.html": "b9297910758c261359efe5284679fdaa",
"/": "b9297910758c261359efe5284679fdaa",
"logo.png": "0db526bfd61a59460560af9d94c37aa0",
"main.dart.js": "d563a62c751ac1c08c1d862970d36507",
"manifest.json": "2e9a972789ee1a96f4f00e09da0d433b",
"version.json": "86c6ac269f2e5ee264b577e63f8cc0fc"};
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
