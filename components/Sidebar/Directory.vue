<template>
  <div class='wrap'>
    <div class='container'>
       <el-card class="box-card fixedo" :class="{ is_fixed: isFixed }">
        <div slot="header" class="clearfix">
          <span>目录结构</span>
        </div>
      </el-card>
    </div>
   </div>
</template>

<script setup lang="ts">
// import { onDeactivated } from 'vue';

const isFixed = ref(false)
const scrollTop = ref(0)
const offsetTop = ref([])
onMounted(() => {
  window.addEventListener('scroll',handleScroll, true)
}),
onDeactivated(()=>{
  window.removeEventListener('scroll', handleScroll, true)
})
const handleScroll =(e:any)=> {
  scrollTop.value = e.target.scrollTop
      // const offsetTop = document.querySelector('.fixedo')?.offsetTop

      if (scrollTop.value > offsetTop.value.length) {
        // 判断是否到达了顶部
        isFixed.value = true // 到底顶部把状态改为true
        if (offsetTop.value.length <= 0) {
          // 如果这个数组里面是空的并且小于等于0的时候就把offsetTop的位置给数组里面保存，如果不判断的话这个数组会有很多0数据
          // offsetTop.value.push(offsetTop)
          offsetTop.value.push()
        }
        if (scrollTop.value < offsetTop.value[0]) {
          // 判断当前位置是否小于存在数组的数据 ，是的话就把状态改为false
          isFixed.value = false
          offsetTop.value = []
        }
      } else {
        isFixed.value = false
      }
      // console.log( 'scrollTop',this.scrollTop);
      // console.log('offsetTop []',this.offsetTop);
    }
</script>

<style scoped lang="scss">

</style>