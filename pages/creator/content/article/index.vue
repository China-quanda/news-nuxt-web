	<template>
	<div class="creator-page-article">
		<div class="creator-header"> 
			<div class="slot-title">
				<div v-for="item in tabs" :key="item.id" :class="{'active':activeTab === item.id}" @click="clickTabs(item)">{{ item.name }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const activeTab = ref(1)
interface ITab {
	id:number
	name:string
}
const tabs = ref<ITab[]>([
	{id:1,name:'全部'},
	{id:2,name:'已发布'},
	{id:3,name:'审核中'},
	{id:4,name:'未通过'},
])
const clickTabs = (row:ITab)=>{
	console.log(row.id)
	activeTab.value = row.id
}
</script>

<style scoped lang="scss">
.creator{}
</style>
