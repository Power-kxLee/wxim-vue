<!--卡包-->
<template>
  <div class='many_conetnt'>
    <div class="vip_card">
      <p>会员卡<span>查看全部(1)</span></p>
      <div class="card">
        <!--无会员卡时显示-->
        <div class="cell" v-show="false">
          <img slot="icon" src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" class="avatar">
          会员卡(0)
        </div>

        <!--有会员卡时显示-->
        <div class="img_box">
          <img src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" alt="">
        </div>
        <span>附近可用</span>
      </div>
    </div>

    <div class="bottom">
      <p>优惠券</p>
      <div class="pdb10">
        <mt-cell title="朋友的券" is-link to="coupon">
          <img slot="icon" src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" class="avatar">
        </mt-cell>
      </div>
      <div class="pdb10">
        <mt-cell title="我的票券(0)" is-link>
          <img slot="icon" src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" class="avatar">
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<style>
  .vip_card {
    margin: 10px;
  }
  .vip_card p {
    overflow: hidden;
    padding: 5px 0;
  }
  .vip_card p span {
    float: right;
    color: #0f88eb;
    font-size: 12px;
    margin-top: 2px;
  }
  .vip_card .card {
    border-radius: 5px;
    position: relative;
    height: 80px;
    background: #fff;
  }
  .vip_card .card .cell {
    display:table-cell;
    height:80px;
    text-align:center;
    vertical-align:middle;
    padding-left: 26px;
    font-size: 20px;
  }
  .vip_card .card span {
    position: absolute;
    right: 10px;
    top: 10px;
    background: rgba(0,0,0,0.3);
    color: #fff;
    border: 1px solid #fff;
    border-radius: 20px;
    font-size: 12px;
    padding: 2px 3px;
  }
  .pdb10 {
    padding-bottom: 10px;
  }
  .bottom {
    padding: 10px;
  }
  .bottom p {
    padding: 5px 0;
  }
  .avatar {
    width: 48px;
    height: 38px;
  }
  .card .avatar {
    vertical-align:middle;
  }
  .vip_card .card .img_box {
    height: 80px;
    width: 100%;
    overflow: hidden;
  }
  .vip_card .card .img_box img {
    border-radius: 5px;
    width: 100%;
  }
  .mint-cell {
    padding: 15px;
    border-radius: 5px;
  }
  .mint-cell-wrapper {
    background-image: none;
  }
  .mint-cell-text {
    font-size: 20px;
  }
  .mint-cell:last-child {
    background-image: none;
  }
</style>
