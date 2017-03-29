<template>
	<div class='loginandreg'>
		<div id="register-box" class='commonbox'></div>
		<div class="cent-box register-box">
			<div class="cent-box-header">
				<h1 class="main-title hide"></h1>
				<h2 class="sub-title">生活热爱分享 - Thousands Find</h2>
			</div>

			<div class="cont-main clearfix">
				<div class="index-tab">
					<div class="index-slide-nav">
						<router-link to="/login">登录</router-link>
						<router-link to="/register" class='active'>注册</router-link>
						<div class="slide-bar slide-bar1"></div>				
					</div>
				</div>

				<div class="login form">
					<div class="group">
						<div class="group-ipt email">
							<input type="email" name="email" id="email" class="ipt" placeholder="邮箱地址" required>
						</div>
						<div class="group-ipt user">
							<input type="text" name="user" id="user" class="ipt" placeholder="选择一个用户名" required>
						</div>
						<div class="group-ipt password">
							<input type="password" name="password" id="password" class="ipt" placeholder="设置登录密码" required>
						</div>
						<div class="group-ipt password1">
							<input type="password" name="password1" id="password1" class="ipt" placeholder="重复密码" required>
						</div>
						<div class="group-ipt verify">
							<input type="text" name="verify" id="verify" class="ipt" placeholder="输入验证码" required>
							<img src="http://zrong.me/home/index/imgcode?id=" class="imgcode">
						</div>
					</div>
				</div>

				<div class="button">
					<button @click='regfn' type="submit" class="login-btn register-btn" id="button">跳过</button>
				</div>
			</div>
		</div>

		<div class="footer">
			<p>© 2010-2016 All rights reserved. KeyCode: cheap soccer jerseys , replica soccer jerseys </p>
		</div>
	</div>
</template>

<script>
	import '../../assets/css/page/loginRegister.css';
	import '../../assets/plugin/particles/particles.min.js';
	import particles_background from '../../assets/plugin/particles/background.js';
	import { Toast } from 'mint-ui';
	export default {
		name: 'login',
		data() {
			return {
				phone:"10086",
				verify:"006",
				isverify:true,
				routeback:""
			}
		},
		created (){
			this.$nextTick(() => {

				particlesJS('register-box',particles_background);
			});
		},
		methods:{

			regfn(){
				let time = 4000;
				Toast({
				  message: '厉害了,你居然是隐藏的VIP会员,因此你不需要注册啦,默认打开管理员权限O(∩_∩)O',
				  duration: time
				});
				setTimeout(() => {
					router.push("/")
				},time);
				this.$store.commit("checkLoginStart",true);
			}
		}
		
	}
</script>
