import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "vue-query";

import App from "./App.vue";
import router from "./router";

import "./index.css";
import "./main.css";
import "./assets/css/fonts.css";

const app = createApp(App);

app.use(createPinia());
app.use(VueQueryPlugin);
app.use(router);

app.mount("#app");
