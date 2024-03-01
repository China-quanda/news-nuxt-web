<template>
  <div class="globa-nav">
		<div class="nav-box">
			<div class="left">
				<div class="logo">
					<a href="/">
						<h1 style="position: absolute; top: -999px;">news</h1>
						<img class="logo-img" src="~/assets/images/logo.png" title="news">
					</a>
				</div>
				<div class="menu">
					<div class="menu-item" v-for="(menu,index) in menuList" :key="index">{{menu.title}}</div>
				</div>
			</div>
			<div class="right">
				<div class="search">
          <AppHeaderSearch></AppHeaderSearch>
        </div>
				<div class="button"> 
          <el-button type="primary" round class="w-full" @click="router.push('/creator')"> <Icon name="ep:edit-pen" class="mr-1"/> 去创作 </el-button>
        </div>
				<div class="avatar"> 
          <AppHeaderAvatar></AppHeaderAvatar>
        </div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import setting from '@/config/setting';
	// import navSearch from './search/search.vue';
	// import navAvatar from './avatar/avatar.vue';
const router = useRouter();
	let menuList = ref([
		{
			name: 'photo',
			title: '关注'
		},
		{
			name: 'lock',
			title: '推荐'
		},
		{
			name: 'star',
			title: '郴州'
		},
		{
			name: 'hourglass',
			title: '房产'
		},
		{
			name: 'home',
			title: '美食'
		},
		{
			name: 'star',
			title: '科技'
		},
		{
			name: 'photo',
			title: '股票'
		},
		{
			name: 'lock',
			title: '家居'
		}
	]);
</script>

<style scoped lang="scss">
.globa-nav{
		/* position: fixed; */
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;
		height: $nav-height;
		// overflow: hidden;
		// background-color: antiquewhite;
		background-color: #fff;
		box-shadow: 0 2px 8px 0px rgba(122, 192, 241, 0.3);
		.nav-box{
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			min-width: $nav-min-width;
			// background-color: blue;
		}
	}
	
	.left{
		display: flex;
		align-items: center;
		.logo{
			margin-right: 30px;
			.logo-img{
				height: $logo-height;
			}
		}
		.menu{
			display: flex;
			align-items: center;
			.menu-item{
				cursor: pointer;
				// min-width: 70px;
				padding:10px 10px;
				margin: 0px 5px;
				// background-color: pink;
				&:hover{
					color: #1e80ff;
				}
			}
		}
	}
	.right{
		display: flex;
		align-items: center;
		.search,.avatar,.button{
			margin-left: 20px;
		}
		.avatar{
			margin-left: 10px;
		}
	}
</style>