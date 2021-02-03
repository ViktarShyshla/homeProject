import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "@/assets/styles/common.scss";

createApp(App).mount("#app");

new Vue({
  store,
  render: (h) => h(App),
}).$mounth("#app");
