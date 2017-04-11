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
						<form action="" method='post'>
						<div class="group-ipt email">
							<input type="email" v-model="formdata.email" id="email" class="ipt" placeholder="邮箱地址" required>
						</div>
						<div class="group-ipt user">
							<input type="text" v-model="formdata.username" id="user" class="ipt" placeholder="选择一个用户名" required>
						</div>
						<div class="group-ipt password">
							<input type="password" v-model="formdata.password" id="password" class="ipt" placeholder="设置登录密码" required>
						</div>
						<div class="group-ipt password1">
							<input type="password" v-model="formdata.password1" id="password1" class="ipt" placeholder="重复密码" required>
						</div>
						<!-- <div class="group-ipt verify">
							<input type="text" name="verify" id="verify" class="ipt" placeholder="输入验证码" required>
							<img src="http://zrong.me/home/index/imgcode?id=" class="imgcode">
						</div> -->
						</form>
					</div>
				</div>

				<div class="button">
					<button @click='regfn' type="button" class="login-btn register-btn" id="button">跳过</button>
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
				routeback:"",
				formdata : {}
			}
		},
		created (){
			this.$nextTick(() => {

				particlesJS('register-box',particles_background);
			});
		},
		methods:{

			regfn(){
				console.log("this.formdata",this.formdata)
				this.$http.post("http://127.0.0.1:3000/reg",this.formdata).then( (data) =>{
					console.log("成功",data)
				},(error) =>{
					console.log("error",error)
				} );
				/*this.$store.commit("checkLoginStart",true);*/
			}
		}
		
	}
</script>
