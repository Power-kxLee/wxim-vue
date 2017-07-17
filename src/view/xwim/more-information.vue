<template>
  <div>
    <div class="pd10" v-show="content">
      <mt-cell title="性别" is-link value="女" @click.native="chooseSex"></mt-cell>
      <mt-cell title="地区" is-link value="百慕大" to="/area"></mt-cell>
      <mt-cell title="个性签名" is-link>
        <span>学习是一种信仰</span>
      </mt-cell>
    </div>

    <div v-show="sexShow">
      <mt-radio
        v-model="value"
        align="right"
        :options="['男', '女']">
      </mt-radio>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        alphabet: [],
        sexShow: false,
        content: true
      }
    },
    created() {
    },
    methods: {
      chooseSex () {
         this.sexShow = true
         this.content = false
      }
    }
  }

</script>
<style scoped>
  .pd10 {
    padding: 10px 0;
  }
  img {
    width: 24px;
    height: 24px;
  }

</style>
