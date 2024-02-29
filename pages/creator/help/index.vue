<template>
  <div class='wrap' v-if="false">
    <div class='container w'>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="创作等级" name="first"></el-tab-pane>
        <el-tab-pane label="内容曝光" name="second"></el-tab-pane>
        <el-tab-pane label="内容审核" name="nnsh">
          <el-collapse v-model="activeCollapse" accordion>
            <el-collapse-item title="为什么会有安全审核" name="1">
              <div>1. 根据国家相关法律法规规定，保障平台内容安全：过滤涉黄、涉暴、涉毒、赌博等安全底线问题。</div>
              <div>2. 保障用户体验，有助于提升平台长期价值：打击低俗、辱骂、广告等低质内容。</div>
            </el-collapse-item>
            <el-collapse-item title="什么样的内容需要审核" name="2">
              <div>按照相关法律法规要求，用户在平台发布和传播的内容均需要审核，包括但不限于：</div>
              <div>1. 资料：用户头像昵称、职位、个人介绍等......</div>
              <div>2. 所有写入内容：文章、沸点、图片、评论、视频......</div>
            </el-collapse-item>
            <el-collapse-item title="有几种常见的审核状态" name="3">
              <div>1. 审核中：内容发布后将进入审核状态，有相关的标签提示你的内容正在审核中。</div>
              <div>2. 审核不通过（自见）：内容审核不通过，系统会有消息提醒，请参考消息中的社区规范，进行内容调整，内容修改并提交后，会再次进入审核。</div>
              <div>3. 审核通过：审核通过后的文章会发布成功并可能获得被推荐机会。</div>
              <div>4. 内容被删除：如果你发布的内容不符合相关法律法规要求，会直接删除，同时会有系统消息发送给你。</div>
              <div>申诉渠道：审核未通过的内容，如果作者自查后，仍无法感知到问题所在，请访问沸点圈子「反馈&建议」提交你的问题和文章链接，官方将在排查后给你留言反馈相关调整策略。</div>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
      </el-tabs>
    </div>
   </div>
   <div class="creator-page-help">
		<div class="creator-header"> 
			<div class="slot-title">
				<div v-for="item in tabs" :key="item.id" :class="{'active':activeTab === item.id}" @click="clickTabs(item)">{{ item.label }}</div>
			</div>
		</div>
    <div class="creator-body">
        <el-collapse v-model="activeCollapse" accordion>
            <el-collapse-item v-for="t in currentCollapse" :title="t.title" :name="t.name">
              <div v-html="t.content"></div>
            </el-collapse-item>
          </el-collapse>
      </div>
	</div>
</template>

<script setup lang="ts">
useHead({ title:'帮助中心 - 创作中心'})
const currentCollapse = ref<ICollapse[]>()
const activeCollapse = ref(1)
const activeTab = ref(1)

interface ITab {
	id:number
	name:string
  label:string
  collapse?:ICollapse[]
}
interface ICollapse {
    name:number
    title:string
    content:string
  }
const tabs = ref<ITab[]>([
	{id:1,label:'创作等级',name:'first',
  collapse:[
  { 
    name:1,
    title:'为什么会创作等级',
    content:`<div>1. 根据国家相关法律法规规定，保障平台内容安全：过滤涉黄、涉暴、涉毒、赌博等安全底线问题。</div>
              <div>2. 保障用户体验，有助于提升平台长期价值：打击低俗、辱骂、广告等低质内容。</div>`,
},
{ 
    name:2,
    title:'什么样的创作等级',
    content:`<div>按照相关法律法规要求，用户在平台发布和传播的内容均需要审核，包括但不限于：</div>
              <div>1. 资料：用户头像昵称、职位、个人介绍等......</div>
              <div>2. 所有写入内容：文章、沸点、图片、评论、视频......</div>`,
},
{ 
    name:3,
    title:'有几种常见创作等级',
    content:`<div>1. 审核中：内容发布后将进入审核状态，有相关的标签提示你的内容正在审核中。</div>
              <div>2. 审核不通过（自见）：内容审核不通过，系统会有消息提醒，请参考消息中的社区规范，进行内容调整，内容修改并提交后，会再次进入审核。</div>
              <div>3. 审核通过：审核通过后的文章会发布成功并可能获得被推荐机会。</div>
              <div>4. 内容被删除：如果你发布的内容不符合相关法律法规要求，会直接删除，同时会有系统消息发送给你。</div>
              <div>申诉渠道：审核未通过的内容，如果作者自查后，仍无法感知到问题所在，请访问沸点圈子「反馈&建议」提交你的问题和文章链接，官方将在排查后给你留言反馈相关调整策略。</div>`,
}]},
	{id:2,label:'内容曝光',name:'second',
  collapse:[
  { 
    name:1,
    title:'为什么会有内容曝光',
    content:`<div>1. 根据国家相关法律法规规定，保障平台内容安全：过滤涉黄、涉暴、涉毒、赌博等安全底线问题。</div>
              <div>2. 保障用户体验，有助于提升平台长期价值：打击低俗、辱骂、广告等低质内容。</div>`,
},
{ 
    name:2,
    title:'什么样的内容曝光',
    content:`<div>按照相关法律法规要求，用户在平台发布和传播的内容均需要审核，包括但不限于：</div>
              <div>1. 资料：用户头像昵称、职位、个人介绍等......</div>
              <div>2. 所有写入内容：文章、沸点、图片、评论、视频......</div>`,
},
{ 
    name:3,
    title:'有几种常见的内容曝光',
    content:`<div>1. 审核中：内容发布后将进入审核状态，有相关的标签提示你的内容正在审核中。</div>
              <div>2. 审核不通过（自见）：内容审核不通过，系统会有消息提醒，请参考消息中的社区规范，进行内容调整，内容修改并提交后，会再次进入审核。</div>
              <div>3. 审核通过：审核通过后的文章会发布成功并可能获得被推荐机会。</div>
              <div>4. 内容被删除：如果你发布的内容不符合相关法律法规要求，会直接删除，同时会有系统消息发送给你。</div>
              <div>申诉渠道：审核未通过的内容，如果作者自查后，仍无法感知到问题所在，请访问沸点圈子「反馈&建议」提交你的问题和文章链接，官方将在排查后给你留言反馈相关调整策略。</div>`,
}]},
	{id:3,label:'内容审核',name:'nnsh',
  collapse:[
  { 
    name:1,
    title:'为什么会有安全审核',
    content:`<div>1. 根据国家相关法律法规规定，保障平台内容安全：过滤涉黄、涉暴、涉毒、赌博等安全底线问题。</div>
              <div>2. 保障用户体验，有助于提升平台长期价值：打击低俗、辱骂、广告等低质内容。</div>`,
},
{ 
    name:2,
    title:'什么样的内容需要审核',
    content:`<div>按照相关法律法规要求，用户在平台发布和传播的内容均需要审核，包括但不限于：</div>
              <div>1. 资料：用户头像昵称、职位、个人介绍等......</div>
              <div>2. 所有写入内容：文章、沸点、图片、评论、视频......</div>`,
},
{ 
    name:3,
    title:'有几种常见的审核状态',
    content:`<div>1. 审核中：内容发布后将进入审核状态，有相关的标签提示你的内容正在审核中。</div>
              <div>2. 审核不通过（自见）：内容审核不通过，系统会有消息提醒，请参考消息中的社区规范，进行内容调整，内容修改并提交后，会再次进入审核。</div>
              <div>3. 审核通过：审核通过后的文章会发布成功并可能获得被推荐机会。</div>
              <div>4. 内容被删除：如果你发布的内容不符合相关法律法规要求，会直接删除，同时会有系统消息发送给你。</div>
              <div>申诉渠道：审核未通过的内容，如果作者自查后，仍无法感知到问题所在，请访问沸点圈子「反馈&建议」提交你的问题和文章链接，官方将在排查后给你留言反馈相关调整策略。</div>`,
}]},
])

const clickTabs = (row:ITab)=>{
	console.log(row.id)
	activeTab.value = row.id
  currentCollapse.value = row.collapse
  activeCollapse.value = 1
}
</script>
<style lang="scss" scoped>
.container{
 
  background-color: #fff;
  width: 100%;
  height: 100vh;
}
.el-collapse {
   padding: 0 15px;
}
</style>