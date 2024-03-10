<template>
  <div v-if="show">
    <client-only>
       <el-dialog
        v-model="show"
        title="选择收藏集"
        width="520"
        center
        :close-on-click-modal="false"
        @open="handleOpen"
        @close="handleClose"
      >
      <el-skeleton v-if="list.length === 0"  class="pr-15px" :rows="4" animated />
      <div v-else class="list">
        <div 
        :class="[
          index+1 !== list.length ? 'pb-12px b-b-1px b-b-solid b-color-#e4e6eb' : '',
          'item flex flex-justify-between flex-items-center pt-12px cursor-pointer mr-15px'
        ]" 
        v-for="(item,index) in list" :key="item.id"
        >
        <div class="item-left w-full" @click="handleChecked(item,index)">
          <div class="text-4 font-500 color-#252933">{{item.name}}
          {{ index }} {{list.length}}
          </div>
          <div class="mt-2">{{item.total}} 篇文章</div>
        </div>
        <div class="item-right mr--8px">
          <el-checkbox class="flex flex-items-center 
          flex-justify-center p-1! rounded-full h-25px! w-25px! hover:bg-#f5f5f5"  v-model="item.checked"/>
        </div>
      </div>
      </div>
        <template #footer>
          <div class="dialog-footer flex flex-justify-between mt-2">
            <el-button @click="showCreationDialog = true">
              <Icon name="ep:plus" class="mr-1"/>
              新建收藏集
            </el-button>
            <el-button class="pl-8! pr-8!" type="primary" @click="handleConfirm">
              确认
            </el-button>
          </div>
        </template>
      </el-dialog>
      


      <el-dialog
        v-model="showCreationDialog"
        title="新建收藏集"
        width="520"
        center
        :close-on-click-modal="false"
        @open="handleOpenCreationDialog"
        @close="handleCloseCreationDialog"
      >
        <el-form class="creation-form mr-15px mt-8" :model="creationForm" >
          <el-form-item label="名称：">
            <el-input v-model="creationForm.name" clearable placeholder="请输入收藏集名称"/>
          </el-form-item>
          <el-form-item label="描述：">
            <el-input v-model="creationForm.desc" type="textarea" :autosize="{minRows:6,maxRows:8}" maxlength="100" show-word-limit placeholder="请输入收藏描述（限100字，选填）"/>
          </el-form-item>
          <div class="flex flex-col mt-5">
            <div class="flex flex-items-center">
              <input class="cursor-pointer" type="radio" id="contactChoice1" name="contact" value="1" v-model="creationForm.isPublic" />
              <label class="cursor-pointer flex flex-items-center" for="contactChoice1">
                <span class="text-#606266 mr-3">公开</span>
                <span class="desc text-#c2c8d1 text-13px">当其他人关注此收藏集后不可再更改为隐私</span>
              </label>
            </div>
            <div class="flex mt-3 flex-items-center">
              <input class="cursor-pointer" type="radio" id="contactChoice3" name="contact" value="3" v-model="creationForm.isPublic"/>
              <label class="cursor-pointer flex flex-items-center" for="contactChoice3">
                <span class="text-#606266 mr-3">隐藏</span>
                <span class="desc text-#c2c8d1 text-13px">仅自己可见此收藏集</span>
              </label>
            </div>
          </div>
        </el-form>
        <template #footer>
          <div class="dialog-footer flex flex-justify-end mt-2">
            <el-button class="pl-8! pr-8!" type="primary" plain  @click="showCreationDialog = false">
              取消
            </el-button>
            <el-button class="pl-8! pr-8!" type="primary" :disabled="!creationForm.name" @click="handleConfirm">
              确认
            </el-button>
          </div>
        </template>
      </el-dialog>

    </client-only>
  </div>
</template>

<script setup lang="ts">
const showCreationDialog = ref(false)
const handleOpenCreationDialog = ()=>{
  console.log('handleOpenCreationDialog');
}
const handleCloseCreationDialog = ()=>{
  console.log('handleCloseCreationDialog');
}
const handleCreationDialogConfirm = () =>{
  showCreationDialog.value = false
}
const creationForm = reactive({
  name:'',
  desc:'',
  isPublic:1
})


const props = defineProps({
	articleId: {
		type: [Number],
		default: 0
	}
})
onMounted(() => {
  console.log('onMounted');
  
  setTimeout(() => {
    list.value = [
      {
        id:1,
        name:'css',
        checked:false,
        total:20
      },
      {
        id:2,
        name:'js',
        checked:false,
        total:100
      },
      {
        id:3,
        name:'java',
        checked:false,
        total:88
      },
      {
        id:4,
        name:'go',
        checked:false,
        total:96
      },
      {
        id:5,
        name:'node',
        checked:false,
        total:97
      },
      {
        id:6,
        name:'ios',
        checked:false,
        total:13
      }
    ]
  }, 1500);
})
const show = defineModel({ default: false ,required: true })
const list = ref([])
const handleOpen = ()=>{
  console.log('handleOpen');
}
const handleClose = ()=>{
  show.value = false
  console.log('handleClose',show.value);
}
const handleChecked = (row,index)=>{
  list.value[index].checked = !list.value[index].checked
  console.log(row,index);
}
const handleConfirm = () =>{
  let checkedList = list.value.filter(item=>item.checked) || []
  if(!checkedList.length){
    ElMessage({
      message: '请选择一个收藏集！',
      type: 'warning',
    })
    return 
  }
   
  console.log('checkedList',checkedList);
  setTimeout(() => {
    handleClose()
  }, 1500);
}

</script>

<style scoped lang="scss">
::v-deep .el-dialog__body{
 height: 300px;
  overflow-y: auto;
  margin-right: -15px;
  padding-right: 0px !important;
  /* 定义滚动条样式 */
&::-webkit-scrollbar {
		width: 3px;
		// height: 2px;
		// background-color: rgba(240, 240, 240, 1);
}
/*定义滚动条轨道 内阴影+圆角*/
&::-webkit-scrollbar-track {
		// box-shadow: inset 0 0 0px rgba(240, 240, 240, .5);
		// border-radius: 10px;
		// background-color: rgba(240, 240, 240, .5);
}
/*定义滑块 内阴影+圆角*/
&::-webkit-scrollbar-thumb {
		border-radius: 100px;
		box-shadow: inset 0 0 0px rgba(237, 44, 37, .5);
		// background-color: rgba(237, 44, 37, .5);
    background-color: rgb(214, 212, 212);
}
.item{
  .el-checkbox__inner{
    border-width: 1.5px;
    &:hover{
      border-color:#f5f5f5 !important;
    }
  }
}
}

.creation-form{
  ::v-deep .el-form-item{
    .el-textarea__inner{
      box-shadow: 0 0 0 1px #f2f3f5 inset;
      background-color:#f2f3f5 !important;
      &:focus{
        box-shadow: 0 0 0 1px #409eff inset;
      }
    }
    .el-input__count{
      background:#f2f3f5 !important;
    }
     .el-input__wrapper{
      // border:1px solid #0e56e4 !important;
      // border:1px solid transparent !important;
      // border-color: #0e56e4 !important;
      // padding: 0px;
      background-color:#f2f3f5 !important;
      box-shadow: 0 0 0 1px #f2f3f5 inset;
    }
    .is-focus{
      box-shadow: 0 0 0 1px #409eff inset;
    }
     .el-input__inner{
        // background-color:#f2f3f5 !important;
        border-color: #409eff !important;
        // border:1px solid #264c98 !important;
        border-radius: 4px;
        // color: #f2f3f5;
        font-size: 14px;
      }
  }

  
}
</style>