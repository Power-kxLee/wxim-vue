<template>
	<div class=' loginandreg'>
	
		<div id="login-box3" class='commonbox'></div>
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
							id="email" 
							class="ipt" 
							placeholder="Email" 
							required
							v-model='formdata.email'
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
						
					</div>
				</div>

				<div class="button">
					<button @click='loginfun' type="button" class="login-btn register-btn" id="login-button">登录</button>
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

	import '../../assets/css/loginRegister.css';
	import '../../assets/plugin/particles/particles.min.js';
	import particles_background from '../../assets/plugin/particles/background.js';
	import * as types from '../../vuex/mutation-types';
	import { Indicator , MessageBox  } from 'mint-ui';
	let storage = window.localStorage;
	export default {
		name: 'login',
		data() {
			return {
				MY_URL:this.$store.state.MY_URL,
				formdata :{}
			};
		},
		created (){
			this.$nextTick( () => {
				particlesJS('login-box3',particles_background);
			});
		},
		methods: {
			loginfun (){
				Indicator.open();
				this.$ajax({
					method : "post",
					url:this.MY_URL+"/user/login",
					data:this.formdata
				}).then(data => {
					let obj = data.data.data;
					Indicator.close();

					if(data.data.state == "success"){
						
						MessageBox.alert('登录成功', '登录成功了').then( btn => {
							this.$router.push({ path: 'wx' });
						});
						storage.setItem(types.CHECK_LOGIN_STATUS,true);
						
						this.$store.commit(types.CHECK_LOGIN_STATUS,{
							obj
						});
					}else{
						MessageBox.alert("登录失败",data.data.head);
					}
				}).catch(error =>{
					Indicator.close();
				});
			}
		}
		
	}
	
</script>
