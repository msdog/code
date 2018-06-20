<template>
	<div>
		<ul>
			<li v-for="(user,index) in users" v-if="index<=5"  :key="index">
				<h1>name:{{user.name}}</h1>
				<h2>addr:{{user.address.street}}</h2>
				<span >email:{{user.email}}</span>
			</li>
		</ul>
		<el-button type="primary" @click="submit" >gohome</el-button>
		
	</div>
</template>

<script>
export default {
	// name: "users",
	// props: ['users'],
	data() {
		return {
			users: null
		}
	},
	mounted() {
		this.$http
			.get("http://jsonplaceholder.typicode.com/users")
			.then((data) => {
				this.users = data.body;
			});
	},
	motheds: {
		go() {
			console.log(1);
			
			// router.go({
			// 	path: '/a/1',
			// 	force: true
			// })
		},
		submit() {
			console.log(1);
		}
	}
}
</script>

<style scoped>
	ul {
		list-style: none;
	}
	li {
		height: 200px;
		float: left;
		width: 33.333%;
		box-sizing: border-box;
		border: 1px solid #099;
		background-color: rgb(201, 223, 152);
	}
</style>
