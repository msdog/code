<template>
	<div id="users">
		<el-button type="primary" @click="fn"></el-button>
		<ul>
			<li v-for="(user,index) in users" v-if="index<=5" v-bind:users="users" :key="index">
				<h1>name:{{users[index].name}}</h1>
				<h2>addr:{{users[index].address.street}}</h2>
				<span>email:{{users[index].email}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "users",
		// props: ['users'],
		data() {
			return {
				users: null
			}
		},
		motheds: {
			fn() {
				router.go({
					path: '/a/1',
					force: true
				})
			}
		},
		created() {
			this.$http
				.get("http://jsonplaceholder.typicode.com/users")
				.then((data) => {
					this.users = data.body;
				});
		},
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
