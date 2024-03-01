<template>
  <div class="wrap">
		<div class="container">
			<div class="left-box-card">
				<!-- 我的 -->
				<div class="user">
					<div class="user-info">
						<div class="user-avatar"><img src="~/assets/images/vue.svg" /></div>
						<div class="center">
							<div class="user-name">你的Maya</div>
							<div class="user-like">
								<div class="row">
									<span class="number">312</span>
									<span class="name">获赞</span>
								</div>
								<div class="row">
									<span class="number">310</span>
									<span class="name">粉丝</span>
								</div>
								<div class="row">
									<span class="number">219</span>
									<span class="name">关注</span>
								</div>
							</div>
              <!-- introduce -->
							<div class="user-introduce">简介：{{ userInfo || 'TA很懒，还没有添加简介' }}</div>
						</div>
					</div>
					<div class="btn" >
            <el-button type="primary" round @click="toSettingProfile"> <Icon name="ep:edit-pen" class="mr-1"/>  编辑资料 </el-button>
					</div>
				</div>
				
				<!-- tabs -->
				<div class="tabs-box">
					<div class="tabs-header">
						<div 
						v-for="tab in tabsList" :key="tab.label"
						:class="['tab-name',activeTabs==tab.name ? 'activeTabs' : '']" 
						@click="tapTabs(tab)"
						>
							{{tab.label}}
						</div>
					</div>
					<div class="tabs-body">
            <NuxtPage class="tab-pane"/>
						<div class="tab-pane" v-if="activeTabs=='history'">
              <!-- <articleItem :data="2"/> -->
            </div>
						<div class="tab-pane" v-if="activeTabs=='collection'">
              <!-- <articleItem :data="2"/> -->
            </div>
						<div class="tab-pane" v-if="activeTabs=='comment'"> 
              <!-- <userComment/>  -->
            </div>
						<div class="tab-pane" v-if="activeTabs=='like'">
              <!-- <articleItem :data="2"/> -->
            </div>
						<div class="tab-pane" v-if="activeTabs=='follow'">
              <!-- <follow :data="2"/> -->
            </div>
						<div class="tab-pane" v-if="activeTabs=='fans'">
              <!-- <fans :data="2"/> -->
            </div>
						<div class="tab-pane" v-if="activeTabs=='article'">
              <!-- <articleItem :data="2"/> -->
            </div>
						<div class="tab-pane" v-if="activeTabs=='report'">
              <!-- <userReport :data="2"/> -->
            </div>
					</div>
				</div>

			</div>
			<div class="right-box-card">
        <sidebar></sidebar>
      </div>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const toSettingProfile = ()=>{
  router.push('/setting/profile')
}
// import userComment from './components/comment.vue'
// import fans from './components/fans.vue'
// import follow from './components/follow.vue'
// import userReport from './components/report.vue'
// import sidebar from '@/components/sidebar/sidebar.vue';
// import articleItem from '@/views/article/article-item.vue';

// import { getUserFollowers, getUserFollowings, getUserHomePage } from '@/api/user'
// import { getUserComment } from '@/api/comment'
// import { getUserArticleViewHistory, getUserArticleCollections, getUserArticleLikings, getUserArticle, getUserReport } from '@/api/article'


let userId = ref(route.params.userId);
let activeTabs = ref(route.params.tabs);
let history = ref();
let collection = ref();
let like = ref();
let followers = ref();
let followings = ref();
let comment = ref();
let article = ref();
let report = ref();
let userInfo = ref();
let tabsList = reactive([
	{label:'历史',name:'history',icon:'',badge:0,path:'/user/history'},
	{label:'收藏',name:'collection',icon:'',badge:0,path:'/user/collection'},
	{label:'评论',name:'comment',icon:'',badge:0,path:'/user/comment'},
	{label:'点赞',name:'like',icon:'',badge:0,path:'/user/like'},
	{label:'关注',name:'follow',icon:'',badge:0,path:'/user/follow'},
	{label:'粉丝',name:'fans',icon:'',badge:0,path:'/user/fans'},
	{label:'文章',name:'article',icon:'',badge:0,path:'/user/article'},
	{label:'举报',name:'report',icon:'',badge:0,path:'/user/report'}
]);
// onMounted(() => {
// 	getUserHomePage(userId.value);
// 	handleTabs(activeTabs.value, userId.value);
// });
// 点击tabs
const tapTabs = (row:any) =>{
	activeTabs.value = row.name
  router.push(row.path)
}
const handleTabs = (activeTabs: string, userId:  number) => {
	if (activeTabs == 'history') {
		getHistory(userId);
	} else if (activeTabs == 'collection') {
		getCollection(userId);
	} else if (activeTabs == 'comment') {
		getUserComment(userId);
	} else if (activeTabs == 'like') {
		getLikings(userId);
	} else if (activeTabs == 'follow') {
		getUserFollowings(userId);
	} else if (activeTabs == 'fans') {
		getFollowers(userId);
	} else if (activeTabs == 'article') {
		getUserArticle(userId);
	} else if (activeTabs == 'report') {
		getUserReport(userId);
	}
};
// 获取用户信息
const getUserHomePage = async (userId:number) => {
	const user = await getUserHomePage(userId);
	userInfo.value = user;
};
// 获取用户举报文章列表
const getUserReport = async (userId:number) => {
	report.value = await getUserReport(userId);
};
// 获取用户文章列表
const getUserArticle = async (userId:number) => {
	article.value = await getUserArticle(userId);
};
// 获取用户评论列表
const getUserComment = async (userId:number) => {
	comment.value = await getUserComment(userId);
};
// 获取用户关注列表
const getUserFollowings = async (userId:number) => {
	followings.value = await getUserFollowings(userId);
};
// 获取用户粉丝列表
const getFollowers = async (userId:number) => {
	// followers = await getUserFollowers(userId);
};
// 获取用户浏览文章历史记录
const getHistory = async (userId:number) => {
	// history.value = await getUserArticleViewHistory(userId);
};
// 获取用户收藏文章列表
const getCollection = async (userId:number) => {
	// collection.value = await getUserArticleCollections(userId);
};
// 获取用户点赞文章列表
const getLikings = async (userId:number) => {
	// like.value = await getUserArticleLikings(userId);
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
	// min-height: calc(100vh - $nav-height);
	min-height: 100vh;
}
// 左边盒子
.left-box-card {
	display: flex;
	flex-direction: column;
	margin-right: 15px;
	width: 100%;
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0 2px 8px 0px rgba(122 192 241 / 30%);
}

// 用户
.user {
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 30px 15px 15px 15px;
	color: #303133;
	& .user-info {
		display: flex;
		align-items: center;
		flex: 1;
		margin-right: 15px;
		.user-avatar {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 118px;
			height: 118px;
			margin-right: 40px;
			border: 4px solid #eee;
			border-radius: 50%;
			background-color: antiquewhite;
		}
		.center {
			.user-name {
				font-size: 24px;
				font-weight: 500;
			}
			.user-like {
				display: flex;
				margin: 15px 0px;
				.row {
					cursor: pointer;
					margin-right: 20px;
					.number {
						color: #303133;
						font-weight: 500;
						font-size: 24px;
					}
					.name {
						font-weight: 400;
						margin-left: 3px;
						font-size: 15px;
					}
				}
			}
			.user-introduce {
				font-size: 16px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden; //隐藏文字
			}
		}
	}

	
}

// tabs
.tabs-box{
	margin:0px 15px;
	.tabs-header{
		display: flex;
		align-items: center;
		border-bottom: 2px solid #ccc;
		.activeTabs{
			color: #409EFF;
			border-bottom: 2px solid #409EFF !important;
		}
		.tab-name{
			padding: 10px 2px;
			margin-bottom: -2px;
			margin-right: 40px;
			font-weight: 500;
			font-size: 14px;
			border-bottom: 2px solid #ccc;
      color: var(--main-color);
			&:hover{
				cursor: pointer;
				color: #409EFF;
			}
		}
	}
	.tabs-body{
		margin: 15px 0px;
	}
}
</style>