<template>
  <div class='many_conetnt'>
    <div class="pd10">
      <mt-cell :title="'接收新消息通知'">
        <mt-switch v-model="newValue" @change="handleChange"></mt-switch>
      </mt-cell>
      <mt-cell :title="'接收语音和视频聊天邀请通知'">
        <mt-switch v-model="voiceValue" @change="handleChange"></mt-switch>
      </mt-cell>
    </div>
    <div class="pd10">
      <mt-cell :title="'通知显示消息详情'">
        <mt-switch v-model="detailValue" @change="handleChange"></mt-switch>
      </mt-cell>
      <p class="tips">关闭后，当收到微信信息时，通知提示将不显示发信人和内容摘要</p>
    </div>
    <div class="pd10">
      <mt-cell title="消息功能免打扰" is-link to="/me/do_not"></mt-cell>
    </div>
    <div class="pd10">
      <mt-cell :title="'声音'">
        <mt-switch v-model="soundValue" @change="handleChange"></mt-switch>
      </mt-cell>
      <mt-cell :title="'振动'">
        <mt-switch v-model="vibrationValue" @change="handleChange"></mt-switch>
      </mt-cell>
      <p class="tips">当微信在运动时，你可以设置是否需要声音或者运动。</p>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        newValue: true,
        voiceValue: true,
        detailValue: true,
        soundValue: true,
        vibrationValue: false
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
  .tips {
    padding: 5px 10px;
    color: #999;
    font-size: 12px;
  }
  img {
    width: 24px;
    height: 24px;
  }

</style>
