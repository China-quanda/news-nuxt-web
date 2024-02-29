<template>
	<div class="setting-page-profile">
		<div class="setting-header"> 基本信息 </div>
		<div class="setting-body">
			<div class="edit-box flex">
				<div class="form-box mr-30px">
					<div class="form-item">
						<div class="form-label">用户昵称</div>
						<div class="form-input"><input type="text" autocomplete="off" placeholder="请输入用户昵称" class="input__inner" />
						</div>
					</div>
					<div class="form-item">
						<div class="form-label">用户生日</div>
						<div class="form-input"><input type="text" autocomplete="off" placeholder="请选择您的生日" class="input__inner" />
						</div>
					</div>
					<div class="form-item">
						<div class="form-label">用户性别</div>
						<div class="form-input">
							<label>
								<input type="radio" aria-hidden="true" tabindex="-1" autocomplete="off" value="女" />
								<span>女</span>
							</label>
							<label>
								<input type="radio" aria-hidden="true" tabindex="-1" autocomplete="off" value="男" />
								<span>男</span>
							</label>
						</div>
					</div>
					<div class="form-item">
						<div class="form-label">个人简介</div>
						<div class="form-input">
							<textarea autocomplete="off" class="textarea__inner" style="min-height: 32.25px;"></textarea>
						</div>
					</div>
					<div class="form-item">
						<!-- <button type="primary" @click="onSubmit">保存修改</button> -->
					</div>
				</div>
				<div class="flex flex-1 flex-items-center flex-justify-center">
					<div class="w-10rem h-10rem bg-pink rounded-100px hover:bg-#ccc hover:bg-#ccc hover:cursor-pointer"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({ title: '个人资料 - 设置' })
</script>

<style scoped lang="scss">
.setting{}

.form-box {
	cursor: pointer;
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
				// -webkit-appearance: none;
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
				transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
				width: 100%;
			}

			.textarea__inner {
				display: block;
				resize: vertical;
				padding: 5px 15px;
				line-height: 1.5;
				box-sizing: border-box;
				width: 100%;
				font-size: inherit;
				color: #606266;
				background-color: #FFF;
				border: 1px solid #DCDFE6;
				border-radius: 4px;
				transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
			}
		}
	}
}

</style>
