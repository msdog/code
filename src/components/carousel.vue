<template>
  <div class="block" >
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel height="500px" :interval="4000" type='card'>
      <el-carousel-item v-for="carouselData in carouselDatas" :key="carouselData.value">
        <a href="###">
            <span>{{carouselData.title}}</span>
            <img :src="carouselData.img">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import topbar from "./topBar";
export default {
    name:"carousel",
    data(){
        return{
            carouselDatas:[
                {img:require('../../../B151前端设计/images/video/pro.jpg'),title:123},
                {img:require('../assets/logo.png'),title:456},
                {img:require('../assets/logo.png'),title:789},
            ]
        }
    },
    mothed : {
    },
    components: {
      topbar
    }
}
</script>

<style scoped>
  .block{
    width: 100%;
  }
  .el-carousel__item div{
      position: relative;
  }
  .el-carousel__item span {
    left: 50%;
    margin-left: -10px;
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    position: absolute;
  }
    img{
        height: 100%;
    }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>