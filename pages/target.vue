<template>
  <div class="w-screen h-screen flex justify-center ">
    <div class="tips-container box-border w-150 mx-2 mt-30">
      <img class="tips-img w-35 h10 mb-2"
        src="https://lf-cdn-tos.bytescm.com/obj/static/link_juejin_cn/assets/logo_new.0ec938fb.svg">
      <div class="tips-content border-1px border-coolgray-3 border-solid p-8 rd-1">
        <div class="tips-title text-black text-5">即将离开xxxx，请注意账号财产安全</div>
        <div class="target text-gray-7 m-t-2">
          <Icon name="fe:insert-link" class="mr-1" size="20"/>
          {{ target }}
        </div>
        <div class="flex flex-justify-end border-t border-t-coolGray-3 border-t-solid mt-5 pt-5">
          <nuxt-link
            class="text-3 px-6 py-2 rd-1 border-1 border-solid border-blue text-white bg-blue-5 hover:bg-blue-4 no-underline"
            :to="target" target="_blank">继续访问</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 离开xxxx安全提示
const route = useRoute()
const target = ref('')
target.value = route.query.target as string
</script>