if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const d=e=>s(e,c),o={module:{uri:c},exports:r,require:d};i[c]=Promise.all(a.map((e=>o[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-217de702.js",revision:null},{url:"assets/index-ad8b793a.css",revision:null},{url:"index.html",revision:"5258fa6c4b6200b4422c248db7d34760"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"audio-speaker-off.png",revision:"e46a88ab8493f86764cbe64dd250adf5"},{url:"audio-speaker-on.png",revision:"0f68480c86cd9569a7bd660ea0b1abb1"},{url:"bg.mp3",revision:"1939fe9c9d71e53d960f581d068bd9ed"},{url:"pwa-logo.png",revision:"ecc5baf4ff30ede170fc950900658b74"},{url:"assets/img/12_14_finished.png",revision:"4fa3be04f2ef9fd346e10b693486beb4"},{url:"assets/img/ball_light.png",revision:"318ced0bcbdcb54ae0b6b6e7d6fbd11c"},{url:"assets/img/black_bg.png",revision:"2c019e9e6bccf9f989349f8b4902df4d"},{url:"assets/img/charm.png",revision:"291697df1759d9147905542a96682f9f"},{url:"assets/img/charm_bg.png",revision:"8cbacc76583d1c30f68951fdd04853a2"},{url:"assets/img/charm_shadow.png",revision:"86b80104720873d004d1647e19a723f3"},{url:"assets/img/dragon_right_big.png",revision:"b00c0880edc5c3e8a096498300872744"},{url:"assets/img/dragon_right_small.png",revision:"377f2d2133d2222ca1dd89c3cfa2467d"},{url:"assets/img/final_bg.png",revision:"ab5476baea71c368e4ec9de249ab1716"},{url:"assets/img/final_bg_belt.png",revision:"86719737aaca2f1a20e1e9bef68a3c33"},{url:"assets/img/final_bg_red_belt.png",revision:"b7f31afada1dadb7ab8eec7460bea00c"},{url:"assets/img/game_ball.png",revision:"deae6db0f7233ab3299a7c1adbca2372"},{url:"assets/img/game_ball_cloud.png",revision:"5c66e37a987089a9a03389eccf4bf39a"},{url:"assets/img/game_ball_infinite.png",revision:"614fcf8c71d3c3f0af983a627f8ac3fb"},{url:"assets/img/game_ball_shadow.png",revision:"b17948b75895a592e0e9c6365beca9c1"},{url:"assets/img/game_ball_star.png",revision:"adc6fa1f181f27739f247749d7174809"},{url:"assets/img/game_ball_wind.png",revision:"cc1724b3a3a0015b55884a11a5a0156b"},{url:"assets/img/game_bg.png",revision:"dc602bb743f7b5b9f8959735df845749"},{url:"assets/img/game_count_down_1.png",revision:"31098b173c8566c6f7ace91eb4a9d05f"},{url:"assets/img/game_count_down_2.png",revision:"4fd6d3c6a62e7bfd9ae5c13058d5c640"},{url:"assets/img/game_count_down_3.png",revision:"f5cea6cd0ee93bd623e5185a77307eda"},{url:"assets/img/game_frame.png",revision:"dad05a41c3fcc42b4b9e1b7bc3909c04"},{url:"assets/img/game_header.png",revision:"76d65fadb6c3f93e7b6e2eaf1d12d68f"},{url:"assets/img/game_intro_bg.png",revision:"1cc102c7f1f418e3e3d1d65a71c6ade2"},{url:"assets/img/ground.png",revision:"beb0f896eaa8070143dcbf9684b046b0"},{url:"assets/img/index_title.png",revision:"bca7a3aeeaa002b2d9682c055e11e38c"},{url:"assets/img/intro_2_main.png",revision:"2916ed2cbe0614b261e6b2621affdf7f"},{url:"assets/img/intro_2_title.png",revision:"e5a29516eb7efd52bb9f2b3145807ed2"},{url:"assets/img/left_down_cloud.png",revision:"693b50022bf2beb8ea777a82b31b6114"},{url:"assets/img/logo.png",revision:"5ea8c0e167ad97e21d6dd32295f53a2a"},{url:"assets/img/logo_left_top.png",revision:"e1187098103a02edc57d259fb8c07bc9"},{url:"assets/img/main_product_full.png",revision:"07df5fb70d0a49e47ba2f67046c6562f"},{url:"assets/img/previous.png",revision:"59b3f8b0fc90b25f11c6eb26352e2d01"},{url:"assets/img/right_belt_slogan.png",revision:"c9aee68f23cc2031df39baa7293498fe"},{url:"assets/img/right_down_belt_without_slogan.png",revision:"671d6e8273c87bb5aaa11d5bde98492c"},{url:"assets/img/right_top_play_button.png",revision:"493edcbe3e0985411714da0499332b59"},{url:"assets/img/right_top_reload_button.png",revision:"9469f2e354bd4ed35dbce31801d3f9c2"},{url:"assets/img/side_dragon.png",revision:"61c84c9489e15111226ee629c50245c9"},{url:"assets/img/wave_ground.png",revision:"2e6c8f7ec31b53c681ae5e4fb721f08f"},{url:"assets/img/woman.png",revision:"251929e1491c3b4e45d4fa2d2de9072b"},{url:"assets/img/yellow_bg.png",revision:"9aee5a12e6b5cdd2dacf847ac39b736f"},{url:"img/icons/android-chrome-192x192.png",revision:"3ef4a95391ff2bfd5f442ea89292b3fa"},{url:"img/icons/android-chrome-512x512.png",revision:"4fd10861636b509a53d091e1c6cd8f64"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"3ef4a95391ff2bfd5f442ea89292b3fa"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"4fd10861636b509a53d091e1c6cd8f64"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"c24de0bfa43e42fd8568d1b38262c4c3"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"de8e6c5c1e047c79711200a9529be00e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"f66b5015d880335cb607d474025316e8"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"91035985e360cd3b9e443066bccdc53a"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"c14d8293625bbec500e0e9dec5848336"},{url:"img/icons/apple-touch-icon.png",revision:"f66b5015d880335cb607d474025316e8"},{url:"img/icons/favicon-16x16.png",revision:"49610a9d0e3026ebfaec1aa32f22b67f"},{url:"img/icons/favicon-32x32.png",revision:"e3c7c3355821030a05ac1e54e105e973"},{url:"img/icons/msapplication-icon-144x144.png",revision:"4db12ddb2969ae559fe8cc63810e7747"},{url:"img/icons/mstile-150x150.png",revision:"8bf70c634505b233c8b293cf3a749278"},{url:"img/icons/safari-pinned-tab.svg",revision:"86b564b18ea6c7e170fa6cb87ca03bcf"},{url:"manifest.webmanifest",revision:"a44d6e44fe1492ab92195f4ccfee018f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
