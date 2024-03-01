<template>
  <div class="avatar">
    <el-popover popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px;">
      <template #reference>
        <el-avatar src="https://avatars.githubusercontent.com/u/72015883?v=4" />
      </template>
      <template #default>
        <div class="avatar-dropdown">
          <div class="item flex py-8px flex-items-center flex-justify-center" v-for="item in list" :key="item.name">
            <i :class="['iconfont',item.icon,'mr-5px']"/>
            <div>{{item.name}}</div>
          </div>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
let list = reactive([
  {name:'写文章',icon:'icon-bianjishuru',url:''},
  {name:'我的主页',icon:'icon-geren',url:''},
  {name:'我赞过的',icon:'icon-dianzan',url:''},
  {name:'我的收藏',icon:'icon-shoucang',url:''},
  {name:'浏览记录',icon:'icon-liulan',url:''},
  {name:'设 置',icon:'icon-shezhi',url:''},
  {name:'退 出',icon:'icon-tuichu',url:''},
])
</script>

<style scoped lang="scss">
.avatar-dropdown{
  display:flex;
  flex-direction: column;
	color: #606266;
	cursor: pointer;
  .item{
    &:hover{
      color: #81affc;
      .iconfont{
        color: #81affc ;
      }
    }
  }
}
</style>