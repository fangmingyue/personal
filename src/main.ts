import "./assets/scss/index.scss";
import "element-plus/dist/index.css";
import "./tailwind/index.css";
import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import { i18n } from "@/i18n";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(ElementPlus);
app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount("#app");
