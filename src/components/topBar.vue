<template>
  <div id="topBar">
    <div class="logo">
      <el-button type="primary" @click="$store.commit('toggleCollapse')"><img :src="logoPath" title="VUE"></el-button>
    </div>
    <ul class="linker">
      <li v-for="(msg,index) in msgs" :key="index"><a v-bind:href="msg.href">{{msg.text}}{{index}}</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'topBar',
    data() {
      return {
        logoPath: require('../assets/logo.png'),
        msgs: [{
            text: '中文邮箱第一品牌',
            href: '#'
          },
          {
            text: '邮箱首页',
            href: '#'
          },
          {
            text: 'VIP邮箱',
            href: '#'
          },
          {
            text: '个人中心',
            href: '#'
          },
          {
            text: '了解更多',
            href: '#'
          },
          {
            text: 'Join us',
            href: '#'
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @topBarHeight: 60px;
  #topBar {
    height: @topBarHeight;
    width: 100%;
    border-bottom: 1px solid #cccccc;
    .logo {
      height: @topBarHeight;
      float: left;
      line-height: @topBarHeight;
      img {
        height: 30px;
        width: 30px;
      }
    }
    .linker {
      list-style: none;
      li {
        float: left;
        a {
          padding: 21px 15px;
          line-height: @topBarHeight;
          &:hover {
            color: #999;
            background-color: #eee;
          }
        }
      }
    }
  }
</style>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #aaa;
  }
</style>
