
// import Vue from "vue";
// const vm = new Vue();
// export default {
//   methods: {
//     send(event, value) {
//       vm.$emit(event, value)
//     },
//     receive(event, value) {
//       vm.$on(event, value)
//     }
//   }
// }
const tools = (Vue) => {  //通过main.js中导入的Vue  new一个实例
  const vmx = new Vue({  //自发自收
    methods: {
      send(event, args) {
        this.$emit(event, args)
      },
      receive(event, cb) {
        this.$on(event, cb)
      }
    }
  });
  // Object.defineProperty(Vue.prototype,'$tools',vmx)
  Vue.prototype.$tools = vmx
}
export default tools