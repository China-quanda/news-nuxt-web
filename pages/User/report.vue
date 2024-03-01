<template>
  <div class="report-box">
    <div class="report-item">
      <table>
        <tbody>
          <tr>
            <th width="120px">文章标题</th>
            <th width="50px">举报类型</th>
            <th width="120px">举报描述</th>
            <th width="70px">处理状态</th>
            <th width="90px">举报时间</th>
            <th width="30px">操作</th>
          </tr>
          <tr v-for="item in list">
            <td class="title">{{ item.title }}</td>
            <td class="type">{{ formatDict(item.type, reportTypeList) }}</td>
            <td class="remark">{{ item.remark }}</td>
            <td class="staatus">{{ formatDict(item.status, reportStatusList) }}</td>
            <td class="time">{{ item.createdTime }}</td>
            <td class="operate"><i class="iconfont icon-dianzan1" @click="clickDelete(item.id)"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { deleteAccusationArticle } from '@/api/article'
let list = reactive([
	{
		id: 1,
		title: 'vue+vite企业级项目',
		type: 3,
		remark: '标题夸张的一批',
		status: 1,
		createdTime: '2023-07-28'
	},
	{
		id: 2,
		title: '陈冠希与张柏芝',
		type: 2,
		remark: '太黄了',
		status: 3,
		createdTime: '2023-07-28'
	},
	{
		id:3,
		title:'vue+vite企业级项目',
		type:4,
		remark:'标题夸张的一批',
		status:0,
		createdTime:'2023-07-28'
	},
	{
		id:4,
		title:'vue+vite企业级项目',
		type:5,
		remark:'标题夸张的一批',
		status:2,
		createdTime:'2023-07-28'
	}
]);
let reportTypeList = reactive([
	{ dictLabel: '其他问题', dictValue: 0 },
	{ dictLabel: '标题夸张', dictValue: 1 },
	{ dictLabel: '低俗色情', dictValue: 2 },
	{ dictLabel: '错别字多', dictValue: 3 },
	{ dictLabel: '旧闻重复', dictValue: 4 },
	{ dictLabel: '涉嫌广告', dictValue: 5 },
	{ dictLabel: '内容抄袭', dictValue: 6 },
	{ dictLabel: '政治相关', dictValue: 7 },
	{ dictLabel: '内容不实', dictValue: 8 },
	{ dictLabel: '涉嫌违法犯罪', dictValue: 9 },
	{ dictLabel: '侵犯名誉/隐私/著作/肖像权等', dictValue: 10 }
]);
let reportStatusList = reactive([
	{ dictLabel: '审核失败', dictValue: 0 },
	{ dictLabel: '审核中', dictValue: 1 },
	{ dictLabel: '审核完成,内容未违规', dictValue: 2 },
	{ dictLabel: '审核完成,内容违规已删除该文章', dictValue: 3 }
]);

// 数据字典解析
const formatDict = (value:number, dictData:any) => {
	if (dictData.length > 0) {
		let dicts = dictData.filter((dict:any) => dict.dictValue == value);
		if (dicts && dicts.length > 0) {
			return dicts[0].dictLabel;
		}
	}
	return '';
};

// 点击删除按钮
const clickDelete = (id:number) => {
	// this.$confirm('你确定要删除选中项吗', {
	// 	confirmButtonText: '确定',
	// 	cancelButtonText: '取消',
	// 	type: 'warning'
	// })
	// 	.then(async () => {
	// 		await deleteAccusationArticle({ ids: [id] });
	// 		this.$message.success('删除成功');
	// 	})
	// 	.catch(() => {
	// 		this.$message.info('已取消删除');
	// 	});
};
</script>
<style lang="scss" scoped>
// .el-icon-delete:hover {
// 	cursor: pointer;
// }
.report-item {
	table {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0.5px;
		color: #909399;
	}

	tr {
		border-bottom: 0.5px solid #dddddd;
		&:hover {
			cursor: pointer;
			background-color: #fcfafa;
		}
	}
	th {
		padding: 10px 0px;
		text-align: center;
		font-size: 14px;
	}
	td {
		padding: 10px;
		font-size: 13px;
	}
	// .title {
	// 	text-align: center;
	// }
	.remark {
		text-align: center;
	}
	.type,
	.staatus,
	.time,
	.operate {
		text-align: center;
	}
	.operate{
		color: #000;
	}
}
</style>
