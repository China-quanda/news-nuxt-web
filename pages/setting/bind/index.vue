<template>
	<div class="setting-page-bind">
		<div class="setting-header"> 账号绑定 </div>
		<div class="setting-body">
			<div class="bind-box" v-for="bind in bindList" :key="bind.name">
				<div class="bind-left">
					<img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
						style="width: 30px;margin-right: 10px;vertical-align: middle;" />
					<span>{{ bind.name }}</span>
				</div>
				<div class="bind-content">{{ bind.desc }}</div>
				<div class="bind-right">{{ bind.bind }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({ title: '账号绑定 - 设置' })

let bindList = reactive([
	{ name: '绑定手机号码', desc: '当前未绑定绑定手机号码', bind: '绑定/更换' },
	{ name: '绑定邮箱', desc: '当前未绑定绑定邮箱账号', bind: '绑定/更换' },
	{ name: '绑定QQ', desc: '当前未绑定绑定QQ账号', bind: '绑定/更换' },
	{ name: '绑定微信', desc: '当前未绑定绑定微信账号', bind: '绑定/更换' },
	{ name: '绑定支付宝', desc: '当前未绑定绑定支付宝账号', bind: '绑定/更换' },
	{ name: '绑定微博', desc: '当前未绑定绑定微博账号', bind: '绑定/更换' },
	{ name: '绑定Github', desc: '当前未绑定绑定Github账号', bind: '绑定/更换' }
])

</script>

<style scoped lang="scss">
.bind-box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #303133;
	border-bottom: 1px solid #EBEEF5;
	padding: 15px 0px;

	&:hover {
		background: #fafafa;
	}

	.bind-right {
		color: #66b1ff;
		cursor: pointer;
	}
}</style>