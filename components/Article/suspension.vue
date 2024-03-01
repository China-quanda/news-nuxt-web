<template>
  <div class='suspension-box'>
       <!-- 左侧固定区域 -->
      <div class="fixed">
        <div class="yuan" @click="clickDianZan">
					<div class="badge">235</div> 
					<!-- article.like_count -->
					<i class="iconfont icon-dianzan " :class="{ 'is-highlight': isDianZan }" ></i>
        </div>
        <div class="yuan" @click="clickPingLun">
						<div class="badge">5</div> 
						<!-- article.comment_count -->
            <i class="iconfont icon-pinglun" ></i>
        </div>
        <div class="yuan" @click="clickShouCang">
          <i class="iconfont icon-shoucang" :class="{ 'is-highlight': isShouCang }"></i>
        </div>
        <div class="yuan">
          <i class="iconfont icon-fenxiang"></i>
        </div>
        <div class="yuan" @click="showAccusation=true">
          <i class="iconfont icon-gengduo"></i>
        </div>
      </div>
		<!-- 举报文章组件 -->
    <ArticleReport v-if="showAccusation" :showAccusation="showAccusation" :articleId="articleId" @showAccusation="showAccusation = false"/>
      <!-- 评论抽屉组件 -->
      <ArticleDrawerComment v-if="showDrawerComment" :articleId="article.id" @close="showDrawerComment = false"  @refresh="refresh"/>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
	article: {
		type: Object,
		default: ()=>{}
	},
	articleId: {
		type: [Number],
		default: 0
	}
})
let isDianZan = ref<boolean>(true) // 是否对文章点过赞
let isShouCang = ref<boolean>(true) // 是否收藏过该文章
let showDrawerComment = ref<boolean>(false) // 是否显示评论抽屉组件
let showAccusation = ref<boolean>(false) // 是否显示举报对话框
const emits = defineEmits(['refresh']);

// 通知父组件刷新 重新获取文章数据
const refresh = ()=> {
    emits('refresh'); //给组件增加refresh 事件
  }
	// 根据文章id获取文章点赞信息
	const getArticleLikingsId =async(id:number)=> {
	  // try {
	  //   const res = await getArticleLikingsId(id)
	  //   if (res) {
	  //    isDianZan.value = true
	  //   }
	  // } catch (error) {
	  //   isDianZan.value = false
	  // }
	}
	// 是否收藏过该篇文章
	const isShouCangg =async(id:number)=> {
	  // const res = await getArticleCollectionsId(id)
	  // if (res) {
	  //   isShouCang.value = true
	  // }
	}
	// 点击收藏文章
	const clickShouCang =async()=> {
	  // if (isShouCang.value == false) {
		// 	console.log('已收藏该篇文章'); // success
	  //   const res = await addArticleCollections({ article_id: props.articleId })
	  //   if (res) {
	  //     isShouCang.value = true
	  //   }
	  // } else {
		// 	console.log('已取消收藏该篇文章'); // info
	  //   await deleteArticleCollections(props.articleId)
	  //  isShouCang.value  = false
	  // }
	}
	const clickPingLun =()=> {
	  showDrawerComment.value = !showDrawerComment.value
	}
	
	// 对文章点赞  // 取消对文章点赞
	const clickDianZan =async()=> {
	  // if (isDianZan.value == false) {
	  //   await addArticleLikings({ article_id: props.articleId })
	  //   isDianZan.value = true
	  //   // 调用父亲方法刷新文章数据
	  //   refresh()
	  // } else {
	  //   await deleteArticleLikings(props.articleId)
	  //   isDianZan.value = false
	  //   // 调用父亲方法刷新文章数据
	  //   refresh()
	  // }
	}
	// onMounted(()=>{
	// 	isShouCangg(props.articleId)
	// 	getArticleLikingsId(props.articleId)
	// })
</script>

<style scoped lang="scss">
.suspension-box{
		position: absolute;
	}
 // 固定左侧
    .fixed {
      position: fixed;
      margin-left: -160px;
      top: 200px;
      z-index: 2;

      .yuan {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
        width: 50px;
        height: 50px;
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 2px 6px 0 rgb(0 0 0 / 4%);
        cursor: pointer;
        .iconfont {
          font-size: 22px;
          color: #9ea0a0;
					&:hover {
						color: #686d6d;
					}
        }
				.is-highlight{
				  color: #409EFF !important;
					&:hover{
						color: #66B1FF !important;
					}
				}
      }
			.badge{
				position: absolute;
				top: 10px;
				right: 10px;
				padding: 3px;
				min-width: 10px;
				color: #fff;
				text-align: center;
				line-height: 10px;
				border-radius: 10px;
				font-size: 12px;
				-webkit-transform: translateY(-50%) translateX(100%);
				transform: translateY(-50%) translateX(100%);
				background-color: #c2c8d1;
			}
    }
</style>