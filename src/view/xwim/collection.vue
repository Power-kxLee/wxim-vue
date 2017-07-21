<!--收藏-->
<template>
  <div class='many_conetnt'>
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
    <div v-for="(item,index) in 3">
      <slider :index="index" v-on:deletes="deleteItem" v-on:lebelIndex="labelItem">
        <div class="collection">
          <div class="cell">
            <img slot="icon" src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" class="avatar">
            <p class="left">广州人广州人广州人广州人广州人广州人广州人广州人广州人</p>
            <span>3天前</span>
          </div>
          <section>
            <img src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" alt="">
            <p>广州7月份千个小区广州7月份千个小区广州7月份千个小区广州7月份千个小区广州7月份千个小区广州7月份千个小区广州7月份千个小区广州7月份千个小区广州7月份千个小区广州7月份千个小区广州7月份千个小区广州7月份千个小区</p>
          </section>
        </div>
      </slider>
    </div>

    <!--图片-->
    <div class="collection">
      <div class="cell">
        <img slot="icon" src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" class="avatar">
        <p class="left">广州人广州人广州人广州人广州人广州人广州人广州人广州人</p>
        <span>3天前</span>
      </div>
      <section class="img">
        <img src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" alt="">
      </section>
    </div>

  </div>
</template>

<script>
  import slider from './common/leftSlider.vue'
  export default {

    components: {
      slider
    },
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
      // 标签
      labelItem: function (index) {
        window.alert(index)
      },
      // 删除
      deleteItem: function (index) {
        console.log(index)
      }
    },
    mounted () {
    }
  }

</script>
<style scoped>
  .collection {
    padding-bottom: 5px;
  }
  .collection .cell {
    padding: 5px 10px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    background: #fff;
  }
  .collection .cell .left {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    width: 20%;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display:block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    padding: 0 5px;
  }
  .collection .cell span {
    max-width: 80px;
    font-size: 12px;
    color: #999999;
  }
  .avatar {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    align-items: center;
  }
  section {
    background: #fff;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    padding: 5px 10px;
  }
  section img {
    width: 48px;
    height: 48px;
  }
  section p {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    width: 20%;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #333;
    text-align: justify;
    margin-left: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .img img {
    max-width: 100%;
    margin: 0 auto;
    height: 100px;
  }
  .mint-search {
    height: inherit;
  }
</style>
