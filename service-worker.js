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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "88c2d2da70fde942897d01b84acad267"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.fef0ee14.js",
    "revision": "27ff1c0942065413d61eea98a0d04ae0"
  },
  {
    "url": "assets/js/10.536d4cff.js",
    "revision": "a67b5b890cae646e172dc8e5140f67dd"
  },
  {
    "url": "assets/js/11.e3e77ef4.js",
    "revision": "d05318d9a3c3a34c4406d9f7108c1e74"
  },
  {
    "url": "assets/js/12.15e4eca8.js",
    "revision": "ab02750a518f760c1197425a72fb667d"
  },
  {
    "url": "assets/js/13.788a1208.js",
    "revision": "acdcfff7a63349420d91f87c801a48fc"
  },
  {
    "url": "assets/js/14.8de5ed19.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.8e5c271b.js",
    "revision": "fa25c40cda304e2bc0441071cdba79af"
  },
  {
    "url": "assets/js/16.8c417bdc.js",
    "revision": "77d86646973db802dec199f749183516"
  },
  {
    "url": "assets/js/17.406b32cc.js",
    "revision": "9a492b28e0041cdccf049afb5459c500"
  },
  {
    "url": "assets/js/18.1ea1d894.js",
    "revision": "0ce5adb05e88c5cc6415e2b04c81844f"
  },
  {
    "url": "assets/js/4.1ace6332.js",
    "revision": "ef6ed30fe655c1f2e83d42c6dcfbb735"
  },
  {
    "url": "assets/js/5.a3f14b16.js",
    "revision": "74edda22319e7e930102cff48d8a0a0f"
  },
  {
    "url": "assets/js/6.7c911a6f.js",
    "revision": "84577c89ced861633ba67cbdd2cda3d6"
  },
  {
    "url": "assets/js/7.63b4df15.js",
    "revision": "0c4cab82dd1bdf72eae35a07fdc99b91"
  },
  {
    "url": "assets/js/8.85ae13b9.js",
    "revision": "0fdbe356535365944e0ae86af746a958"
  },
  {
    "url": "assets/js/9.75ef85fd.js",
    "revision": "8753dff7e23be266fe0527623142a3cd"
  },
  {
    "url": "assets/js/app.3e196a5e.js",
    "revision": "be5003619e4388f1c513a98523faeffd"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c5897f7a.js",
    "revision": "87a31bc352aa9f4ce4290b2dc3b78390"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "11098cd13158bd57cad8b8a62d51855b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "175239629b7c5cd45a731b38e521ebd4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "a53303519a07b58e2665fec19d554566"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "61be7c9f41ed68e733f82f945ac79c32"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "727ba14f46c58a14e8961d079a3222cd"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ec6f69b234497422f1bb343875a0059b"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "a441443b9db4e4375ffae667f823f2d4"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "03bb252ba1f978b6fce4346083e2d5d3"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c5c891f238738d183f694b1c65af2530"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5ac829bc776ae4895a7e10c493e6e3da"
  },
  {
    "url": "tags/js/index.html",
    "revision": "af48a0ac72ec5bc593494e4e03960d30"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "78a2968ae6650af1803ab3422d202e86"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "f620b615f435d0852245c7138827e2a6"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f9f80f1a5add86d8d117c32f1a630e06"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5dfe04d76b41f229a4dc7d2a0f9642b0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e76c734f27cf988b4b7b60300763050e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5cab79d0e0de3c95f0481b6b3c3e29e3"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "99d83be9acd5c080f35d6205ee978b27"
  },
  {
    "url": "timeline/index.html",
    "revision": "c77030ad8bd76a6b47e332a184b38061"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ef6b2c35caf544dd82f5ce674ad881c3"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8cb264458a24c9d8e60c11257707106f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "090445a4e9d514adecfe6210e9528091"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "35cc25888f0067d8f1e0f418827feaf5"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fdf10afd44b9f2dc1b867101a024f0fc"
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
