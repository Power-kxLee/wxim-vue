<template>
  <div class='many_conetnt'>
    <div class="vip_card">
      <p>会员卡<span>查看全部(1)</span></p>
      <div class="card">
        <span>附近可用</span>
      </div>
    </div>

    <div class="bottom">
      <p>优惠券</p>
      <div class="pdb10">
        <mt-cell title="朋友的券" is-link>
          <img slot="icon" src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" class="avatar">
        </mt-cell>
      </div>
      <div class="pdb10">
        <mt-cell title="我的票券" is-link>
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
  }
  .vip_card p span {
    float: right;
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
    width: 32px;
    height: 28px;
  }
  .mint-cell {
    padding: 10px;
    border-radius: 5px;
  }
  .mint-cell-wrapper {
    background-image: none;
  }
</style>
