import { createApp } from "vue";

import App from "./App.vue";
// 公共样式
import "./assets/css/index.css";

// 状态管理库
import pinia from "./stores";
// 路由
import router from "./router";
// 自定义指令
import directive from '@/directive'
//icon组件 ---全局组件
import "./assets/icon/iconfont";
import icon from "@/components/icon.vue";

const app = createApp(App);
app.component('Icon',icon)
app.use(pinia).use(router).use(directive).mount("#app");
