import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";
import * as api from "@/plugin/api/index.js";
import Antd from "@/plugin/antd";

import "@/style/main.css";
import "@/style/rwd.scss";


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.provide("$api", api);

app.use(Antd).mount("#app");
