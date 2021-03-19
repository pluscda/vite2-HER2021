// http://www.babyitellyou.com/details?id=6045c37f4da5fa50e15006a3
//https://www.mdeditor.tw/pl/gc7t/zh-hk
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from './router';
import store from './store'
import App from './App.vue';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(router).use(ElementPlus).use(store).mount('#app');
