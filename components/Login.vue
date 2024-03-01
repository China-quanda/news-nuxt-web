<template>
  <div class="container">
		<div class="back" @click="router.back()">
			<!-- <uni-icons type="closeempty" size="24" color="#fff" /> -->
			<!-- <my-icon icon=""></my-icon> -->
      <Icon name="ep:close" color="#328BF9"/>
		</div>

		<div class="logo">
			<img src="~/assets/images/logo.png" style="height: 60px;">
		</div>

		<!-- 登录类型 -->
		<div class="type-item">
			<template v-if="type == 1">
				<div>账号密码登录</div>
				<div @click="type = 2">
					<span class="right">验证码快捷登录</span>
					<my-icon icon="icon-xiangyoujiantou" size="14" color="#328BF9"></my-icon>
				</div>
			</template>

			<template v-if="type == 2">
				<div>验证码快捷登录</div>
				<div @click="type = 1">
					<span class="right">账户密码登录</span>
					<my-icon icon="icon-xiangyoujiantou" size="14" color="#328BF9"></my-icon>
				</div>
			</template>

			<template v-if="type == 3">
				<div>通过手机/邮箱重设密码</div>
				<div @click="type = 1">
					<span class="right">账户密码登录</span>
					<my-icon icon="icon-xiangyoujiantou" size="14" color="#328BF9"></my-icon>
				</div>
			</template>
		</div>

		<!-- 账号密码登录 -->
		<div v-if="type == 1">
			<uni-forms class="form-uni" :modelValue="form">
				<uni-forms-item><uni-easyinput type="span" v-model="form.account" placeholder="手机号 / 邮箱" trim /></uni-forms-item>
				<uni-forms-item><uni-easyinput type="password" v-model="form.password" placeholder="密码" trim /></uni-forms-item>
			</uni-forms>
			<!-- <div><input type="text" placeholder="手机号 / 邮箱"></div> -->
			<!-- <div><input type="password" placeholder="密码"></div> -->
		</div>

		<!-- 验证码快捷登录 -->
		<div v-if="type == 2">
			<uni-forms class="form-uni" :modelValue="form">
				<uni-forms-item><uni-easyinput type="span" v-model="form.account" placeholder="手机号 / 邮箱" trim /></uni-forms-item>
				<uni-forms-item>
					<div class="" style="display: flex;justify-content: space-between; align-items: center;">
						<uni-easyinput type="number" v-model="form.code" placeholder="验证码" trim />
						<my-button class="btn-item btn-mini" type="primary" shape="circle"
						:disabled="codeLoading"  @click="getCode">{{ tips }}</my-button>
					</div>
				</uni-forms-item>
			</uni-forms>
		</div>

		<!-- 通过手机/邮箱重设密码 -->
		<div v-if="type == 3">
			<uni-forms class="form-uni" :modelValue="form">
				<uni-forms-item><uni-easyinput type="span" v-model="form.account" placeholder="手机号 / 邮箱" trim /></uni-forms-item>
				<uni-forms-item>
					<div class="" style="display: flex;justify-content: space-between; align-items: center;">
						<uni-easyinput type="number" v-model="form.code" placeholder="验证码" trim />
						<my-button class="btn-item btn-mini" type="primary" shape="circle"
						:disabled="codeLoading"  @click="getCode">{{ tips }}</my-button>
					</div>
				</uni-forms-item>
				<uni-forms-item><uni-easyinput type="password" v-model="form.password" placeholder="新密码" trim /></uni-forms-item>
			</uni-forms>
		</div>

		<my-button class="btn-item" type="primary" :disabled="loading" shape="circle" @click="submit(type)">
			<span v-if="type != 3">{{ !loading ? '登 录' : '登录中...' }}</span>
			<span v-if="type == 3">{{ !loading ? '重设密码' : '重设密码中...' }}</span>
		</my-button>

		<div class="tips-item">
			<div v-if="type != 3" @click="type = 3">忘记密码？</div>
			<div v-if="type == 3" @click="type = 1">想起密码？</div>
			<span v-if="type != 3" class="tips">未注册的账号通过验证后将自动注册</span>
		</div>
		<div v-if="type != 3" class="other-item">
			<my-icon v-for="item in otherLoginData" class="my-icon" :icon="item.icon" :color="item.color" :size="20" @click="otherLogin(item)" />
		</div>
		<div v-if="type != 3" class="reading-item">
			登录注册即代表同意xx
			<span>《用户协议》</span>
			和
			<span>《隐私协议》</span>
		</div>
	</div>
</template>

<script setup lang="ts">
const router = useRouter();
// import { onReady } from "@dcloudio/uni-app";
// import { isMobile, isEmail } from '@/utils/validate';
// import { getVerifyCode } from '@/api/verifyCode';
// import { mapActions } from 'vuex' 用pina代替
// ...mapActions(['user/login', 'user/quick', 'user/quickUpdatePassword'])
// import router from '@/utils/router';
// import prompt from '@/utils/prompt';
// X秒重新获取
let tips = ref<string>('获取验证码');
let githubUrl = ref<string>('https://github.com/login/oauth/authorize?client_id=88f028142403410abfef&redirect_uri=http://127.0.0.1:8888/dashboard');
let weChatUrl = ref<string>(
	'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd4a837c38b866355&redirect_uri=http://127.0.0.1:8888/dashboard&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
);
let type = ref<number>(2);
let loading = ref<boolean>(false);
let codeLoading = ref<boolean>(false);
let time = ref<number>(1000 * 60);
let formRef = ref(null);

let form = reactive({
	account: null,
	password: null,
	code: null
});
let otherLoginData = ref([
	{ name: 'weixin', icon: 'icon-weixin', color: 'rgb(74, 221, 51)' },
	{ name: 'qq', icon: 'icon-qq', color: 'rgb(87, 139, 222)' },
	{ name: 'weibo', icon: 'icon-xinlangweibo', color: 'rgb(244, 94, 75)' },
	{ name: 'zfb', icon: 'icon-shejiaotubiao-09', color: 'rgb(93, 140, 241)' },
	{ name: 'wr', icon: 'icon-weiruan', color: 'rgb(93, 140, 241)' },
	{ name: 'github', icon: 'icon-github', color: 'rgb(10, 24, 54)' }
]);

let rules = reactive({
	account: [
		{
			required: true,
			errorMessage: '请填写账号'
		}
	],
	password: [
		{
			required: true,
			errorMessage: '请填写密码',
			trigger: ['blur', 'change']
		},
		{
			min: 6,
			errorMessage: '密码长的不能小于6个字符'
		}
	],
	code: [
		{
			required: true,
			message: '请填写验证码',
			trigger: ['blur', 'change']
		},
		{
			min: 6,
			max: 6,
			message: '验证码应该是6位数字'
		}
	]
});
const otherLogin = (data:any) => {
	console.log(data);
};
const submit = (type:number) => {
	if (type == 1) {
		login();
	}
	if (type == 2) {
		LogInToregister();
	}
	if (type == 3) {
		resetPassword();
	}
};
let interval = ref(null);

let intervalFn = () => {
	// if (time.value == 1000) {
	// 	clearInterval(interval.value);
	// 	codeLoading.value = false;
	// 	tips.value = `获取验证码`;
	// 	time.value = 60000;
	// 	return;
	// }
	// time.value = time.value - 1000;
	// tips.value = `${time.value / 1000}s 后再获取`;
};
// 获取验证码
const getCode = () => {
	// if (!isMobile(form.account) && !isEmail(form.account)) return prompt.msg('请输入有效的账号');
	// prompt.loading('正在获取验证码');
	codeLoading.value = true;
	// getVerifyCode({ account: form.account })
	// 	.then(res => {
	// 		console.log('res', res);
	// 		prompt.msg('验证码已发送');
	// 		// 通知验证码组件内部开始倒计时
	// 		interval.value = setInterval(() => {
	// 			intervalFn();
	// 		}, 1000);
	// 	})
	// 	.catch(e => {
	// 		codeLoading.value = false;
	// 	})
	// 	.finally(() => {
	// 		prompt.hideLoading();
	// 	});
};
// 微信登录
const weChatLogin = () => {
	// const weChatCode = window.location.href.split('?code=')[1].split('&')
	// const res = await weChatLogin({ code: weChatCode[0] })
	// console.log(res)
	// prompt.msg('WeChat登录成功')
};
// gitHub登录
const gitHubLogin = () => {
	// const str = window.location.href.substr(window.location.href.indexOf('code=') + 5)
	// const Code = str.substr()
	// const res = await gitHubLogin({ code: Code })
	// console.log(res)
	// prompt.msg('gitHub登录成功')
};
// 账号密码登录
const login = () => {
	// if (!isMobile(form.account) && !isEmail(form.account)) return prompt.msg('请输入有效的账号');
	// if (!form.password) return prompt.msg('请输入新密码');
	loading.value = true;
	try {
		// await this['user/login'](this.form) vuex里面的方法
		// 登录成功，跳转回原来的页面
		router.back();
	} catch (e) {}
	loading.value = false;
};
// 验证码快捷登录 或注册
const LogInToregister = () => {
	// if (!isMobile(form.account) && !isEmail(form.account)) return prompt.msg('请输入有效的账号');
	// if (!form.code) return prompt.msg('请输入验证码');
	loading.value = true;
	try {
		// await this['user/quick'](this.form)
		// 登录成功，跳转回原来的页面
		router.back();
	} catch (error) {}
	loading.value = false;
};
// 验证码快捷修改密码
const resetPassword = () => {
	// if (!isMobile(form.account) && !isEmail(form.account)) return prompt.msg('请输入有效的账号');
	// if (!form.code) return prompt.msg('请输入验证码');
	// if (!form.password) return prompt.msg('请输入新密码');
	loading.value = true;
	try {
		// await this['user/quickUpdatePassword'](this.form)
		// prompt.msg('重置密码成功！');
		// form = {};
	} catch (error) {}
	loading.value = false;
	type.value = 1;
};
</script>

<style scoped lang="scss">
.container {
	width: 385px;
	height: 500px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	z-index: 999;
	border-radius: 15px;
	background-color: #fff;
	box-shadow: 0px 2px 5px 2px rgba(165, 177, 222, 0.5);
}
// .back {
// 	z-index: 1;
// 	position: absolute;
// 	top: 20px;
// 	right: 20px;
// 	padding: 5px;
// }
.logo {
	display: flex;
	justify-content: center;
	padding: 40px 80px 50px 80px;
}
.type-item {
	display: flex;
	justify-content: space-between;
	height: 20px;
	line-height: 20px;
	margin: 0px 15px 10px 0px;
	font-size: 16px;
	div:nth-child(1) {
		font-size: 18px;
		font-weight: 500;
		border-left: 3px solid #328bf9;
		padding-left: 15px;
	}
	.right {
		color: #328bf9;
		cursor: pointer;
	}
}
.form-uni {
	padding: 10px 15px 0px 15px;

	::v-deep.is-input-border {
		border: 0.5px solid #328bf9 !important;
		// box-shadow: 0.5px 1px 5px 0.5px rgba(24, 56, 180, 0.06);
		border-radius: 20px;
	}
	::v-deep.uni-forms-item {
		margin-bottom: 12px;
	}
}
.btn-item {
	margin: 0px 15px;
	border-radius: 25px;
}
.btn-mini {
	margin-right: 0px;
}
.tips-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 15px;
	font-size: 14px;
	color: #666363;
	div{
		cursor: pointer;
	}
	.tips {
		// margin: 15px;
		// font-size: $uni-font-size-sm;
		font-size: 14px;
		color: #ccc;
		// color: $uni-span-color-grey;
	}
}
.other-item {
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	position: absolute;
	bottom: 40px;
	margin-bottom: 20px;
	.my-icon {
		width: 25px;
		height: 25px;
		line-height: 25px;
		padding: 5px;
		text-align: center;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid #ccc;
		cursor: pointer;
		&:hover{
			border: 1px solid #328bf9;
		}
	}
}
.reading-item {
	position: absolute;
	width: 100%;
	bottom: 20px;
	font-size: 12px;
	text-align: center;
	span {
		cursor: pointer;
		color: #328bf9;
	}
}
</style>