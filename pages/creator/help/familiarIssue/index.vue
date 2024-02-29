<template>
	<div class="creator-page-help-familiarIssue">
		<div class="creator-header"> 常见问题 </div>
		<div class="creator-body">
			<div class="familiar-issue-box">
			<div class="familiar-issue-item">
				<div class="title">为什么会有安全审核</div>
				<div>1. 根据国家相关法律法规规定，保障平台内容安全：过滤涉黄、涉暴、涉毒、赌博等安全底线问题。</div>
				<div>2. 保障用户体验，有助于提升平台长期价值：打击低俗、辱骂、广告等低质内容。</div>
			</div>
			<div class="familiar-issue-item">
				<div class="title">什么样的内容需要审核</div>
				<div>按照相关法律法规要求，用户在平台发布和传播的内容均需要审核，包括但不限于：</div>
				<div>1. 资料：用户头像昵称、职位、个人介绍等......</div>
				<div>2. 所有写入内容：文章、沸点、图片、评论、视频......</div>
			</div>
			<div class="familiar-issue-item">
				<div class="title">有几种常见的审核状态</div>
				<div>1. 审核中：内容发布后将进入审核状态，有相关的标签提示你的内容正在审核中。</div>
				<div>2. 审核不通过（自见）：内容审核不通过，系统会有消息提醒，请参考消息中的社区规范，进行内容调整，内容修改并提交后，会再次进入审核。</div>
				<div>3. 审核通过：审核通过后的文章会发布成功并可能获得被推荐机会。</div>
				<div>4. 内容被删除：如果你发布的内容不符合相关法律法规要求，会直接删除，同时会有系统消息发送给你。</div>
				<div>申诉渠道：审核未通过的内容，如果作者自查后，仍无法感知到问题所在，请访问沸点圈子「反馈&建议」提交你的问题和文章链接，官方将在排查后给你留言反馈相关调整策略。</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({ title:'常见问题 - 创作中心'})
</script>

<style scoped lang="scss">
	.familiar-issue-box{
		font-size: 14px;
		.familiar-issue-item{
			padding-bottom: 10px;
			margin-bottom: 20px;
			line-height: 2;
			border-bottom: 1px solid #EBEEF5;
			& .title{
				padding: 8px 0px;
				// font-weight: 600px;
				font-weight: 500;
				// background-color: aqua;
			}
		}
	}
</style>
