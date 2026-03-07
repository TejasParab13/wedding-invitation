'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fddba4b7217a75fa20252975982aea56",
".git/config": "40075baaa0eb019ab2c2f13987ccab7b",
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
".git/index": "e785bb51184bfa570b0491feaca06cb1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c4dc65551b40e3fb1dbe7e3568284c3",
".git/logs/refs/heads/main": "64b4d2f6f16c035f5acb362d46d493e2",
".git/logs/refs/remotes/origin/main": "2542b052bf40ea42594777cee876ff54",
".git/objects/00/0e9e288d305db7d82e71859b5bfc5515bf67b6": "af985e9cfabab42358533a68479eb16f",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/f59155127654cbfbae41eb6edfb1db20c0ab92": "8e5aadad534174d2b992187701d48be8",
".git/objects/0b/b3130d35270523ccda077141f71fb01e6f9c21": "ce04d07c1ff423e50105e16a3af38fa5",
".git/objects/0c/626f3dbf6438c2a723ffc4556aab1a39743d55": "be1c49e298d6a51bdb844cb81c73d7c5",
".git/objects/0e/c7f103210e5b5e11f4bf2e943a36b81a974093": "2cfb402a2ae0eb7daab4d795a89e9492",
".git/objects/0f/71517db3b208004d94b9106dd2c1408bf365c9": "00512c28b4fc952f633714f5f0fbb733",
".git/objects/14/0473c7746831b6968c1a711463462749ada6ca": "a9bd5cc843477964ace822845abdfa81",
".git/objects/16/6118366f864849d0e1b2c1bf1a68190356bb3c": "9ab9c937e2eb3038d31163a12be5a802",
".git/objects/18/b432f74de9213adad36ce9577ce718619da189": "ced308bc5421a1545b1c551c7dec7d5b",
".git/objects/19/00282da2e46ec81aafd46bbb19f08d59ed71ef": "33905e939d86f7a91a65aef84dcf53dd",
".git/objects/1a/22a4fcff9bc4a26e5dd7cdc33f3157a7e1aaac": "ccf4c4d117e639d054b038466cfbd607",
".git/objects/1a/5dc6f9c0e05ee70e72804ff3e93d6bbe6e7f83": "5941564b13f1c160a3a1e46b2db8e3c0",
".git/objects/20/bdf1ff1c24583310ec84c1e15d7d6d64c7503c": "b1c50740ebaf60e8e3dfe70f60cfc70a",
".git/objects/23/0d260d2d73e8c53c5214cae2bb4acace201877": "f6102fedfa3a7ae530067a8b07efdd1e",
".git/objects/23/1ef330e75c45604185228b8b8e4c0647c77c71": "f62226aab5cc8a1962fc1052ff6f1c68",
".git/objects/25/7284374c168e7736262f8596b5a644938c1969": "facd31eb7b8452b324b7a053108dbebb",
".git/objects/2b/357812c3babea689e965b8c86c8a277c854cd2": "4587ad40484b4564217458629667788c",
".git/objects/2b/3de1a543fb8b7a7b0dd87c55a5501f9cf2d095": "df79847dd7638678011d0a1db2ad068e",
".git/objects/2b/62a297eba81b85741aabf666164d4ee0dcdea6": "f92edf03ac8df8f9375078c6fb1cc89f",
".git/objects/2c/b7f14f7003cd67102ed6132b766d730d9337c6": "429dc59673854233fe187a48aa35b01e",
".git/objects/2f/352ad66e62dc48291ca9e0f59e0adb5c02b59e": "b04f9030c9456b100c08f9bdf2c9e684",
".git/objects/36/bbddc71fc088636aaed72249463fe4dd146886": "348c46e32f19d5548fddc40880286087",
".git/objects/37/753bff33cd9d97678a41a8284d055259f42159": "5b19b3e3663276195793d7502dbe759e",
".git/objects/37/abc0c275c6abf7bb39874a97f368715419d792": "454c3f716b326119dfb1e49965980827",
".git/objects/39/899aa9fe14d3dfce238a42e401fff672841823": "936038be87abc9efa96a05d1a37e1f90",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/c72aa717988ed1f6b8b84866ed6682ffa0ce67": "a455bf742a655a1103712999f1093b40",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/1099619fb59021fc59128ffafa525697db90da": "ead3dc6d7b6cef70e6c9233cc85d58fb",
".git/objects/55/0fc9937db3d12b5da65e2e2e616728b305f017": "93fd57f3603c3f8af7c4eecd5c3212df",
".git/objects/56/623f7420fb0d8ab99196726a497e1003bacf42": "c1d1063e0703c567959adf39b3de21cd",
".git/objects/57/65d9e7a54f9bcb95740b3077ab06a9c0a1f065": "8410a0f5f4e4cfe43aa7aa00c55b5841",
".git/objects/58/db173f4e98d28dd470cd0ef696868f9ab9fe5c": "a12c31cb976a9b70b423d7d8c4dca005",
".git/objects/58/f28127be95c0dc82b89af846d19c5cb163f1d2": "58edc23e82f74cf7a476a56963ef69fe",
".git/objects/5b/c3b33ad353c958cc836c97fd3acef29f98e804": "d538f58e98ec349d31476e05b93ea964",
".git/objects/5f/e2149f13b29a70e8c40c68ca37e7886d4df13c": "2b1286c2ecb071320ea3b928fb455389",
".git/objects/60/646abd0790f883f5b97e0651b9fc68df6b56d1": "08274189375d4da3aa68e3f11326cdd5",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/271c6c221796e5dd5c0ac2d66449baae6d56bc": "0e7948fbc22a50ceb158e10ce630ea9c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/b20be0a86c75edec2fc96199e0bd35fe72ece1": "8b0fa55b5956f451a84de18cdfcee71f",
".git/objects/6e/5657b9c67f0e9e1d3d97e9b87f063696d012b0": "44f96316138a5103bae8639ff0908c6e",
".git/objects/6e/d8de0951847b7a4a07958cf84a04815943b319": "9a79ffc1cedb1e3ac8352dfa1069c396",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/78/8c1e2d2a0682168231accc6c0b324ccd7dd7b5": "b6690817063bd441d21e9bd4d2a7dc57",
".git/objects/7a/8813838986934eab6b4430365a30c95a595870": "667a1b8c7310cf39874cdbc5a238364a",
".git/objects/7a/d644afdf748293ba7c8b9df4f73b8702a28fa4": "4fad358ea107dd341021d9263f26a34b",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/855e22dc3b8e8fb890820034672b146d7cf983": "3a7daaf439901a198c5443a7134387d9",
".git/objects/7e/79f91d060fdae5a6570c196f1310c734b28404": "01838043a84b258436a27ebf40411eed",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5ad65901aafd446cfb6aecbd5a35b4633b6ae7": "ab00c50168da1d8c95e990562194a7c3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/09e79543795ca866105a83d345b98e0dfbf8c5": "6844019333cabc1addbd0c3c6c8b0b71",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/ef861445fd060c4e20761dbc7e0303d885274f": "983e1ca3fc1888c871a988c6b59794dc",
".git/objects/91/0613a705129b8cb046614cf8a10fe224031699": "fbe9e340997daaacc788374490e614c6",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/551a0df94e187c4720b864986eeffc826c15d7": "234e056aea3a03a834bde8e4fe0e012e",
".git/objects/96/05a2c14c586615fa06088f9d084d78f7c39664": "6db4fc005dd14afa413f1ae802317e69",
".git/objects/9b/cbcd3ea14dea3ac72754df43c629fbe60aba66": "d4e645d78053ace96544c6360c542836",
".git/objects/9c/8e1778830b93a4c60309eaa583cb67e070ade4": "026d9c1228902ac8c794ef037bab7260",
".git/objects/a4/e9d4f99aa6726dd76553b9cf7b6e292f50b3b9": "a5bd6f97b261075622e9dd512a4d2821",
".git/objects/a5/3efb5d714c020ad107abd46d4ebfd68fe8ebb6": "009daf722810f9f65af54f7417bac959",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/4ec6358da98c8a19b27702dffd9264cbc577d4": "22efdf2ff1a4e565985718b4ee8b2b2a",
".git/objects/a8/74e383c5c4d9634fb8d91a89c4b793212c222e": "8f71aefdf92d23b88bcb0f1f2369b085",
".git/objects/a9/5beef228cf7a318d51bbebd1ec8e392650625b": "33c5a9fc38665dfe01d4e239146178f1",
".git/objects/ac/a8feb68e67524815fefa50831fbd0aecb182e6": "1880c7c1b870892d8a6107af69e04433",
".git/objects/ac/eacf64d8d977f448d4fe3ffef495eaeb9e1c0c": "7e314319ad70da175316e09ac284d621",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/e90efe19d2ec34c868d6732992edd9d7fd88c4": "f4d6fe002c27bfbd139b68b0180b5841",
".git/objects/ae/0935518f6605d583b984127a84f86cd477cbc5": "8aaa22219948c0ebf101647a7c739f57",
".git/objects/af/ee5a90d16e4bb14cffa375e752cebd84f6bccf": "29673e081eedc41081e5d30ad15005d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/41dab71ddcdfe2b18159a59a3087afc209818e": "385d2392126d01de192348bfbcc34c66",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/4d3b6a03b76baa7d69148cb40d16b0da826353": "36e04ecd21cdb4e791d56d84fdfece26",
".git/objects/c7/f0cee087c8dd9ac810c6a24890049f427f9846": "3a734d1765f49b2031e29ba21bc2d19d",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/852768e915b1c4851d559c404e3a41bdb98d5e": "5bd6cf8a569100588cdc7d1666ef0e59",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9da5c16b846fde446af3db395663d5b84073fe": "2812efdc2ac63c830e849b31a7c47a69",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/84707417713f7a5cef5e6be376fe757c37e7b4": "3dd95d23773da23522827c9d731b326f",
".git/objects/dc/2a0941451c9d5e3471720d72a17b159fd2ba86": "ab3f0a0ab189923cea82458e02110d8b",
".git/objects/e2/017a0f46458b1b1f97cf5a3eba94563e14f423": "6c691e593c54dbeeb47c1f0a4d1140da",
".git/objects/e3/30d8c573e3bd5f68dbcedd2d978d16cb4447f9": "bda96dab7ab35f94fad0d9f3c8ff5bcd",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/eb5a4126c6625fa53221f71a5b9ffae92e5556": "a299709043a928bfdd70b1cde3ea645b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/e2cde0c7174b816cb1decba764fc729ab07df4": "4f2aff2d6db151d2b34d1bf5809998a3",
".git/objects/f4/583c83a1097095bcf987b449cbc56b54fa7851": "3740541ea6f6bfa4b7ca18c7ef17569f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/f6783e214467dfdff70cce95ba3809c861f13e": "d671bc00dee8af3f2fa895ec85618916",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fa/6e5c6eb3c4ea85ca48a25de651d1f6daf4da31": "086cfb8650e5b95c5964c30f926e8117",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "91f03775c6c3339a2c27b1c60f677749",
".git/refs/remotes/origin/main": "91f03775c6c3339a2c27b1c60f677749",
"assets/AssetManifest.bin": "b76730514bb515bb004b45e39e4d1dac",
"assets/AssetManifest.bin.json": "8aabe0e7d98d1fbeb67b57386035bcb1",
"assets/assets/images/Arch1.png": "935a21acc7659bc0fb8fc51e86459bf7",
"assets/assets/images/BG1.png": "55a53050ef7db19465902a76e939906d",
"assets/assets/images/flor1.png": "b9790dbfe012b1eb8d9c7dbe8e10094f",
"assets/assets/images/G1.png": "039089d5d0de90cec57ab36b9eef01f0",
"assets/assets/images/petal.png": "fc0231bab1e80b277c40fc288de6d968",
"assets/assets/images/Pillerr3.png": "d786ba19c2f66e9348557c743e38ef28",
"assets/assets/images/Pillerr4.png": "aff0260169ee79a25e1626b8b7d04e43",
"assets/assets/images/Rall1.png": "df5c10dd1e61840da2a16aced6389a5f",
"assets/assets/images/text.png": "858d45af7ef504a99343e1b6131799d7",
"assets/assets/images/them.png": "ed2244895d241da0a28496f077610b21",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ae945d7cd305ec4632c0a4e7147e5d2d",
"assets/NOTICES": "32a12292acbdaf4ed426aea28c8cb8ba",
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
"flutter_bootstrap.js": "a763b201ba07ddcbd43c73ef1c70999b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35bf1f6e9c325235f664117e819621f1",
"/": "35bf1f6e9c325235f664117e819621f1",
"main.dart.js": "5505839126382edbdaaf0185d5085f2a",
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
