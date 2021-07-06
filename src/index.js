import Vue from "vue";
import Main from "views/Main.vue";

import "styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Main)
}).$mount("#app");
