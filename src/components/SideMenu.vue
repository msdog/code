<template>
	<div class="bg">
			<el-menu default-active="2" :collapse="toggle" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				<el-submenu :index="(index+1).toString()" v-for="(item,index) in routesData" :key="index+1">
					<template slot="title">
							<i class="el-icon-location"></i>
							<span>{{item.name+index}}</span>
					</template>
					<el-menu-item-group>
					<router-link :to="{name:submenu.name}" v-for="(submenu,i) in item.children" :key="i"><el-menu-item :index="(index+1) +'-'+(i+1)">{{submenu.name+i}}</el-menu-item></router-link>
        </el-menu-item-group>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
import { mapState } from "vuex";
	export default {
		data() {
			return {
				routesData: [],
			}
		},
		created() {
			this.routes()
		},
		computed: {
			...mapState({
				toggle:state => state.toggleCollapse.toggle
			})
		},
		methods: {
			routes() {
				console.log(this.$router.options.routes);
				this.routesData = this.$router.options.routes
			}
		}
	}
</script>

<style >
	.bg {
		width: auto;
	}
	ul {
		height: 100vh;
		overflow: hidden;
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 180px;
	}
</style>
