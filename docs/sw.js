if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const o=e=>i(e,r),f={module:{uri:r},exports:c,require:o};s[r]=Promise.all(a.map((e=>f[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-0fd87189.js",revision:null},{url:"assets/index-4afee02c.css",revision:null},{url:"index.html",revision:"b1cb9726df31cc08e295fb45e8336e61"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-logo.png",revision:"ecc5baf4ff30ede170fc950900658b74"},{url:"assets/img/12_14_finished.png",revision:"a870acbf48cc8d64d949abd03ab92052"},{url:"assets/img/Group -1.png",revision:"b2de1a3e30b3bcd85653124f84428ff1"},{url:"assets/img/Group 116.png",revision:"86b80104720873d004d1647e19a723f3"},{url:"assets/img/Group 160.png",revision:"b2de1a3e30b3bcd85653124f84428ff1"},{url:"assets/img/Group 164.png",revision:"22a175d3cd50ef55ff6dff60cf1f33d4"},{url:"assets/img/Group 168.png",revision:"deae6db0f7233ab3299a7c1adbca2372"},{url:"assets/img/Group 172.png",revision:"f43838738f8c618d6ea66e25f237b9ba"},{url:"assets/img/Group 176.png",revision:"8617021961658d675826184fc8fab65b"},{url:"assets/img/Group 180.png",revision:"b1679c0bb9a37b2b6c0a82f353bbb847"},{url:"assets/img/Group 182.png",revision:"adc6fa1f181f27739f247749d7174809"},{url:"assets/img/Group 186.png",revision:"11ffa497bd4e6f5ba8789b584b464348"},{url:"assets/img/Group 190.png",revision:"f14fabcca4dcf82a15e244795d04088c"},{url:"assets/img/Group 191.png",revision:"648ed6272170c4d4cd7e192ed75e20a7"},{url:"assets/img/Group 192.png",revision:"7b162e2856415af51ec4c0c1cd22627f"},{url:"assets/img/Group 193.png",revision:"deae6db0f7233ab3299a7c1adbca2372"},{url:"assets/img/Group 197.png",revision:"eb7bb876bad1c0e7d6a8a3e12f31939e"},{url:"assets/img/Group 201.png",revision:"5c66e37a987089a9a03389eccf4bf39a"},{url:"assets/img/Group 205.png",revision:"cc1724b3a3a0015b55884a11a5a0156b"},{url:"assets/img/Group 219.png",revision:"3b85c03fe3cfa5d78b77f43797736227"},{url:"assets/img/Group 220.png",revision:"a463aa3059a6cf718e994b374cae9626"},{url:"assets/img/Group 221.png",revision:"ccb92604876d6ef4dfb88c8c063ee243"},{url:"assets/img/Group 234.png",revision:"dcc224d8984ccad79dbf61d003a29a2c"},{url:"assets/img/Group 30.png",revision:"cbb1eafbd84aeb1dcf2968c5d7af44fd"},{url:"assets/img/Group 76.png",revision:"24763c431e31f4017562fb8bd2e392ed"},{url:"assets/img/Group 86.png",revision:"e028bca18089ece2af4f88194efca1fd"},{url:"assets/img/Group 91.png",revision:"16eef83b8ed5efce3a7c079d9cd79ce3"},{url:"assets/img/Group 93.png",revision:"4b6bd79cdbe5c4462151c9a3ae905b5b"},{url:"assets/img/black_bg.png",revision:"e0e0cdb7c5b4fac3a5e6a946af04398b"},{url:"assets/img/dragon_right_big.png",revision:"ab83fd69d5b4f3120fda3eeabe7624b5"},{url:"assets/img/dragon_right_small.png",revision:"684a7760bf27b17b2f04fa6dcb6ebe5e"},{url:"assets/img/final_右-09.png",revision:"162d7093e3735f6eb114ea09f10d1169"},{url:"assets/img/final_右-1.png",revision:"162d7093e3735f6eb114ea09f10d1169"},{url:"assets/img/ground.png",revision:"866566399b928bba9bcf77a1770dd64b"},{url:"assets/img/index_title.png",revision:"b46a6cd97f431cc5642c1f8f71c2bd1a"},{url:"assets/img/intro_2_main.png",revision:"2386a64f02acc8980377d5d6a13d7dad"},{url:"assets/img/intro_2_title.png",revision:"e5a29516eb7efd52bb9f2b3145807ed2"},{url:"assets/img/last one-09.png",revision:"304fa7ea3ea2a130e712b6b93914302e"},{url:"assets/img/left_down_cloud.png",revision:"5ee0e1bc608f5a0efbd2701d85a6dea1"},{url:"assets/img/logo.png",revision:"5ea8c0e167ad97e21d6dd32295f53a2a"},{url:"assets/img/logo_left_top.png",revision:"5105f4b42da1e5adb9f9ba970a388788"},{url:"assets/img/main_product_full.png",revision:"af6b8e2eaaf90f4c5efb89afb33d3c33"},{url:"assets/img/right_belt_slogan.png",revision:"106febec9724defd6dcf4af7554670ab"},{url:"assets/img/right_top_play_button.png",revision:"1d8f6b2392822e67f1ed8721a7282989"},{url:"assets/img/wave_ground.png",revision:"2e6c8f7ec31b53c681ae5e4fb721f08f"},{url:"assets/img/woman.png",revision:"7a0e3bb88a54e81e1091a5b846b8bf45"},{url:"assets/img/yellow_bg.png",revision:"9aee5a12e6b5cdd2dacf847ac39b736f"},{url:"assets/img/三顆球背景-09.png",revision:"85991edef44a1d7a9f00577798b9b64b"},{url:"assets/img/側龍.png",revision:"0196d2849f370401f6859e0d4a2532b0"},{url:"assets/img/分數表-1.png",revision:"ca2fc1c4abb4ca57632c31a7726444c4"},{url:"assets/img/分數表.png",revision:"ca2fc1c4abb4ca57632c31a7726444c4"},{url:"assets/img/完成收集好運8龍珠，就能獲得好運御守，讓您好運不斷龍年行大運！.png",revision:"3e213d79fdd65cb09b0f3f135a1cce14"},{url:"assets/img/御守背景.png",revision:"1c1d067ea1633ebf926e70966e3cbd36"},{url:"assets/img/背景(上)-09.png",revision:"82726cf551b96973646c94b0feeeb5f1"},{url:"assets/img/背景(上)-1.png",revision:"266fa85d2f8a6e8577a09583253ad348"},{url:"assets/img/背景(上)-2.png",revision:"82726cf551b96973646c94b0feeeb5f1"},{url:"assets/img/背景(上).png",revision:"266fa85d2f8a6e8577a09583253ad348"},{url:"assets/img/遊戲規則.png",revision:"f123c78ef5a9de9136d147a9ca360c4e"},{url:"img/icons/android-chrome-192x192.png",revision:"3ef4a95391ff2bfd5f442ea89292b3fa"},{url:"img/icons/android-chrome-512x512.png",revision:"4fd10861636b509a53d091e1c6cd8f64"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"3ef4a95391ff2bfd5f442ea89292b3fa"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"4fd10861636b509a53d091e1c6cd8f64"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"c24de0bfa43e42fd8568d1b38262c4c3"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"de8e6c5c1e047c79711200a9529be00e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"f66b5015d880335cb607d474025316e8"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"91035985e360cd3b9e443066bccdc53a"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"c14d8293625bbec500e0e9dec5848336"},{url:"img/icons/apple-touch-icon.png",revision:"f66b5015d880335cb607d474025316e8"},{url:"img/icons/favicon-16x16.png",revision:"49610a9d0e3026ebfaec1aa32f22b67f"},{url:"img/icons/favicon-32x32.png",revision:"e3c7c3355821030a05ac1e54e105e973"},{url:"img/icons/msapplication-icon-144x144.png",revision:"4db12ddb2969ae559fe8cc63810e7747"},{url:"img/icons/mstile-150x150.png",revision:"8bf70c634505b233c8b293cf3a749278"},{url:"img/icons/safari-pinned-tab.svg",revision:"86b564b18ea6c7e170fa6cb87ca03bcf"},{url:"manifest.webmanifest",revision:"57439dbce5a2c575d7bbf99676e164bf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
