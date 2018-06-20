<template>
    <div >
        <form action="">
            <p><span ref="phoneHook" >123</span></p>
            <label for="" >手机</label>
            <input type="text" v-model="phone" @change="sb($event)" value="phone">
        </form>
            <button @click="reff"> cs-ref</button>
    </div>
</template>
<script>
export default {
    data() {
        return{
            phone:null,
            c:false,
        }
    },
    methods:{
        reff:function () {
            
            var p =document.querySelector('span');
            this.c=true;
            var dom = this.$refs.phoneHook;
            // p.innerHTML = "cuowu";
            // console.log(p);
            // console.log(this);
            // console.log(this.$refs.phoneHook);
            
        },
        sb:function (event) {
            console.log(this);
            console.log(event);
            this.$refs.phoneHook.innerHTML=event.target.value;
        }
}
}
</script>

<style scoped>
    div {
        height: 200px;
        width: 100%;
        background-color: rgb(179, 221, 159);
    }
</style>
