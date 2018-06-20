// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router' //从文件夹引入
import Vresource from "vue-resource"
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
import store from "@/store";

import bus from "./plugins/bus.js";

Vue.use(bus)

Vue.use(Vresource)//全局注册 每个组件都可以使用此插件 单独注册单独使用
Vue.use(ElementUI,{size:'middle'})
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router, //使用到视图
  store,//使用store
  components: { App },
  template: '<App/>',
  render: h => h(App),
  mounted () {
    console.log(this.$tools);
    
  }
})
