<template>
  <div>
    <div id="myChart" :style="{width:'300px,',height:'300px'}"></div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: '1'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'),'macarons')
        // 绘制图表
        myChart.setOption({
          // backgroundColor:"#088",//背景色
          title: {
            text: '访问变化趋势图'
          },
          tooltip: {
            trigger: "axis",
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              // type: "line" | "shadow" // 默认为直线，可选为：‘line‘ | ‘shadow‘
              type: 'cross' // xy辅助线
            }
          },
          legend: {
            data: ['今日电量', '昨日电量']
          },
          dataZoom: [ //选择区域
            {
              startValue: '00:00' //开始区域
            },
            {
              type: 'inside'
            }
          ],
          // itemStyle: {
          //   // 设置扇形的颜色
          //   color: '#099',
          //   shadowBlur: 200,
          //   shadowColor: 'rgba(0, 0, 0, 0.5)'
          // },
          toolbox: { //右上角工具
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {
                readOnly: false
              },
              magicType: {
                type: ['line', 'bar']
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: { //x
          color: '#909',
            data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
          },
          yAxis: { //y
            type: "value",
            axisLabel: {
              formatter: '{value} W' //y单位
            },
            axisPointer: {
              snap: true //辅助线咬住点
            }
          },
          series: [{
            name: '今日电量',
            // color: '#099',
            type: 'line',
            data: [300, 280, 250, 260, 270, 300, 50, 500, 400, 390, 380, 390, 400, 50, 600, 750, 80, 700, 1600, 400],
            markLine: {
              data: [{
                type: 'average',
                name: '平均值'
              }]
            },
          }, {
            name: '昨日电量',
            // color: '#909',
            type: 'line',
            data: [1500, 200, 200, 290, 200, 300, 250, 500, 1431, 363, 380, 390, 293, 531, 600, 1831, 850, 600, 650, 480],
            markLine: {
              data: [{
                type: 'average',
                name: '平均值'
              }]
            },
          }]
        });
      }
    }
  }
</script>

<style>

</style>
