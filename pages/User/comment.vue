<template>
	<div class="comment-box">
		<div v-for="item in list" :key="item.id" class="comment-item">
			<div class="comment-user">
				<img class="comment-user-avatar" src="~/assets/images/vue.svg" alt="" />
				<div class="comment-user-name">你的Maya</div>
			</div>
			<p>{{ item.content || '笑笑不说话' }}</p>
			<div class="comment-article">
				<!-- <articleItem data="2"></articleItem> -->
				<ArticleItem></ArticleItem>
			</div>
			<div class="comment-bottom">
				<div>3天前</div>
				<div class="right">
					<a>
						<i class="iconfont icon-liulan"></i>
						21
					</a>
					<a>
						<i class="iconfont icon-dianzan1"></i>
						33
					</a>
					<a @click="$router.push(`/details/${item.id}#comment`)">
						<i class="iconfont icon-31pinglun"></i>
						44
					</a>
					<a @click="clickAccusation(item.id)"><i class="iconfont icon-gengduo"></i></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const list = ref([
	{
		id:1,
		content:'笑笑不说话',
	},
	{
		id:2,
		content:'笑笑不说话',
	}
])
// import articleItem from '@/views/article/article-item.vue';
// const props = defineProps({
// 	data: {
// 		type: Array,
// 		required: true,
// 		default: () => []
// 	}
// });
const clickAccusation = (id:number) => {

}
</script>
<style lang="scss" scoped>
.comment-item {
	padding: 20px 0px;
	margin-bottom: 20px;
	border-bottom: 1px solid rgb(241, 241, 241);
}
.comment-user {
	box-sizing: border-box;
	display: flex;
	align-items: center;
	
	.comment-user-name {
		margin-left: 15px;
		font-size: 16px;
		font-weight: 500;
	}
}
.comment-article {
	.article-box {
		border-radius: 4px;
		background-color: #fcfafa;
	}
}
.comment-bottom {
	margin-top: 15px;
	display: flex;
	justify-content: space-between;
	font-size: 15px;
	& .right {
		display: flex;
		font-size: 14px;
		margin-left: 15px;
		i {
			color: rgb(160, 150, 150);
			margin-right: 4px;
			&:hover {
				color: #347aeb;
			}
		}
		a {
			display: flex;
			align-items: center;
			color: #4e5969;
			margin-right: 15px;
		}
	}
}
</style>
