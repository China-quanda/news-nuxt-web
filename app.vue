<template>
  <div class="app">
    <Login v-if="showLogin"></Login>
    <AppHeader></AppHeader>
    <NuxtPage class="main"/>
    <BackTop></BackTop>
  </div>
</template>
<script setup lang="ts">
let showLogin = ref(false);
</script>
<style>
body,html{
  margin: 0;
  padding: 0px;
}
*{
  box-sizing: border-box;
}
.app {
	/* position: relative; */
	.main {
		z-index: 1;
	}
}
</style>