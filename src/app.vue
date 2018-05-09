<template>
  <div id="app">
    <router-view></router-view>
    <!-- <viewmain></viewmain> -->
  </div>
</template>

<script>
import viewmain from "@/components/viewMain";
  export default {
    name: 'App',
    components: {
      viewmain
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .rlink {
    position: fixed;
    left: 50%;
    z-index: 9999;
  }
</style>
