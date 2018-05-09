import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import toggleCollapse from "./modules/toggleCollapse.js";

export default new vuex.Store({
  modules: {
    toggleCollapse
  }
})