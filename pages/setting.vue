<template>
	<div class="wrap h-100vh">
		<div class="container">
			<div class="left-box-card">
				<div class="sidebar-menu-box">
					<div :class="['sidebar-menu-item', activeMenu == menu.name ? 'active-menu' : '']" v-for="menu in menuList" @click="handleMenu(menu)">{{ menu.name }}</div>
				</div>
			</div>
			<div class="right-box-card">
				<NuxtPage class="main"/>
				<!-- <div v-for="(item, index) in 800" :key="index">{{ index }}</div> -->
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({ title:'设置setting'})
const router = useRouter();
onMounted(()=>{
  console.log('onMounted')
  router.replace('/setting/profile')
})
let activeMenu = ref('');
let menuList = reactive([
	{ name: '个人资料', icon: '', url: '/setting/profile' },
	{ name: '安全设置', icon: '', url: '/setting/security' },
	{ name: '账号绑定', icon: '', url: '/setting/bind' }
]);
const handleMenu = (menu:any) => {
	activeMenu.value = menu.name;
	if (!menu.url) return;
	router.push({ path: menu.url });
};
</script>

<style scoped lang="scss">

.wrap {
	background-color: aliceblue;
}
.container {
	position: relative;
	margin: auto;
	padding-top: 15px;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	width: $container-min-width;
	min-height: calc(100vh - $nav-height);
}
// 左边盒子
.left-box-card {
	width: 220px;
	margin-right: 15px;
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0 2px 8px 0px rgba(122 192 241 / 30%);
}
.right-box-card {
	display: flex;
	flex-direction: column;
	flex: 1;
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0 2px 8px 0px rgba(122 192 241 / 30%);
}
.sidebar-menu-box {
	padding: 8px;
	color: #909399;
	.sidebar-menu-item {
		cursor: pointer;
		text-align: center;
		padding: 10px 0px;
		letter-spacing: 1px;
		font-size: 14.5px;
		font-weight: 500;
		&:hover {
			border-radius: 3px;
			background: #e8f3ff;
			color: #1d7dfa;
		}
	}
	.active-menu {
		border-radius: 3px;
		background: #e8f3ff;
		color: #1d7dfa;
	}
}
</style>
