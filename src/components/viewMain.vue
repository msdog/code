<template>
  <div class="box">
    <side-menu class="side-menu"></side-menu>
    <div class="view" :class="{collapse:$store.state.toggleCollapse.toggle}">
      <top-bar></top-bar>
      <router-view></router-view>
    </div>
    <el-dialog></el-dialog>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import topBar from "@/components/topBar.vue";
import elDialog from "@/components/model/dialog";
export default {
  components: {
    SideMenu,
    topBar,
    elDialog
  }
};
</script>

<style scoped>
.box {
  overflow-x: hidden;
  width: 100%;
}
.side-menu {
  float: left;
  position: fixed;
}
.view {
  margin-left: 180px;
  transition: all 0.5s
}
.collapse{
  margin-left: 64px;
  transition: all 0.3s
}
</style>
