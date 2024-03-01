<template>
  <div class="sidebar">
    <SidebarUserInfo />
    <!-- 目录 -->
    <SidebarDirectory v-if="isDetails"/>
    <!-- 热门文章 -->
    <SidebarHotArticle />
    <!-- 最新评论 -->
    <SidebarHotComment />
  
    <!-- <el-card class="img-card"> -->
      <img
        src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6175104aec964d3f88670c283bd8b336~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
        alt=""
      />
    <!-- </el-card> -->
  </div>
</template>

<script setup lang="ts">
// import HotArticle from './HotArticle/index.vue'
// import HotComment from './HotComment/index.vue'
// import UserInfo from './UserInfo/index.vue'
// import Directory from './Directory'
let route = useRoute()
const isDetails = computed(()=>{
	if (route.path == '/news/details') {
	  return true
	}
	return false
})
</script>

<style scoped lang="scss">
.sidebar {
  width: 325px;
	// padding: 20px;
  display:flex;
  flex-direction: column;
	// background-color: pink;
div{
  margin-bottom: 15px;
}
  // .img-card {
  //   ::v-deep.el-card__body {
  //     padding: 0;
  //   }
  //   img {
  //     width: 100%;
  //   }
  // }
}
</style>