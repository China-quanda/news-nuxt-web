<template>
  <div v-if="show" class="backtop" @click="toTop">去顶部</div>
</template>

<script setup lang="ts">
let show = ref(false);
let scrollTop = ref(0);

const toTop = () => {
	if (scrollTop.value < 1920) {
		document.body.scrollIntoView({ behavior: 'smooth' });
	} else {
		// document.body.scrollIntoView();
		document.body.scrollIntoView({ behavior: 'smooth' });
	}
};


onMounted(() => {
	window.addEventListener('scroll', handleScroll, true);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
const handleScroll = (e:any) => {
	scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop;
	// console.log(scrollTop.value);
	if (scrollTop.value > 250) {
		show.value = true;
	} else {
		show.value = false;
	}
};
</script>

<style scoped lang="scss">

.backtop {
	width: 60px;
	height: 60px;
	text-align: center;
	line-height: 60px;
	position: fixed;
	right: 30px;
	bottom: 100px;
	background-color: #fff;
	border-radius: 50%;
	box-shadow: 0 2px 8px 0px rgba(122, 192, 241, 0.3);
	&:hover{
		cursor: pointer;
	}
}
</style>