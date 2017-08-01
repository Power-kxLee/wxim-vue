<template>
  <div class='many_conetnt'>
    <div class="pd10">
      <p class="tips">可通过以下方式找到我：</p>
      <mt-cell :title="'手机号'">
        <mt-switch v-model="phoneValue" @change="handleChange"></mt-switch>
      </mt-cell>
      <mt-cell :title="'微信号'">
        <mt-switch v-model="wechatValue" @change="handleChange"></mt-switch>
      </mt-cell>
      <mt-cell :title="'QQ号'">
        <mt-switch v-model="qqValue" @change="handleChange"></mt-switch>
      </mt-cell>
      <p class="tips">关闭后，其他用户将不能通过上述信息找到你。</p>
    </div>

    <div class="pd10">
      <p class="tips">可通过以下方式添加我：</p>
      <mt-cell :title="'群聊'">
        <mt-switch v-model="groupValue" @change="handleChange"></mt-switch>
      </mt-cell>
      <mt-cell :title="'我的二维码'">
        <mt-switch v-model="codeValue" @change="handleChange"></mt-switch>
      </mt-cell>
      <mt-cell :title="'名片'">
        <mt-switch v-model="cardValue" @change="handleChange"></mt-switch>
      </mt-cell>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        phoneValue: true, // 手机号
        wechatValue: true, // 微信号
        qqValue: true,
        groupValue: true,
        codeValue: true,
        cardValue: true
      }
    },
    created () {
    },
    methods: {
      handleChange () {
      }
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
