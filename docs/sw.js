if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const d=e=>i(e,c),o={module:{uri:c},exports:n,require:d};s[c]=Promise.all(a.map((e=>o[e]||d(e)))).then((e=>(r(...e),n)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2400e10c.css",revision:null},{url:"assets/index-eddeb525.js",revision:null},{url:"index.html",revision:"6d9975d97f4c31a9a8d4c5e6a8d2df00"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-logo.png",revision:"18c97d93983b5cc99d0313de440a0a66"},{url:"img/icons/android-chrome-192x192.png",revision:"0df4949d0ac676f28df33c4e4bbbe652"},{url:"img/icons/android-chrome-512x512.png",revision:"f3739e07a23f66d85bbf04c399d4376d"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"0df4949d0ac676f28df33c4e4bbbe652"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"f3739e07a23f66d85bbf04c399d4376d"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"3d51e18c5d58b078b34b3535e0c9a1cf"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"ba420f550b1f2d5c3f7522536a76b659"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"a3831813086d64fdc86b8c680a7711a4"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"c02452acb4dfa3405db915917430578d"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"028d70f4f64718fd5925d44c72e180bc"},{url:"img/icons/apple-touch-icon.png",revision:"a3831813086d64fdc86b8c680a7711a4"},{url:"img/icons/favicon-16x16.png",revision:"49610a9d0e3026ebfaec1aa32f22b67f"},{url:"img/icons/favicon-32x32.png",revision:"cb64140b676ad43c31df39ab41d912d7"},{url:"img/icons/msapplication-icon-144x144.png",revision:"083810876f10291e2ec7931590b841c5"},{url:"img/icons/mstile-150x150.png",revision:"5241fda3f31b0d99bed09163c3234782"},{url:"img/icons/safari-pinned-tab.svg",revision:"86b564b18ea6c7e170fa6cb87ca03bcf"},{url:"assets/img/Group -1.png",revision:"d2156948bb4081b000f2f7db65cff8e2"},{url:"assets/img/Group -2.png",revision:"338462a46c9c45d16703dc6977e0dfdd"},{url:"assets/img/Group -3.png",revision:"338462a46c9c45d16703dc6977e0dfdd"},{url:"assets/img/Group -4.png",revision:"338462a46c9c45d16703dc6977e0dfdd"},{url:"assets/img/Group -5.png",revision:"b2df9601741443cf091aea6c70e9f0e0"},{url:"assets/img/Group -6.png",revision:"338462a46c9c45d16703dc6977e0dfdd"},{url:"assets/img/Group -7.png",revision:"c8b703a2cf55c9f9d23b1ec5fd2f5c19"},{url:"assets/img/Group -8.png",revision:"59863a6331946d85404e490d096bcb6f"},{url:"assets/img/Group -9.png",revision:"bef4cc76a2ae3519f96d94faa8418b81"},{url:"assets/img/Group 107.png",revision:"e20181bad1de2934697dc2776bbd97b5"},{url:"assets/img/Group 116.png",revision:"d5a89fe3d700e69a393b168b75e79925"},{url:"assets/img/Group 129.png",revision:"ff93fd8e1c8a2177938783518d22e2f7"},{url:"assets/img/Group 132.png",revision:"96059089fd21fc57701557a35626f82f"},{url:"assets/img/Group 134.png",revision:"857c8e5c27e10fdfa30134f3ecfae801"},{url:"assets/img/Group 136.png",revision:"84bb719d05ccef95cafe652fc5fd5a1a"},{url:"assets/img/Group 17.png",revision:"1cd4cffca935e46bcde4ae5abae435f7"},{url:"assets/img/Group 21.png",revision:"d2eba11a215f5978fc5968f4bdfc0318"},{url:"assets/img/Group 29.png",revision:"d2156948bb4081b000f2f7db65cff8e2"},{url:"assets/img/Group 31.png",revision:"2ee58309cdc608a2617e9fc7011d764e"},{url:"assets/img/Group 32.png",revision:"ad839a99acd853c66e94788c441b3c2a"},{url:"assets/img/Group 43.png",revision:"0e1d06178d507f8128f93a22f454ad81"},{url:"assets/img/Group 47.png",revision:"df8855edddef87a0395b1d68a15975d3"},{url:"assets/img/Group 51.png",revision:"f7266b0df7097919eb1e0c366071761b"},{url:"assets/img/Group 52.png",revision:"f7266b0df7097919eb1e0c366071761b"},{url:"assets/img/Group 53.png",revision:"f6627562fa89e48fa8fe2efd6d184a11"},{url:"assets/img/Group 60.png",revision:"8d9bd7c0a6c483a8ac849ea2dcbe7727"},{url:"assets/img/Group 61.png",revision:"f6627562fa89e48fa8fe2efd6d184a11"},{url:"assets/img/Group 76.png",revision:"244d060c5d604581c8a7059d37e7e850"},{url:"assets/img/Group 83.png",revision:"b2df9601741443cf091aea6c70e9f0e0"},{url:"assets/img/Group 86.png",revision:"60c586ce447e3196a287ab33f87ec2da"},{url:"assets/img/Group 87.png",revision:"d6aa783a481c693a699bd0d1d6fb26bb"},{url:"assets/img/Group 88.png",revision:"17008004955647fad31e9d35efab16fa"},{url:"assets/img/Group 89.png",revision:"f075d324c15c6c198a640bb623680661"},{url:"assets/img/Group 91.png",revision:"0d83218c34a0a572d4a8169c5d03636d"},{url:"assets/img/Group 93.png",revision:"594720cea72b293bd0c2d21003c54c6d"},{url:"assets/img/dragon_right_big.png",revision:"701db1c9206c8410e5f5ebdaab56f911"},{url:"assets/img/dragon_right_small.png",revision:"eaed8bc73bf03ac352b3c785c5515531"},{url:"assets/img/ground.png",revision:"898640d309c8e7437173c8cdbc3e8f77"},{url:"assets/img/index_title.png",revision:"77c7375ff7c9abebc07bb06c09a5b280"},{url:"assets/img/last one-09.png",revision:"b907b8f97c52b866d84546f81a4528c0"},{url:"assets/img/left_down_cloud.png",revision:"15dba70cce0a18eb664cb9491a884205"},{url:"assets/img/logo.png",revision:"82aaa9494adc9fd84a7572458a6ce34d"},{url:"assets/img/logo_left_top.png",revision:"c3e2ce4b4984e2782b5b76ecf1ffdc5f"},{url:"assets/img/main_product_full.png",revision:"377bc960efc850046ad8b033dffabad8"},{url:"assets/img/right_belt_slogan.png",revision:"b7a26c1d806b7790c81eca3d65095e96"},{url:"assets/img/right_down_belt.png",revision:"6afdc08466bc6b01a99e11f1f1354b3b"},{url:"assets/img/right_top_play_button.png",revision:"338462a46c9c45d16703dc6977e0dfdd"},{url:"assets/img/wave_ground.png",revision:"2e6c8f7ec31b53c681ae5e4fb721f08f"},{url:"assets/img/woman.png",revision:"fa305a21b49102120e3599a314e30b9b"},{url:"assets/img/yellow_bg.png",revision:"9aee5a12e6b5cdd2dacf847ac39b736f"},{url:"assets/img/女生-1.png",revision:"1856052ee5d49dc990a60e8d66dbaa7a"},{url:"assets/img/好運八龍珠-1.png",revision:"49a9c3d57c349ad589c2acb3b164eac1"},{url:"assets/img/完成收集好運8龍珠，就能獲得好運御守，讓您好運不斷龍年行大運！.png",revision:"9523e41201e9a3069ee76a427f2b9536"},{url:"assets/img/左下角-2.png",revision:"15dba70cce0a18eb664cb9491a884205"},{url:"assets/img/左下角.png",revision:"15dba70cce0a18eb664cb9491a884205"},{url:"assets/img/波浪-09.png",revision:"2e6c8f7ec31b53c681ae5e4fb721f08f"},{url:"assets/img/波浪-2.png",revision:"2e6c8f7ec31b53c681ae5e4fb721f08f"},{url:"assets/img/波浪-3.png",revision:"2e6c8f7ec31b53c681ae5e4fb721f08f"},{url:"assets/img/漸層背景-1.png",revision:"85ec4f48caf892ffcf88926f9f5f1d4c"},{url:"assets/img/漸層背景.png",revision:"85ec4f48caf892ffcf88926f9f5f1d4c"},{url:"assets/img/背景(上)-1.png",revision:"365a17d2c9932b66fc63395642b64a65"},{url:"assets/img/背景(上)-2.png",revision:"97a1dde2bc0fa961b3b1a1b13024aa9a"},{url:"assets/img/說明圖.png",revision:"12a28e6b6acab778809abd3d914d5214"},{url:"assets/img/遊戲規則.png",revision:"b85e6f8504caa8565302171a1c9188aa"},{url:"assets/img/集滿8顆有吉祥圖案的好運龍珠，即可過關！.png",revision:"ad132a1cfd28557795af2ecb68f74d9c"},{url:"assets/img/點擊畫面上移動中的好運龍珠，開始收集！.png",revision:"761849e1ede1e8b79c57bdb283cf42db"},{url:"manifest.webmanifest",revision:"a44d6e44fe1492ab92195f4ccfee018f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
