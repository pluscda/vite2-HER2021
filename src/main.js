// http://www.babyitellyou.com/details?id=6045c37f4da5fa50e15006a3
//https://www.mdeditor.tw/pl/gc7t/zh-hk
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from './router';
import App from './App.vue';
import 'element-plus/lib/theme-chalk/index.css';
import './index.css'
import * as R from "ramda";
// https://vue3.chengpeiquan.com/plugin.html#%E5%9B%9E%E9%A1%BE-2-x
const app = createApp(App).use(router).use(ElementPlus);
//// 把插件的api挂载全局变量到实例上
app.config.globalProperties.R = R;
// 你也可以自己写一些全局函数去挂载
app.config.globalProperties.$log = (text)=> {
  console.log(text);
};

app.mount('#app');
