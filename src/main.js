import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import toast from "./components/common/toast/toast.js";

Vue.config.productionTip = false;

Vue.use(toast);

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
