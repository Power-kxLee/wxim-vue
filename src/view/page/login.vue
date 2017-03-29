<template>
	<div class=' loginandreg'>
	
		<div id="login-box" class='commonbox'></div>
		<div class="cent-box">
			<div class="cent-box-header">
				<h1 class="main-title "></h1>
				<h2 class="sub-title">生活热爱分享 - Thousands Find</h2>
			</div>

			<div class="cont-main clearfix">
				<div class="index-tab">
					<div class="index-slide-nav">
						<router-link to="/login" class='active'>登录</router-link>
						<router-link to="/register">注册</router-link>

						<div class="slide-bar"></div>				
					</div>
				</div>

				<div class="login form">
						
					<div class="group">
						<div class="group-ipt email">
							<input 
							autocomplete="off" 
							autocorrect="off" 
							autocapitalize="off" 
							type="text" 
							name='username' 
							id="email" 
							class="ipt" 
							placeholder="Email" 
							required
							v-model='formdata.username'
							>
						</div>
						<div class="group-ipt password">
							<input 
							autocomplete="off" 
							autocorrect="off" 
							autocapitalize="off" 
							type="password" 
							name="password" 
							id="password" 
							class="ipt" 
							placeholder="Password" 
							v-model='formdata.password'
							required>
						</div>
						<div class="group-ipt verify">
							<input type="text" name="verify" id="verify" class="ipt" placeholder="输入验证码" required>
							<img  class="imgcode">
						</div>
					</div>
				</div>

				<div class="button">
					<button @click='loginfun' type="button" class="login-btn register-btn" id="login-button">跳过</button>
				</div>

				<div class="remember clearfix">
					<label class="forgot-password">
						<a href="#">忘记密码？</a>
					</label>
				</div>
			</div>
		</div>

		<div class="footer">
			<p>© 2010-2016 All rights reserved. KeyCode: cheap soccer jerseys , replica soccer jerseys </p>
		</div>
	</div>
</template>

<script type="text/javascript">

	import '../../assets/css/page/loginRegister.css';
	import '../../assets/plugin/particles/particles.min.js';
	import particles_background from '../../assets/plugin/particles/background.js';
	import { Toast } from 'mint-ui';

	export default {
		name: 'login',
		data() {
			return {
				formdata :{
					username:"",
					password:""
				}
			}
		},
		created (){
			this.$nextTick(function(){
					particlesJS('login-box',particles_background);
			})
		},
		methods: {
			loginfun (){
				let time = 4000;
				Toast({
				  message: '厉害了,你居然是隐藏的VIP会员,因此你不需要登录啦,默认打开管理员权限O(∩_∩)O',
				  duration: time
				});
				setTimeout(() => {
					router.push("/")
				},time);

				this.$store.commit("checkLoginStart",true);
				/*this.$http.post(this.$store.state.postUrl+"/user/login",this.formdata).then(function(data){
					console.log(data)
				});*/
			}
		}
		
	}
	
</script>
