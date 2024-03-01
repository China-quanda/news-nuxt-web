<template>
  <div class="wrap" v-if="userId">
		<div class="container w">
			<div class="row-one">
				<div @click="$router.push({ name: 'User', params: { user_id: `${userId}` } })">
					<!-- <el-avatar :size="40" :src="avatar"></el-avatar> -->
					<img src="~/assets/images/vue.svg" alt="" />
				</div>
				<span class="name" @click="$router.push({ name: 'User', params: { user_id: `${userId}` } })">
					你的Maya
					<i>></i>
				</span>
			</div>
			<div class="row-two">
				<div>
					<div>312</div>
					<div>获赞</div>
				</div>
				<div>
					<div>310</div>
					<div>粉丝</div>
				</div>
				<div>
					<div>219</div>
					<div>关注</div>
				</div>
			</div>
			<div class="row-three">
				<div @click="$router.push({ name: 'User', params: { user_id: `${userId}` } })">
					<div><i class="iconfont icon-dianzan"></i></div>
					<div>点赞</div>
				</div>
				<div @click="$router.push({ name: 'User', params: { user_id: `${userId}` }, hash: '#collection' })">
					<div><i class="iconfont icon-shoucang"></i></div>
					<div>收藏</div>
				</div>
				<div>
					<div @click="$router.push({ name: 'User', params: { user_id: `${userId}` }, hash: '#comments' })"><i class="iconfont icon-pinglun"></i></div>
					<div>评论</div>
				</div>
				<div @click="$router.push({ name: 'User', params: { user_id: `${userId}` }, hash: '#history' })">
					<div><i class="iconfont icon-liulan"></i></div>
					<div>历史</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

let avatar = ref('');
let userId = ref('1');
let nickname = ref('');
</script>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
	padding: 15px 20px;
	box-sizing: border-box;
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0 2px 8px 0px rgba(122 192 241 / 30%);
}
.row-one {
	display: flex;
	align-items: center;
	.el-avatar,
	.name {
		cursor: pointer;
	}
	.name {
		margin: 0 8px;
		font-size: 16px;
		font-weight: 500;
	}
}
.row-two {
	display: flex;
	justify-content: space-between;
	height: 60px;
	margin: 10px 0;
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 85px;
		background-color: rgb(251, 249, 249);
		border-radius: 4px;
		div {
			height: 25px;
		}
	}
}
.row-three {
	display: flex;
	justify-content: space-between;
	padding: 8px 0;
	border-radius: 4px;
	background-color: rgb(251, 249, 249);
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 60px;
		div:first-child {
			margin-bottom: 5px;
		}
	}
	.iconfont {
		font-size: 20px;
	}
	.icon-liulan {
		font-size: 25px;
		color: #b68f58;
	}
	.icon-pinglun {
		color: #5dd33b;
	}
	.icon-shoucang {
		color: #d33b3b;
	}
	.icon-dianzan {
		color: rgb(59, 123, 211);
	}
}
</style>