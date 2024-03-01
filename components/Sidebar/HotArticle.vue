<template>
  <div class="wrap">
		<div class="container w">
			<div class="card">
				<div class="header">
					<div>
						<i class="iconfont icon-huo"></i>
						热门文章
					</div>
					<div @click="huanyihuan(query.pageNum)" style="cursor:pointer">
						<i class="iconfont icon-huanyihuan"></i>
						换一换
					</div>
				</div>
				<div class="item" v-for="(item, index) in hotArticle" :key="index" @click="$router.push({ name: 'Details', params: { article_id: `${item.id}` } })">
					<span>{{item.title}}</span>
					<div class="item-title">{{item.title}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { getHotArticle } from '@/api/article'
import { ref, reactive, onMounted } from 'vue';
let hotArticle = reactive([
  {
    id:1,
    title:"英雄一笑为红颜，红颜一笑为了钱"
  },
  {
    id:1,
    title:"英雄一笑为红颜，红颜一笑为了钱"
  },
  {
    id:1,
    title:"英雄一笑为红颜，红颜一笑为了钱"
  }
]);
let query = reactive({
	pageNum: 1,
	pageSize: 6
});
onMounted(() => {
	// getHotArticle()
});
const getHotArticle = async () => {
	// const { list, pageNum, pageSize } = await getHotArticle(query);
	// query.pageNum = pageNum;
	// query.pageSize = pageSize;
	// hotArticle = list;
};
const huanyihuan = (val:any) => {
	query.pageNum = ++query.pageNum;
	getHotArticle();
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
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	border-bottom: 0.5px solid #ccc;
	padding: 15px;
	.iconfont {
		color: rgb(234, 25, 25);
		margin-right: 3px;
	}
	.icon-huo {
		font-size: 18px;
	}
}
.item {
	padding: 2px 15px;
	.item-title:hover {
		color: #6292f0;
		cursor: pointer;
	}
	color: #606266;
	font-size: 15px;
	font-weight: 500;
	white-space: nowrap;
	line-height: 2.4;
	text-overflow: ellipsis;
	overflow: hidden; //隐藏文字
}
</style>