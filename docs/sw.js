if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const d=e=>a(e,r),o={module:{uri:r},exports:c,require:d};i[r]=Promise.all(s.map((e=>o[e]||d(e)))).then((e=>(n(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-b5266563.css",revision:null},{url:"assets/index-c2d608b2.js",revision:null},{url:"index.html",revision:"cf85a6e248a8f47b95e5b20a1e31205d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"321.mp3",revision:"3bd591d610049c259f3768fd35f8ba0f"},{url:"audio-speaker-off.png",revision:"e46a88ab8493f86764cbe64dd250adf5"},{url:"audio-speaker-on.png",revision:"0f68480c86cd9569a7bd660ea0b1abb1"},{url:"bg.mp3",revision:"1939fe9c9d71e53d960f581d068bd9ed"},{url:"click.mp3",revision:"0549e1376c71663510db6425f2b10d4e"},{url:"pwa-logo.png",revision:"ecc5baf4ff30ede170fc950900658b74"},{url:"assets/img/12_14_finished.png",revision:"a870acbf48cc8d64d949abd03ab92052"},{url:"assets/img/ball_light.png",revision:"11ffa497bd4e6f5ba8789b584b464348"},{url:"assets/img/black_bg.png",revision:"2c019e9e6bccf9f989349f8b4902df4d"},{url:"assets/img/charm.png",revision:"7a59770e7caaa60af67a447a67f842f1"},{url:"assets/img/charm_bg.png",revision:"8cbacc76583d1c30f68951fdd04853a2"},{url:"assets/img/charm_shadow.png",revision:"86b80104720873d004d1647e19a723f3"},{url:"assets/img/dragon_right_big.png",revision:"ab83fd69d5b4f3120fda3eeabe7624b5"},{url:"assets/img/dragon_right_small.png",revision:"684a7760bf27b17b2f04fa6dcb6ebe5e"},{url:"assets/img/final_bg.png",revision:"407d758e0a49c25dd1c33995f34a4c5e"},{url:"assets/img/game_ball.png",revision:"deae6db0f7233ab3299a7c1adbca2372"},{url:"assets/img/game_ball_cloud.png",revision:"5c66e37a987089a9a03389eccf4bf39a"},{url:"assets/img/game_ball_infinite.png",revision:"eb7bb876bad1c0e7d6a8a3e12f31939e"},{url:"assets/img/game_ball_shadow.png",revision:"f14fabcca4dcf82a15e244795d04088c"},{url:"assets/img/game_ball_star.png",revision:"adc6fa1f181f27739f247749d7174809"},{url:"assets/img/game_ball_wind.png",revision:"cc1724b3a3a0015b55884a11a5a0156b"},{url:"assets/img/game_bg.png",revision:"266fa85d2f8a6e8577a09583253ad348"},{url:"assets/img/game_count_down_1.png",revision:"f859b94ffa931eb4905349206055dc31"},{url:"assets/img/game_count_down_2.png",revision:"4fd6d3c6a62e7bfd9ae5c13058d5c640"},{url:"assets/img/game_count_down_3.png",revision:"f5cea6cd0ee93bd623e5185a77307eda"},{url:"assets/img/game_frame.png",revision:"d4c0c7479a3e64ad69362b318e416d94"},{url:"assets/img/game_header.png",revision:"28bfb3ca5717aa08a1f29a76af22f076"},{url:"assets/img/game_intro_bg.png",revision:"1cc102c7f1f418e3e3d1d65a71c6ade2"},{url:"assets/img/ground.png",revision:"3d676879acc881ff0c9f6a341cfcd5a8"},{url:"assets/img/index_title.png",revision:"b46a6cd97f431cc5642c1f8f71c2bd1a"},{url:"assets/img/intro_2_main.png",revision:"2b25254eb89d6118aefe39fd1d9f570f"},{url:"assets/img/intro_2_title.png",revision:"e5a29516eb7efd52bb9f2b3145807ed2"},{url:"assets/img/left_down_cloud.png",revision:"ea9a97fd0861b55bfc00664f990103a4"},{url:"assets/img/logo.png",revision:"5ea8c0e167ad97e21d6dd32295f53a2a"},{url:"assets/img/logo_left_top.png",revision:"5105f4b42da1e5adb9f9ba970a388788"},{url:"assets/img/main_product_full.png",revision:"f9c457d9e6534de2df7f7a8f104045ba"},{url:"assets/img/right_belt_slogan.png",revision:"2e2d8f48c4ab5a5ae8df706fb001f499"},{url:"assets/img/right_down_belt_without_slogan.png",revision:"162d7093e3735f6eb114ea09f10d1169"},{url:"assets/img/right_top_play_button.png",revision:"1d8f6b2392822e67f1ed8721a7282989"},{url:"assets/img/side_dragon.png",revision:"0421d6817b5797d9d32c1ba28d18c05d"},{url:"assets/img/wave_ground.png",revision:"2e6c8f7ec31b53c681ae5e4fb721f08f"},{url:"assets/img/woman.png",revision:"7a0e3bb88a54e81e1091a5b846b8bf45"},{url:"assets/img/yellow_bg.png",revision:"9aee5a12e6b5cdd2dacf847ac39b736f"},{url:"img/icons/android-chrome-192x192.png",revision:"3ef4a95391ff2bfd5f442ea89292b3fa"},{url:"img/icons/android-chrome-512x512.png",revision:"4fd10861636b509a53d091e1c6cd8f64"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"3ef4a95391ff2bfd5f442ea89292b3fa"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"4fd10861636b509a53d091e1c6cd8f64"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"c24de0bfa43e42fd8568d1b38262c4c3"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"de8e6c5c1e047c79711200a9529be00e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"f66b5015d880335cb607d474025316e8"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"91035985e360cd3b9e443066bccdc53a"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"c14d8293625bbec500e0e9dec5848336"},{url:"img/icons/apple-touch-icon.png",revision:"f66b5015d880335cb607d474025316e8"},{url:"img/icons/favicon-16x16.png",revision:"49610a9d0e3026ebfaec1aa32f22b67f"},{url:"img/icons/favicon-32x32.png",revision:"e3c7c3355821030a05ac1e54e105e973"},{url:"img/icons/msapplication-icon-144x144.png",revision:"4db12ddb2969ae559fe8cc63810e7747"},{url:"img/icons/mstile-150x150.png",revision:"8bf70c634505b233c8b293cf3a749278"},{url:"img/icons/safari-pinned-tab.svg",revision:"86b564b18ea6c7e170fa6cb87ca03bcf"},{url:"manifest.webmanifest",revision:"57439dbce5a2c575d7bbf99676e164bf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
