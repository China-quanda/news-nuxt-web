<template>
  <div class='wrap'>
    <div class='container w'>
      <div class="card">
        <div class="header">
          <div><i class="iconfont icon-pinglun"></i>最新评论</div>
        </div>
        <div class="item" v-for="(item,index) in newComment" :key="index" >
          <div class="avatar-name" @click="$router.push({name: 'User', params: { user_id:`${item.user_id}`}})">
						<img src="~/assets/images/vue.svg" alt="" />
            <!-- <el-avatar :size="30" :src="item.comment_user.avatar"></el-avatar> -->
            <!-- <span>{{item.comment_user.nickname}}</span> -->
						<span>你的Maya</span>
          </div>
           <div class="comment">
           <span>{{item.parentId==0 ? "评论" : "回复"}}：</span>
           <!-- @click="$router.push(`/news/details?id=${item.article_id}#comment`)" -->
            <!-- <span @click="$router.push({name: 'Details', params: { article_id:`${item.article_id}`}})" >{{item.content}}</span> -->
						<span>1234</span>
           </div>
        </div>
      </div>
    </div>
   </div>
</template>

<script setup lang="ts">
// import { getCommentList } from '@/api/comment'
let newComment = reactive([
  {
    id:1,
    parentId:0,
    user_id:1,
  }
]);
let query = reactive({
	pageNum: 1,
	pageSize: 6
});
// onMounted(() => {
// 	getCommentList()
// });
const getCommentList = async () => {
	// const { list, pageNum, pageSize } = await getCommentList(query);
	// query.pageNum = pageNum;
	// query.pageSize = pageSize;
	// newComment = list;
};
</script>

<style scoped lang="scss">
.card {
	box-shadow: 0 2px 8px 0px rgba(122, 192, 241, 0.3);
	background-color: #fff;
	border-radius: 3px;
	padding: 0px;
}
.header {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	border-bottom: 0.5px solid #ccc;
	padding: 15px;
  .iconfont{
    color: rgb(76, 141, 238);
    margin-right: 3px;
  }
  .icon-huo{
    font-size: 18px;
  }
}
.avatar-name{
  display: flex;
  align-items: center;
  margin-right: 8px;
  .el-avatar{
    margin:0px;
    margin-right: 5px;
  }
  span:hover{
    color: #6292f0;
    cursor: pointer;
  }
}
.comment{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  span:nth-child(2):hover{
    color: #6292f0;
    cursor: pointer;
  }
}

  .item:first-child {
     margin-top: 2px;
  }
  .item:last-child {
     margin-bottom: 2px;
  }
.item{
	padding: 2px 15px;
    display: flex;
    align-items: center;
  color: #606266;
  font-size: 15px;
  font-weight: 500;
  margin:20px 0;

}
</style>