if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const d=e=>s(e,c),o={module:{uri:c},exports:r,require:d};i[c]=Promise.all(a.map((e=>o[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-ac9d2342.css",revision:null},{url:"assets/index-f082dac8.js",revision:null},{url:"index.html",revision:"67d9a8d6e7caa105abca2825c9754e44"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"audio-speaker-off.png",revision:"5d71ebc6e0774ea908d634e3b354aed9"},{url:"audio-speaker-on.png",revision:"3e88a47c7fe8e2f239dc93463cd6a61d"},{url:"bg.mp3",revision:"1939fe9c9d71e53d960f581d068bd9ed"},{url:"pwa-logo.png",revision:"1591ff58d594be7e706be72b15d9fbe6"},{url:"img/icons/android-chrome-192x192.png",revision:"5ff99f599507abe5b381606db81be9ba"},{url:"img/icons/android-chrome-512x512.png",revision:"3c80c271e5ec1296e4eca9231b168ec1"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"5ff99f599507abe5b381606db81be9ba"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"3c80c271e5ec1296e4eca9231b168ec1"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"594ceabbe5154149397db13cb26a5631"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"f7d36c48c6c0d28f87c87eb177a557db"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"45b15b8d9cfd5ee169914d7d80ce7042"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"03c2e9f1fd8e28744b5ac3731404f719"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"cb6ff442367c0e152e1d5901820ef690"},{url:"img/icons/apple-touch-icon.png",revision:"45b15b8d9cfd5ee169914d7d80ce7042"},{url:"img/icons/favicon-16x16.png",revision:"49610a9d0e3026ebfaec1aa32f22b67f"},{url:"img/icons/favicon-32x32.png",revision:"2630333ce5e5cfffa37a086a9944f328"},{url:"img/icons/msapplication-icon-144x144.png",revision:"c03a2d352ba1fcf42d83115ada8fab29"},{url:"img/icons/mstile-150x150.png",revision:"6d515c92812c3f66ac86f07a7669db5b"},{url:"img/icons/safari-pinned-tab.svg",revision:"86b564b18ea6c7e170fa6cb87ca03bcf"},{url:"assets/img/12_14_finished.png",revision:"f0b06a49f71fa03c4ad1250f1f2fdf52"},{url:"assets/img/ball_light.png",revision:"aefa03217047122935e87d5466dbc32b"},{url:"assets/img/black_bg.png",revision:"ba66d50c0739e0806fa31a78a294826e"},{url:"assets/img/charm.png",revision:"259bf5ed744fa3adc292b4c1622b4720"},{url:"assets/img/charm_bg.png",revision:"8cbacc76583d1c30f68951fdd04853a2"},{url:"assets/img/charm_shadow.png",revision:"4e08170423fe7ab1e5d16abea02845c9"},{url:"assets/img/dragon_right_big.png",revision:"900469499294b1f9920352dda52cf2ae"},{url:"assets/img/dragon_right_small.png",revision:"1cf4c06a3307b38f599a046ad33dce07"},{url:"assets/img/final_bg.png",revision:"e34416eeb143a4d0387a603ab31a9778"},{url:"assets/img/final_bg_belt.png",revision:"9de76010f37ee5e7292ff1709a102026"},{url:"assets/img/final_bg_red_belt.png",revision:"280a545cb64a384decf1f57acddaa919"},{url:"assets/img/game_ball.png",revision:"e572e14f5de7450312af14774d4b681a"},{url:"assets/img/game_ball_cloud.png",revision:"dbd9ce1817c831f680a90dfbac5d2c66"},{url:"assets/img/game_ball_infinite.png",revision:"7b566ad47351caac7eb2cc092143722e"},{url:"assets/img/game_ball_shadow.png",revision:"c5bf8a2c7f9408b37e0eb26eeb09f324"},{url:"assets/img/game_ball_star.png",revision:"eadead59be570623ce3a51fd6e475c46"},{url:"assets/img/game_ball_wind.png",revision:"b70148ec2d68159e4b4188c69e438c53"},{url:"assets/img/game_bg.png",revision:"e5e22bf7d878f5b19a30225e3819f9fc"},{url:"assets/img/game_cloud.png",revision:"d78175442e27b1ff835bbc2d24da1723"},{url:"assets/img/game_count_down_1.png",revision:"9eb6eb18676de36aab5d4ef61546b932"},{url:"assets/img/game_count_down_2.png",revision:"b2c5f5fbe87d873409239bb3968c785e"},{url:"assets/img/game_count_down_3.png",revision:"707421dd93ca3fe44dfaa1df75943799"},{url:"assets/img/game_frame.png",revision:"11c7612c3cf517b10e9de22194e45b0d"},{url:"assets/img/game_header.png",revision:"80c85d9339935fe6599a2ba5ae683b14"},{url:"assets/img/game_intro_bg.png",revision:"1cc102c7f1f418e3e3d1d65a71c6ade2"},{url:"assets/img/game_intro_subtitle.png",revision:"f40ffe9709838cdd39f7dd88dbf7d592"},{url:"assets/img/game_intro_title.png",revision:"af01935a264b45cab205fb6e17f3b755"},{url:"assets/img/ground.png",revision:"0817090b7be4402f83effda2c0c3d82f"},{url:"assets/img/index_title.png",revision:"6e66b23b63073a80d5bfdc6e5ead2598"},{url:"assets/img/intro_2_main.png",revision:"7bd11e5ee8545b126584d516b9d5e5fe"},{url:"assets/img/intro_2_title.png",revision:"31fcc9f7ff893d4da61b4046b7e2fd8d"},{url:"assets/img/left_down_cloud.png",revision:"3e3fdc7caefbbe8b3e5f44b4ac92cf54"},{url:"assets/img/logo.png",revision:"807e7d178d887c3f421a12d21e5caac0"},{url:"assets/img/logo_left_top.png",revision:"0244ed2064d589a50297dc5e6f7ebd1c"},{url:"assets/img/main_product_full.png",revision:"fd05d1236200c1e62b890989f436d576"},{url:"assets/img/previous.png",revision:"7432ae6da36d2a9f92192cc30e0a72a6"},{url:"assets/img/right_belt_slogan.png",revision:"37eff0499061372e7fa2334cba7cfcf8"},{url:"assets/img/right_down_belt_without_slogan.png",revision:"c96bc043e64b566c0dafb7cfe9e2af59"},{url:"assets/img/right_top_play_button.png",revision:"abea758d97630f3e08e262ef33691cf8"},{url:"assets/img/right_top_reload_button.png",revision:"1eddb42eb58382755c2321d3d3da4464"},{url:"assets/img/side_dragon.png",revision:"0ffd0bed8ac2eb357786efe85ac937aa"},{url:"assets/img/wave_ground.png",revision:"f45bccb84c7141fd3fec5e40d3843ec9"},{url:"assets/img/woman.png",revision:"876fc9c78f46d5ff1aba1b5b1da3696e"},{url:"assets/img/yellow_bg.png",revision:"9aee5a12e6b5cdd2dacf847ac39b736f"},{url:"manifest.webmanifest",revision:"a44d6e44fe1492ab92195f4ccfee018f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
