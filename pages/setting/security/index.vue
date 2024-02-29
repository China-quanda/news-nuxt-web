<template>
  <div class="setting-page-security">
    <div class="setting-header"> 安全设置 </div>
    <div class="setting-body">
			<div class="form-box">
			<div class="form-item">
				<div class="form-label">旧密码</div>
				<div class="form-input"><input type="text" autocomplete="off" placeholder="请输入旧密码" class="input__inner" /></div>
			</div>
			<div class="form-item">
				<div class="form-label">新密码</div>
				<div class="form-input"><input type="text" autocomplete="off" placeholder="请输入新密码" class="input__inner" /></div>
			</div>
			<div class="form-item">
				<div class="form-label">确认密码</div>
				<div class="form-input"><input type="text" autocomplete="off" placeholder="请输入密码" class="input__inner" /></div>
			</div>
			<div class="form-item">
				<button >保存修改</button>
			</div>
		</div>
		</div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '安全设置 - 设置' })
</script>

<style scoped lang="scss">
.form-box {
	width: 50%;
	.form-item {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		.form-label {
			font-size: 14px;
			color: #606266;
			padding: 0 12px 0 0;
		}
		.form-input {
			flex: 1;
			font-size: 14px;
			.input__inner {
			    -webkit-appearance: none;
			    background-color: #FFF;
			    border-radius: 4px;
			    border: 1px solid #DCDFE6;
			    box-sizing: border-box;
			    color: #606266;
			    display: inline-block;
			    font-size: inherit;
			    height: 40px;
			    line-height: 40px;
			    // outline: 0; // 输入框边框
			    padding: 0 15px;
			    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
			    width: 100%;
			}
		}
	}
}
</style>