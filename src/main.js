import "./assets/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
        // 在這裡可以使用 registration 來進一步管理 Service Worker
        console.log('Service Worker 注冊成功:', registration);

        navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'syncProgress') {
                console.log('進度:', event.data.progress);
                // 在這裡更新網頁上的進度顯示
            }
        });

        // 觸發 Service Worker 檢查 Cache Storage 狀態
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.controller.postMessage({
                type: 'checkCacheStorage',
            });
        }
    });

}

