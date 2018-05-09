<template>

    <div id="footer">
      <ul>
        <li v-for="(msg,i) in msgs" :key="i"><a v-bind:href="msg.href">{{msg.text}}</a></li>
      </ul>
  </div>

</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        logoPath: require('../assets/logo.png'),
        msgs:[
          {text:'©侏罗纪-2018 莲花塘村 版权所有',href:'#'},
          {text:'网易公司(163.com)旗下实用技能学习平台。与优秀讲师、专业机构、院校合作，为您提供海量优质课程，以及创新的在线学习体验，帮助您获得全新的个人发展和能力提升。',href:'#'},

        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    width: 100%;
    list-style: none;

  }
  li {
    float: left;
    background-color: #666;
    width: 100%;
    display: block;    
  }

</style>

