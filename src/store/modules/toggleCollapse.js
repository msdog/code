export default {
  state: {//$store.state.dialog.show
    toggle:false
  },
  getters: {
    not_toggle(state) {//使用用$store.getters.not_show
      return !state.toggle//感觉用的不多啊 直接在数据那取反不就行了吗?
    }
  },
  mutations: {
    toggleCollapse(state, data) {//这里的state对应着上面这个state
      state.toggle = !state.toggle// 使用$store.commit('switch_dialog')调用
      //你还可以在这里执行其他的操作改变state
    }
  },
  actions: {//this.$store.dispatch('toggleCollapse', data) 触发action
    toggleCollapse(context){
      context.commit('toggleCollapse',data)//TOGGLE_COLLAPSE
      //你还可以在这里触发其他的mutations方法
    }
  }
  // mutation_types: {
  //   export const TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE'
  // }
}
//   <template >
//    <el-dialog : visible.sync="show"></el-dialog>
//   </template >

//   <script>
//     import {mapState} from 'vuex';
//    export default {
//     computed: {
//       //这里的三点叫做 : 扩展运算符
//       ...mapState({
//         show: state => state.dialog.show
//       }),
//     }
//   }
// </script>
// 相当于:

// <template>
//   <el-dialog : visible.sync="show"></el-dialog>
// </template >

//   <script>
//     import {mapState} from 'vuex';
// export default {
//       computed: {
//       show(){
//     return this.$store.state.dialog.show;
// }
// }
// }
// </script>