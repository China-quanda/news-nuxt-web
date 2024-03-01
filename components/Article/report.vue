<template>
  <div class="report-box" v-if="showAccusation">
		<div class="report-header">
			<div class="header-title">举报反馈</div>
			<div class="header-close" @click="handleClose">
				<my-icon icon="icon-31pinglun"></my-icon>
			</div>
		</div>
		<div class="report-body">
			<div class="form">
				<div class="form-item">
					<div class="label">举报类型（必选）</div>
					<div style="display: inline-block; padding: 10px 20px 10px 0px;" v-for="(item,index) in options" :key="index">
						<input type="radio"/>
						<span>{{item.name}}</span>
					</div>
				</div>
				<div class="form-item">
					<div class="label">举报详情（选填）</div>
					<textarea rows="10" cols="30" autofocus placeholder="请详细描述举报原因，我们将第一时间核实处理"></textarea>
				</div>
			</div>
		</div>
		<div class="report-footer">
			<div class="btn" @click="clickOk">确认举报</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	articleId: {
		type:Number,
		default: 0
	},
	showAccusation: {
		type:Boolean,
		default: false
	}
})
let form = reactive({
	type: '',
	remark: ''
})
let options = reactive([
	{
	  label: 0,
	  name: '其他问题'
	},
	{
	  label: 1,
	  name: '标题夸张'
	},
	{
	  label: 2,
	  name: '低俗色情'
	},
	{
	  label: 3,
	  name: '错别字多'
	},
	{
	  label: 4,
	  name: '旧闻重复'
	},
	{
	  label: 5,
	  name: '涉嫌广告'
	},
	{
	  label: 6,
	  name: '内容抄袭'
	},
	{
	  label: 7,
	  name: '政治相关'
	},
	{
	  label: 8,
	  name: '内容不实'
	},
	{
	  label: 9,
	  name: '涉嫌违法犯罪'
	},
	{
	  label: 10,
	  name: '侵犯名誉/隐私/著作/肖像权等'
	}
	// '举报类型： 0-其他问题，1-标题夸张，2-低俗色情，3-错别字多，4-旧闻重复，5-广告软文，6-内容不实，7-涉嫌违法犯罪，8-侵权'
])
let rules = reactive({
	type: [  { required: true, message: '举报类型（必选）', trigger: 'change' } ]
})
const clickOk = async()=>{
	const res = await addReport({ ...form, article_id: articleId.value })
	if (res) {
		console.log('您已举报该篇文章，工作人员在24小时内审核出结果');
	  // this.$message.success('您已举报该篇文章，工作人员在24小时内审核出结果')
	  // this.$emit('showAccusation')
	}
}
// 点击关闭对话框
const handleClose = (done) =>{
      // done();
      // this.$emit('showAccusation')
      // this.$refs.form.resetFields()
    }
</script>

<style lang="scss" scoped>
.report-box{
	// position: relative;
	position: fixed;
	// position: absolute;
	min-height: 600px;
	width: 500px;
	z-index: 1;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	// padding: 0px 12px 12px 12px;
	background-color: #fff;
	box-shadow: 0 2px 8px 0px rgba(122, 192, 241, 0.3);
	.report-header{
		position: relative;
		// background-color: aqua;
		padding: 13px 0px;
		.header-title{
			text-align: center;
		}
		.header-close{
			position: absolute;
			right: 20px;
			top: 17px;
		}
	}
	.report-body{
		margin: 15px;
		.form-item{
			margin-bottom: 20px;
			.label{
				margin: 15px 0px;
				font-size: 14px;
				    color: #606266;
			}
			textarea {
				width: 100%;
			    writing-mode: horizontal-tb !important;
			    // font-style: ;
			    // font-variant-ligatures: ;
			    // font-variant-caps: ;
			    // font-variant-numeric: ;
			    // font-variant-east-asian: ;
			    // font-variant-alternates: ;
			    // font-weight: ;
			    // font-stretch: ;
			    // font-size: ;
			    font-family: monospace;
			    // font-optical-sizing: ;
			    // font-kerning: ;
			    // font-feature-settings: ;
			    // font-variation-settings: ;
			    text-rendering: auto;
			    color: fieldtext;
			    letter-spacing: normal;
			    word-spacing: normal;
			    line-height: normal;
			    text-transform: none;
			    text-indent: 0px;
			    text-shadow: none;
			    display: inline-block;
			    text-align: start;
			    appearance: auto;
			    -webkit-rtl-ordering: logical;
			    resize: auto;
			    cursor: text;
			    white-space-collapse: preserve;
			    text-wrap: wrap;
			    overflow-wrap: break-word;
			    background-color: field;
			    column-count: initial !important;
			    margin: 0em;
			    border-width: 1px !important;
			    border-style: solid;
			    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
			    border-image: initial;
			    padding: 0px;
			}
		}
	}
	.report-footer{
		position: absolute;
		left: 10px;
		right: 10px;
		bottom: 10px;
		.btn{
			padding: 10px;
			text-align: center;
			color: #fff;
			
			border-radius: 3px;
			background-color: #409EFF;
		}
	}
}
</style>