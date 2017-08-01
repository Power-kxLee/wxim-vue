<template>
  <div class='many_conetnt'>
    <div class="pd10">
      <mt-cell title="多语言" is-link to="/me/language"></mt-cell>
    </div>
    <div class="pd10">
      <mt-cell title="字体大小" is-link to=""></mt-cell>
      <mt-cell title="聊天背景" is-link to=""></mt-cell>
      <mt-cell title="我的表情" is-link to=""></mt-cell>
      <mt-cell title="照片和视频" is-link></mt-cell>
    </div>
    <div class="pd10">
      <mt-cell :title="'听筒模式'">
        <mt-switch v-model="earphoneModeValue" @change="handleChange"></mt-switch>
      </mt-cell>
    </div>
    <div class="pd10">
      <mt-cell title="功能" is-link></mt-cell>
    </div>
    <div class="pd10">
      <mt-cell title="聊天记录迁移" is-link></mt-cell>
      <mt-cell title="存储空间" is-link></mt-cell>
    </div>
    <div class="pd10 return_login_box">
      <mt-button type="default" size="large">清空聊天记录</mt-button>
    </div>

  </div>
</template>

<script>

  export default {
    data () {
      return {
        earphoneModeValue: false
      }
    },

    methods: {
      handleChange (event) {
        console.log(event)
      }
    }
  }
</script>
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
