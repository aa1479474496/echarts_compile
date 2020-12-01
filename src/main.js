import Vue from 'vue';
import App from './App.vue';

import router from "./router";

import ElementUI from "element-ui";
import _ from "lodash";

import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/reset.scss";
import "@/assets/iconfont/iconfont.js";
import "@/assets/iconfont/iconfont.css";
import "@/assets/css/transition.scss";

Vue.use(ElementUI);
Vue.prototype._ = _;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
