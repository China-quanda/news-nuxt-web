<template>
  <div class="wrap">
		<div class="container">
			<div class="left-box-card">
				<h1 class="article-title">{{ article.title }}</h1>
				<div class="author">
					<div class="left">
						<div class="author-avatar" @click="router.push({ name: 'User', params: { user_id: `${article.user_id}` } })"><img src="~/assets/images/vue.svg" /></div>
						<div class="author-info">
							<div class="author-name" @click="router.push({ name: 'User', params: { user_id: `${article.user_id}` } })">你的Maya</div>
							<div class="author-view">
								<span>2022年21月6日12:8</span>
								<span>·</span>
								<span>阅读 1234</span>
							</div>
						</div>
					</div>
					<div class="right">
						<button @click="wage(article.user_id)">{{ !isWage ? '+ 关注' : '✓ 取消关注' }}</button>
					</div>
				</div>

				<!-- 内容区域 -->
				<div class="content ">
					<p v-html="article.content"> </p>
				</div>

				<!-- 左侧固定区域 -->
				<ArticleSuspension :article="article" :articleId="articleId" @refresh="getArticleInfo"></ArticleSuspension>
			</div>
			<div class="right-box-card">
				<Sidebar></Sidebar>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
let article = reactive({
	id:1,
	content:"牛马社会牛马多，牛牛马马坐一桌",
	user_id:1,
	title:"webpack2 + vue2 老项目迁移 vite 成功! 是真香啊..."
});
let isWage = ref(false);
let articleId = ref(Number(route.params.articleId) || 0);
// onMounted(()=>{
// 	getArticleInfo()
// })
// const goToUser = ()=>{
// 	router.push({ name: 'User', params: { user_id: `${article.user_id}` } })
// }
// 根据文章id获取文章信息
const getArticleInfo = async () => {
	// const article = await getArticleId(articleId.value);
	// article = article;
	// isWagee(); // 是否关注该篇文章的作者
};

// 是否关注
const isWagee = async () => {
	// const res = await isWage(article.user_id);
	// if (res) {
	// 	isWage.value = true;
	// }
};

// 点击关注按钮
const wage = async (id:number) => {
	// if (isWage.value == false) {
	// 	const res = await addUserFollowings({ follerd_id: article.user_id });
	// 	if (res) {
	// 		isWage.value = true;
	// 	}
	// } else {
	// 	const res = await deleteUserFollowings(articleId.value);
	// 	isWage.value = false;
	// }
};
</script>

<style scoped lang="scss">
.wrap {
	background-color: aliceblue;
}
.container {
	// position: relative;
	margin: auto;
	width: $container-min-width;
	min-height: calc(100vh - $nav-height);
	padding-top: 15px;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
}
// 左边盒子
.left-box-card {
	display: flex;
	flex-direction: column;
	padding: 20px;
	margin-right: 15px;
	width: 100%;
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0 2px 8px 0px rgba(122 192 241 / 30%);

	.article-title {
		font-size: 26px;
	}

	// 作者
	.author {
		display: flex;
		align-items: center;
		justify-content: space-between;
		// padding: 15px 0 23px 0;
		margin: 10px 0px;
		.left {
			display: flex;
			flex: 1;
			.author-avatar {
				cursor: pointer;
			}
			.author-info {
				margin-left: 20px;
				.author-name {
					color: #3b3d41;
					cursor: pointer;
					font-size: 16px;
					margin-bottom: 5px;
				}
				.author-view {
					color: #8a919f;
					font-size: 14px;
					font-weight: 500;
				}
			}
		}
	}

	// 内容样式处理
	.content {
		p {
			line-height: 30px;
		}
		// 代码块
		pre {
			background-color: rgb(58, 45, 73);
			border-radius: 5px;
			padding: 15px;
			position: relative;
		}
		code {
			color: rgb(255, 255, 255);
		}
		// 引用
		blockquote {
			border-left: 5px solid #edf2fc;
			border-radius: 2px;
			color: #606266;
			margin: 10px 0;
			padding-left: 1em;
		}
		img {
			max-width: 100%;
			border-radius: 5px;
			// background:#3b3d41;
			margin: 10px 0px;
			box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 10%);
		}
	}
}
</style>