<template>
  <div class="flex flex-col mt-10rem flex-items-center" >
    <img class="w-md" src="~/assets/images/error.svg" >
    <h2>{{ error.statusCode }}</h2>
    <h2>{{ error.statusMessage }}</h2>
    <button class="py-2 px-4 border-rounded border-gray-400 border-1px hover:bg-purple-400 hover:cursor-pointer hover:cursor-pointer hover:text-light hover:border-purple" @click="handleError">{{ $t('backHome') }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>