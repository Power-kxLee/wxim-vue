<template>
  <div class='many_conetnt'>
    <div class="pd10">
      <mt-cell title="账号与安全" is-link to="/me/account"></mt-cell>
    </div>
    <div class="pd10">
      <mt-cell title="新消息通知" is-link to="/me/new_message"></mt-cell>
      <mt-cell title="隐私" is-link></mt-cell>
      <mt-cell title="通用" is-link></mt-cell>
    </div>
    <div class="pd10">
      <mt-cell title="帮助与反馈" is-link></mt-cell>
      <mt-cell title="关于微信" is-link></mt-cell>
    </div>
    <div class="pd10">
      <mt-cell title="实验室" is-link></mt-cell>
    </div>
    <div class="pd10 return_login_box">
      <mt-button type="default" size="large">退出登录</mt-button>
    </div>

  </div>
</template>

<style>
  .pd10 {
    padding: 10px 0;
  }
  img {
    width: 24px;
    height: 24px;
  }
  .return_login_box .mint-button{
    border-radius: 0;
  }

</style>
