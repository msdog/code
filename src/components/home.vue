<template>
  <div id="home">
    <el-button type="primary" @click="emit">emit</el-button>
    <div class="div" v-for="x in 31" :key="x">
      <img  :src="'https://resource.720think.com/v/Data/upload/think720/201705/993344470/3Dmedia/201708/795/'+(21295+x)+'.jpg'" >
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data () {
      return {
        users:{'name':'小明','age':21}
      }
    },
    methods: {
      emit() {
        this.$tools.send('emit', this.users)
      }
    }

  };

</script>

<style >
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.div{
  float: left;
}
img{
  width: 100px;
  height: 100px;
}
</style>
