<template>
  <div class="follow-box">
		<div class="follow" v-for="item in list" :key="item.id">
			<div class="left" @click="$router.push({ name: 'User', params: { user_id: `${item.foller_id}` } })">
				<!-- <el-avatar :size="65" :src="item.follow.avatar"></el-avatar> -->
				<img src="~/assets/images/vue.svg" />
			</div>
			<div class="center">
				<p class="name" @click="$router.push({ name: 'User', params: { user_id: `${item.foller_id}` } })">你的Maya</p>
				<p>TA很懒，还没有添加简介</p>
			</div>
			<div class="btn">
				<button @click="clickBtn(item)">
					<i class="iconfont icon-dianzan1"></i>
					回关
					<!-- {{!item.friends ? '已关注' : '互相关注'}} -->
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { addUserFollowings, deleteUserFollowings, isWage } from '@/api/user'
let list = reactive([
  {
    id:1,
    foller_id:1,
  },
  {
    id:1,
    foller_id:1,
  },
  {
    id:1,
    foller_id:1,
  }
]);
let isFans = ref<boolean>(false);
// 粉丝用户按钮
const clickBtn = async (item:any) => {
	if (isFans.value) {
		const res = await isWage(item.foller_id);
		if (res) {
			// await deleteUserFollowings(item.foller_id);
			// this.$message.success('已取消关注该粉丝')
		} else {
			// await addUserFollowings({ follerd_id: item.foller_id });
			// this.$message.success('回粉成功，已互相关注')
		}
	}
};

// 判断是否已经关注
const isWage = async (id:number) => {
	// return await isWage(id);
  return {}
};
</script>

<style scoped lang="scss">
.follow-box {
	cursor: pointer;
}
.follow {
	display: flex;
	align-items: center;
	width: 100%;
	padding: 20px 0;
	border-bottom: 1px solid #eee;
	&:hover {
		background-color: #fcfafa;
	}
	.left {
		width: 70px;
	}
	.center {
		flex: 1;

		margin-right: 10px;
		p {
			margin: 0;
		}
		p:nth-child(1) {
			font-size: 16px;
			font-weight: 500;
			margin-bottom: 15px;
		}
		p:nth-child(2) {
			font-size: 13px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden; //隐藏文字
		}
	}
	// .btn {
	// 	display: flex;
	// 	flex-wrap: wrap;
	// 	align-content: center;
	// }
}
</style>