/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a252b5c408126e817e5fd180678c7dfe"
  },
  {
    "url": "about/index.html",
    "revision": "5730d12dadf12483442b4bbb65f5be16"
  },
  {
    "url": "assets/css/0.styles.2679390f.css",
    "revision": "c7414551260820eba4796756751dad59"
  },
  {
    "url": "assets/js/10.b7b1e326.js",
    "revision": "9b04fce2db175e83e27a829207f5d3d8"
  },
  {
    "url": "assets/js/11.01d6c454.js",
    "revision": "c2255798135a46ef12a087ceb31fcb38"
  },
  {
    "url": "assets/js/12.779a31e7.js",
    "revision": "6edad5ff1b42705b0a2d908c36b9b4ec"
  },
  {
    "url": "assets/js/13.bdc4cdef.js",
    "revision": "08241cb1f7f9ca39abbfeba86d0fa708"
  },
  {
    "url": "assets/js/14.470b7510.js",
    "revision": "0111ee4c0b52ce327902dd1b5e40632e"
  },
  {
    "url": "assets/js/15.94a58303.js",
    "revision": "1a1c92b6c47ce625e8dbb6b40be8e138"
  },
  {
    "url": "assets/js/16.bf1d2be9.js",
    "revision": "ea02d34f8453d4a7e79ec849eaf1fb1c"
  },
  {
    "url": "assets/js/17.28084c92.js",
    "revision": "78dff907be89921dafb130a6e58b7b8f"
  },
  {
    "url": "assets/js/3.b340882d.js",
    "revision": "a453a06cb03bf00ecb1649487c88b0b8"
  },
  {
    "url": "assets/js/4.a36eeecc.js",
    "revision": "baae05d26ae40451e93032310fde19c1"
  },
  {
    "url": "assets/js/5.cbde4022.js",
    "revision": "3de8c7c70ed24b7fd7311f6f53afda0e"
  },
  {
    "url": "assets/js/6.ce72d9bf.js",
    "revision": "f95df37814ed8f2c6c0db1bcf46182b5"
  },
  {
    "url": "assets/js/7.e6772246.js",
    "revision": "c993dc3367ce39eaff54f3bb51463ba8"
  },
  {
    "url": "assets/js/8.9f1d9445.js",
    "revision": "0a184a4e7c46687c88989e77231ca7ba"
  },
  {
    "url": "assets/js/9.fb715377.js",
    "revision": "b5ce2f762601b24e4b66523864095242"
  },
  {
    "url": "assets/js/app.8b470739.js",
    "revision": "cfadae3f24ce201a6dc01ca66f5b9944"
  },
  {
    "url": "assets/js/vendors~docsearch.dc0eb778.js",
    "revision": "ff9bbf01ceace32d2eb8751dafca8cb0"
  },
  {
    "url": "codelabs/index.html",
    "revision": "d1332f5757ebca06ee80c9e24d45ac61"
  },
  {
    "url": "conferences/index.html",
    "revision": "9e137f375aa61dc5247f85cf57406aca"
  },
  {
    "url": "favicon.png",
    "revision": "9ccca653b718eb9d2d88448bcd3eb0b4"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "dd137d33c212d93677348c1a6ee6a0fd"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "de655caec436def30c72418061566797"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "d9ce6c28b5f1dba203cfa11fa1b551b7"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "c935f2c88c5e2a58610f3d55a72f3a07"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "639a0485207999269f5f752809f6d8bc"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "41c4ef73b30d59d5f509283b57c89d55"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "9997554947513489a660fb7d940bacaa"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "1b060f9e3746a58d908d57fb56ad695a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "dd137d33c212d93677348c1a6ee6a0fd"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "d2e38aab48c73e426591345e1dfcbe5c"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "752b0a9259570816c6314e78ad52cccf"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "b981b61a9823db1b4f59e279954e8219"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "1f5ccaea2214371dfe1cff3244272534"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "639a0485207999269f5f752809f6d8bc"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "073153138b35020786814a79d215def5"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "f7c614a6eb1f0dff02b35ec973aecf12"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "f7c614a6eb1f0dff02b35ec973aecf12"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "ea16295623dd1619b8c742152408484f"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "9ccca653b718eb9d2d88448bcd3eb0b4"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "41c4ef73b30d59d5f509283b57c89d55"
  },
  {
    "url": "favicon/icon-128x128.png",
    "revision": "e10d1db7526e1463eb0a4f979a82fe9d"
  },
  {
    "url": "favicon/icon-144x144.png",
    "revision": "9a8e2f9ab604cc9363ad42610b6daf6e"
  },
  {
    "url": "favicon/icon-152x152.png",
    "revision": "8450ed692f79868f3cdae8b878c1c612"
  },
  {
    "url": "favicon/icon-192x192.png",
    "revision": "1ec00d7ae0ae8440338c18681e57f588"
  },
  {
    "url": "favicon/icon-384x384.png",
    "revision": "857c175fe69dd0ae7702a55eb269f45e"
  },
  {
    "url": "favicon/icon-512x512.png",
    "revision": "9e7bb5279befb49cdf138382bd13f5b9"
  },
  {
    "url": "favicon/icon-72x72.png",
    "revision": "23e699e1e038e52733d74fdce385e21e"
  },
  {
    "url": "favicon/icon-96x96.png",
    "revision": "5055c40041c6a09038151510748d3825"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "dd137d33c212d93677348c1a6ee6a0fd"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "70145a8330689989adc53b04670ae241"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "986b72738111050b643869decd4dc544"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "3e95ce62fa683af8224b40e232ec977c"
  },
  {
    "url": "fr/about/index.html",
    "revision": "b1a9d49a5f8b813d9fe8371ffd9fe44b"
  },
  {
    "url": "fr/codelabs/index.html",
    "revision": "be397511ec6f0257dd99172e3bad4c9e"
  },
  {
    "url": "fr/conferences/index.html",
    "revision": "ba69084539c9892bdf4a5475f8d2bb59"
  },
  {
    "url": "fr/index.html",
    "revision": "83633c63a0e2224997e9e408b24ae33d"
  },
  {
    "url": "fr/introduction/index.html",
    "revision": "6bcfbab9ce9e81cb3a4643e7135f626e"
  },
  {
    "url": "index.html",
    "revision": "76229b934c46846b5cee1be7c216aa26"
  },
  {
    "url": "introduction/index.html",
    "revision": "fd95e21fc6291ed1b1f5fbaad0778c1b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})