import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import { i18n } from "@/i18n";
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'


import App from "./App.vue";
import router from "./router";

import "element-plus/dist/index.css";
import "./style/index.css";
import "./assets/css/main.css";

const app = createApp(App);
app.use(ElementPlus);
app.use(i18n);
app.use(Viewer);
app.use(createPinia());
app.use(router);

app.mount("#app");
