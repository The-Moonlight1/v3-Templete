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
// iconfont 
import "./assets/icon/iconfont";
// 全局组件
import components from "./components/components";

const app = createApp(App);
app.use(pinia).use(router).use(directive).use(components).mount("#app");
