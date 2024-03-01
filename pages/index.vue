<template>
  <div class="wrap">
		<div class="container">
			<div class="left-box-card">
				<ArticleItem></ArticleItem>
			</div>
			<div class="right-box-card">
				<Sidebar></Sidebar>
			</div>
		</div>
	</div>
</template>

<script setup>
const router = useRouter()

</script>
<style scoped lang="scss">
	.wrap{
		background-color: aliceblue;
	}
.container {
	position: relative;
  margin: auto;
	padding-top: 15px;
  display: flex;
  justify-content: space-between;
  // width: 1166px;
	box-sizing: border-box;
	width: $container-min-width;
	min-height: calc(100vh - $nav-height);
  // min-height: 160vh;
	// min-width: $container-min-width;
	// max-width: $container-max-width;
	// background-color: antiquewhite;
}
 // 左边盒子
  .left-box-card {
    display: flex;
    flex-direction: column;
    // padding-top: 10px;
		// padding: 12px;
		margin-right: 15px;
    width: 100%;
    // width: 815px;
     border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 8px 0px rgba(122 192 241 / 30%);
    .pagination{
      margin:50px auto 20px auto;
    }
}
</style>
