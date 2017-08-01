<template>
  <div class='many_conetnt'>
    <div class="pd10">
      <mt-radio
        v-model="value"
        align="right"
        :options="options">
      </mt-radio>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: 'A'
      }
    },
    created () {
      this.options = [
        {
          label: '简体中文',
          value: 'A'
        },
        {
          label: '繁體中文（台湾）',
          value: 'B'
        },
        {
          label: '繁體中文（香港）',
          value: 'C'
        },
        {
          label: 'English',
          value: 'D'
        },
        {
          label: 'Bahasa Indonesia',
          value: 'E'
        },
        {
          label: 'Bahasa Melayu',
          value: 'F'
        },
        {
          label: '한국어',
          value: 'G'
        },
        {
          label: '日本語',
          value: 'H'
        },
        {
          label: 'Português',
          value: 'I'
        },
        {
          label: 'Español',
          value: 'J'
        },
        {
          label: 'Italiano',
          value: 'K'
        },
        {
          label: 'Polski',
          value: 'L'
        },
        {
          label: 'ภาษาไทย',
          value: 'M'
        },
        {
          label: 'Deutsch',
          value: 'N'
        }
      ]
    },
    methods: {
    }
  }
</script>
<style scoped>
  .pd10 {
    padding: 10px 0;
  }
</style>
