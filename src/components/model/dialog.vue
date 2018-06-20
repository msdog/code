<template >
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span v-if="content">{{content.name}}</span>
      <span v-if="content">{{content.age}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
</template>


<script>
  export default {
    data() {
      return {
        content: null,
        dialogVisible: false
      }
    },
    mounted () {
      
      this.$tools.receive('emit',(v) => {
        this.content = v
        console.log(this.content,'this.content');
        
        this.dialogVisible = true
      })
    },
    methods: {
      handleClose(done) {

      }
    }
  };
</script>