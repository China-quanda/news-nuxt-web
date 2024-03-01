<template>
  <div>
    <el-input
      v-model="input"
      class="w-50 m-2"
      placeholder="Please Input"
    />

    <div class="search-box" v-if="showSearchBox">

      <div class="advice">
        <!-- <div class="item" v-for="(advice, index) in list" :key="index" @click="clickAdvice(advice)">
          <my-icon icon="search" size="18" color="#999"></my-icon>
          <div v-html="highlight(advice)"></div>
        </div> -->
        <div class="item" v-for="item in 4" @click="clickAdvice('')">
          <i :class="['iconfont','icon-huo','mr-5px color-#999 text-18px']"/>
          <div v-html="123"></div>
        </div>
      </div>

      <div class="history">
        <div class="handle">
          <div class="name">搜索历史</div>
          <div>
            <template v-if="isDel">
              <span @click="delAll">全部删除</span>
              <span style="margin-left: 12px;" @click="isDel = false">完成</span>
            </template>
            <template v-else>
              <i :class="['iconfont','icon-huo','mr-5px color-#999 text-18px']" @click="isDel = true"/>
            </template>
          </div>
        </div>
        <!-- <div class="item" v-for="(item, index) in list" :key="index">
          <div class="left" @click="clickItem(item)">
            <uni-icons class="iconfont" type="eye" size="18" color="#999" />
            <span>{{ item.keywords }}</span>
          </div>
          <div class="cha"><uni-icons v-show="isDel" class="iconfont" type="closeempty" size="18" color="#999" @click="delItem(item)" /></div>
        </div> -->
        <div class="item" v-for="(item, index) in 4" :key="index">
          <div class="left" @click="clickItem(item)">
            <!-- <my-icon class="my-icon" icon="icon-shezhi" size="18" color="#999"></my-icon> -->
            <i :class="['iconfont','icon-huo','mr-5px color-#999 text-18px']"/>
            <span>22222</span>
          </div>
          <div class="cha">
            <i v-show="isDel" :class="['iconfont','icon-huo','mr-5px color-#999 text-18px']" @click="delItem(item)"/>
          </div>
        </div>
      </div>
      
      <div class="hot">
        <div class="handle">
          <div class="name">热门搜索</div>
          <div>
            <i :class="['iconfont','icon-huo','mr-5px color-#999 text-18px']"/>
          </div>
        </div>
        <!-- <div class="item" v-for="(item, index) in list" :key="index">
          <div class="left" @click="clickItem(item)">
            <my-icon class="my-icon" icon="icon-shezhi" size="18" color="#999"></my-icon>
            <text>{{ item.keywords }}</text>
          </div>
        </div> -->
        <div class="item" v-for="(item, index) in 4" :key="index">
          <div class="left" @click="clickItem(item)">
            <i :class="['iconfont','icon-huo','mr-5px color-#999 text-18px']"/>
            <text>123</text>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// const props = defineProps({
// 	list: {
// 		type: Array,
// 		required: true,
// 		default: () => {
// 			return [];
// 		}
// 	},
// 	keyword: {
// 		type: String,
// 		default: ''
// 	}
// });
const showSearchBox = ref(false)
const input = ref('')
watch(input,()=>{
  console.log(11);
  if(input.value.length){
    showSearchBox.value = true
  }else{
    showSearchBox.value = false
  }
  
  
})
const highlight = (str:string) => {
	// const highlightStr = `<text style="color:red">${props.keyword}</text>`;
	// return str.replace(new RegExp(props.keyword, 'gi'), highlightStr);
};
const clickAdvice = (keyword:string) => {
	console.log('点击类型建议item 发请求查询文章', keyword);
	// this.$emit('onSearch', keyword);
	// this.list = [] // 清空联想建议才能显示搜索结果
	// this.hotSearchResList.push(item)
	// this.keyword = item
	// this.getArticleList()
	// this.$emit('close')
};

let isDel = ref<boolean>(false);
const delAll = () => {
	console.log('delAll');
};
const clickItem = (row:any) => {
	console.log('clickItem', row);
};
const delItem = (row:any) => {
	console.log('delItem', row);
};
</script>

<style scoped lang="scss">
.search-box{
  position: absolute;
  top: 60px;
  background-color: #fff;
}
.advice {
	background-color: #fff;
	.item {
		display: flex;
		align-items: center;
		// margin: 0px 12px;
		padding: 8px 12px;
		font-size: 16px;
		// height: 45px;
		line-height: 1;
		&:hover{
		  color: #81affc;
		  background-color: rgba(195, 232, 255, 0.5);
			:deep(.iconfont){
			  color: #81affc !important;
			}
		}
		// border-bottom: 0.5px solid #ccc;
		.my-icon{
			:deep(.iconfont){
				margin-right: 10px;
			}
		}
	}
}

.history {
  background-color: #fff;
	.handle {
		// margin: 0px 12px;
		// padding: 8px 12px;
		.name {
			color: #ccc;
		}
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #ccc;
	}
	.item {
		.left {
			flex: 1;
		}
		// margin-left: 12px;
		padding: 8px 12px;
		font-size: 16px;
		// height: 35px;
		line-height: 1;
		// border-bottom: 0.5px solid #ccc;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&:hover{
		  color: #81affc;
		  background-color: rgba(195, 232, 255, 0.5);
			:deep(.iconfont){
			  color: #81affc !important;
			}
		}
		// border-bottom: 0.5px solid #ccc;
		.my-icon{
			:deep(.iconfont){
				margin-right: 10px;
			}
		}
	}
}

.hot {
  background-color: #fff;
	.handle {
		// margin: 0px 12px;
		.name {
			color: #ccc;
		}
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #ccc;
	}
	.item {

		.left {
			flex: 1;
		}
		padding: 8px 12px;
		// margin-left: 12px;
		font-size: 16px;
		// height: 35px;
		line-height: 1;
		display: flex;
		align-items: center;
		&:hover{
		  color: #81affc;
		  background-color: rgba(195, 232, 255, 0.5);
			:deep(.iconfont){
			  color: #81affc !important;
			}
		}
		// border-bottom: 0.5px solid #ccc;
		.my-icon{
			:deep(.iconfont){
				margin-right: 10px;
			}
		}
	}
}
</style>