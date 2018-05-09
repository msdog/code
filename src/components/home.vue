<template>
  <div id="home">
    <app-signup></app-signup>
    <app-carousel></app-carousel>
    <app-users v-bind:users='users'></app-users>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Vue from "vue";
  import Footer from "./footer";
  import users from "./users";
  import  carousel  from "./carousel";
  import  signup  from "./signup";
  export default {
    name: "home",
    data () {
      return {
        users:{}
      }
    },
    components:{
        'app-footer':Footer,
        'app-users':users,
        'app-carousel':carousel,
        'app-signup':signup,
    },  
    created () {
      this.$http
      .get("http://jsonplaceholder.typicode.com/users")
      .then((data)=>{
        this.users = data.body;
        console.log(data.body[0].name);
      });
    },
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
</style>
