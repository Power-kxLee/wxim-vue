<template>
  <div class='many_conetnt'>
    <div class="pd10">
      <mt-cell :title="'加我朋友时需要验证'">
        <mt-switch v-model="verificationValue" @change="handleChange"></mt-switch>
      </mt-cell>
    </div>
    <div class="pd10">
      <mt-cell title="添加我的方式" is-link to="/me/way"></mt-cell>
      <mt-cell :title="'向我推荐通讯录朋友'">
        <mt-switch v-model="mailListValue" @change="handleChange"></mt-switch>
      </mt-cell>
      <p class="tips">开启后，为你推荐已经开通微信的手机联系人。</p>
    </div>
    <div class="pd10">
      <mt-cell title="通讯录黑名单" is-link to="/me/way"></mt-cell>
    </div>
    <div class="pd10">
      <p class="tips">朋友圈</p>
      <mt-cell title="不让他（她）看我的朋友圈" is-link to="/me/way"></mt-cell>
      <mt-cell title="不看他（她）的朋友圈" is-link to="/me/way"></mt-cell>
      <mt-cell title="允许朋友查看朋友圈的范围" is-link to="/me/way">
        <span>全部</span>
      </mt-cell>
      <mt-cell :title="'允许陌生人查看十条朋友圈'">
        <mt-switch v-model="strangerValue" @change="handleChange"></mt-switch>
      </mt-cell>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        verificationValue: true,
        mailListValue: true,
        strangerValue: true
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>
<style scoped>
  .pd10 {
    padding: 10px 0;
  }
  .tips {
    padding: 5px 10px;
    color: #999;
    font-size: 12px;
  }
</style>
