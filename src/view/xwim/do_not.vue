<template>
  <div class='many_conetnt'>
    <div class="pd10">
      <mt-radio
        v-model="value"
        align="right"
        :options="['开启', '只在夜间开启','关闭']">
      </mt-radio>
      <p class="tips">开启后，"QQ邮箱提醒"在收到邮件后，手机不会震动与发出提示音。如果开启"只在夜间开启"，则只在22：00到8：00间生效。</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: '开启'
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
