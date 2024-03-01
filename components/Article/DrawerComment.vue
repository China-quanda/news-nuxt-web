<template>
  <div class="article-comment" ref="comment">
		<div class="comment-header">
			<div class="title">全部评论 ( 7 )</div>
			<div class="close">
				<i class="iconfont icon-dianzan" @tap="ontapLike(1)"></i>
			</div>
		</div>
		<!-- 发布评论 -->
		<div class="send-comment">
			<div class="user-avatar"></div>
			<div class="comment-textarea">
				<div class="comment-iput">{{ commentPlaceholder }}</div>
				<div class="comment-action">
					<div class="action-gj">
						<i class="iconfont icon-biaoqing-xue gj" @tap="ontapLike(1)"></i>
						<i class="iconfont icon-tupian gj" @tap="ontapLike(1)"></i>
					</div>
					<div class="action-btn">发表评论</div>
				</div>
			</div>
		</div>

		<div class="comment-item" v-for="item in 1" :key="item">
			<div class="comment-left">
				<img src="~/assets/images/vue.svg" />
			</div>
			<div class="comment-right">
				<div class="header"><span>你的Maya</span></div>
				<div class="comment" @tap="ontapHuifu(item)"><p>你的英雄难过美人关,你的英雄难过美人关,你的英雄难过美人关,你的英雄难过美人关,你的英雄难过美人关</p></div>
				<div class="footer">
					<div class="left-action">
						<span style="color:#999">30分钟前 · 广州</span>
						<span class="action-reply" @tap="$emit('onShowPost')">回复</span>
					</div>
					<div class="right-action">
						<!-- icon-dianzan_kuai  728ae9-->
						<i class="iconfont icon-dianzan like" @tap="ontapLike(1)"></i>
					</div>
				</div>

				<!-- 回复列表 -->
				<div class="reply" v-for="i in 1" :key="i" v-if="true">
					<div class="comment-left">
						<!-- <my-avatar src="https://fastly.jsdelivr.net/npm/@vant/assets/cat2s2.jpeg" iconSize="16" ic width="26px" height="26px" /> -->
						<img src="~/assets/images/vue.svg" />
					</div>
					<div class="comment-right">
						<div class="header"><span>你的Maya</span></div>
						<div class="comment" @tap="ontapHuifu(item)"><p>你的英雄难过美人关,你的英雄难过美人关,你的英雄难过美人关,你的英雄难过美人关,你的英雄难过美人关</p></div>
						<div class="footer">
							<div class="left-action">
								<span style="color:#999">30分钟前 · 广州</span>
								<span class="action-reply" @tap="$emit('onShowPost')">回复</span>
							</div>
							<div class="right-action">
								<!-- icon-dianzan_kuai  728ae9-->
								<i class="iconfont icon-dianzan like" @tap="ontapLike(1)"></i>
							</div>
						</div>
					</div>
				</div>

				<!-- 展开回复评论 -->
				<div class="more">
					<!-- 该条评论下有评论有显示：展开xx条回复 -->
					<!-- 展开回复后加载前3条回复内容数据后有一下情况：
						1，展示的数据小于3条 => 收起
						2, 展示的数据大于3条 => 展开更多回复 -，展开更多后 暂时完数据后显示 => 收起, 没展示完数据则显示=> 展开更多回复  收起-->
					<div @tap="ontapLike(1)">
						<span class="more-text">展开3条回复</span>
						<i class="iconfont icon-dianzan more-icon"></i>
						<!-- <i class="iconfont icon-xiala"></i> -->
					</div>
					<!-- <div @tap="ontapLike(item.id)">
						<span class="more-text">展开更多回复</span>
						<i class="iconfont icon-dianzan more-icon"></i>
					</div> -->
					<div @tap="ontapLike(1)">
						<span class="more-text">收起</span>
						<i class="iconfont icon-dianzan more-icon"></i>
						<!-- <i class="iconfont icon-xiangshang"></i> -->
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	articleId: {
		type: [Number],
		required: true
	}
});
let showActionComment = ref(true);
let commentContent = ref('');
let commentPlaceholder = ref('美好的一天从评论开始~');
let queryInfo = reactive({
	pageNum: 1, // 分页页码
	pageSize: 50 // 页面数据条数
});
let commentList = reactive([]);
let total = ref(0);
const ontapHuifu = (item:any) => {
	// bus.$emit('ontapHuifu', item);
};

// 发布评论
const onPost = async () => {
	// const body = {
	// 	article_id: this.articleId,
	// 	content: this.message
	// };
	// const res = await addComment(body);
	// if (!res) return console.log('发布评论失败');
	// console.log('发布评论成功');
	// this.message = '';
	// bus.$emit('postOk');
};
// 获取文章下的评论列表数据
const getArticleCommentList = async (id:number, params:any) => {
	// const res = await getArticleCommentList(id, params);
	// total.value = res.total;
	// commentList = res.list;
	// commentList = toTree(res.list);
	// this.queryInfo.pageNum = this.queryInfo.pageNum + 1
};

// 给评论点赞 或取消点赞
const ontapLike = async (id:number) => {
	console.log(11);
	// if (this.token) {
	// 	const res = await addCommentLikings({ comment_id: id });
	// 	if (res) {
	// 		console.log('点赞成功');
	// 	} else {
	// 		console.log('点过赞了 ， 发请求取消点赞');
	// 		const re = await deleteCommentLikings(id);
	// 		if (!re) return console.log('取消点赞失败');
	// 		console.log('取消点赞成功');
	// 	}
	// }
};

onMounted(() => {
	// getArticleCommentList(this.articleId, this.queryInfo);
});
</script>

<style scoped lang="scss">
.article-comment {
	position: fixed;
	width: 430px;
	box-sizing: border-box;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
	padding: 0 15px;
	background-color: #fff;
	box-shadow: 0 8px 8px 0px rgba(122, 192, 241, 0.3);
}
.comment-header{
	margin-top: 10px;
	padding: 10px 0px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.comment-item {
	display: flex;
	padding: 15px 0px;

	.comment-left {
		margin-right: 12px;
	}
	.comment-right {
		// flex: 1;
		// text-align: left;
		.comment {
			// margin: 8px 0px;
			margin: 4px 0px 8px 0px;
		}
		.footer {
			display: flex;
			align-items: baseline;
			justify-content: space-between;
			line-height: 14px;
			.left-action {
				.action-reply {
					margin-left: 10px;
					cursor: pointer;
					font-weight: 500;
				}
			}
			.right-action {
				.like {
					margin-left: 5px;
				}
			}
		}
		.reply {
			display: flex;
			margin-top: 20px;
		}
		.more {
			display: flex;
			margin-top: 15px;
			// .more-item {
			// 	display: flex;
			// }
			.more-text {
				margin-right: 10px;
			}
			.more-icon {
				margin-right: 30px;
			}
		}
	}
}

.send-comment {
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex;
	.user-avatar {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		margin-right: 20px;
		background-color: #f2f3f5;
	}
	.comment-textarea {
		display: flex;
		flex: 1;
		min-height: 120px;
		border-radius: 4px;
		padding: 15px;
		color: #606266;
		background-color: #f2f3f5;
		box-sizing: border-box;
		flex-direction: column;
		justify-content: space-between;
		border: 1px solid #f2f3f5;
		&:hover {
			border: 1px solid #409eff;
		}
		.comment-action {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.action-gj {
				.gj {
					margin-right: 10px;
				}
			}
			.action-btn {
				padding: 6px 12px;
				color: #409eff;
				background: #ecf5ff;
				border: 1px solid #b3d8ff;
				border-radius: 4px;
				font-size: 14px;
			}
		}
	}
}
</style>