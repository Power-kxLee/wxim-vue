<template>
  <div class='many_conetnt'>
    <div class="pd10">
      <mt-cell title="微信号" value="weixin_188133"></mt-cell>
      <mt-cell title="手机号" is-link>
        <span>
          <img src="../../assets/image/lock.png" alt="">
          18813364620
        </span>
      </mt-cell>
    </div>

    <div class="pd10">
      <mt-cell title="微信密码" value="已设置" is-link></mt-cell>
      <mt-cell title="声音锁" value="已开启" is-link></mt-cell>
    </div>

    <div class="pd10">
      <mt-cell title="应急联系人" is-link></mt-cell>
      <mt-cell title="登录设备管理" is-link></mt-cell>
      <mt-cell title="更多安全设置" is-link></mt-cell>
    </div>

    <div class="pd10">
      <mt-cell title="微信安全中心" is-link></mt-cell>
    </div>

    <div class="mg10 tips">
      如果遇到账号信息泄露、忘记密码、诈骗等账号安全问题，可前往微信安全中心
    </div>

  </div>
</template>

<style scoped>
  .pd10 {
    padding: 10px 0;
  }
  .mg10 {
    margin: 0 10px 10px;
  }
  img {
    width: 24px;
    height: 24px;
  }
  .return_login_box .mint-button{
    border-radius: 0;
  }
  .tips {
    color: #999;
    font-size: 12px;
    text-align: justify;
    text-indent: 0;
  }
  span img {
    width: 16px;
    height: 16px;
  }
</style>
<script type="text/javascript">
  export default {
    data () {
      return {
        MY_URL:this.$store.state.MY_URL
      }
    },
    components:{
    },
    watch: {
      '$route' (to, from) {
       console.log(this.$router)
      }
    },
    methods:{
    },
    mounted (){
    
        
    }
  };
</script>