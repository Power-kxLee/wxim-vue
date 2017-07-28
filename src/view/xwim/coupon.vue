<!--朋友优惠券-->
<template>
  <div class='many_conetnt'>
    <div class="vip_card">
      <p>会员卡<span>无门槛</span></p>

      <div class="card">

        <div class="cell">
          <img slot="icon" src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" class="avatar">
          <div class="cell_right">
            <p>友宝</p>
            <h3>0.1元代金券</h3>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
  .vip_card {
    margin: 10px;
    background: #fff;
    padding: 10px;
  }
  .vip_card p {
    overflow: hidden;
    padding: 5px 0;
  }
  .vip_card p span {
    float: right;
    color: #f69c00;
    font-size: 12px;
    margin-top: 2px;
    background: #fff;
    border: 1px solid #f69c00;
    padding: 1px 4px;
    border-radius: 20px;
  }
  .vip_card .card {
    border-radius: 5px;
    position: relative;
    height: 80px;
  }
  .vip_card .card .cell {
    height:80px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
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
  .avatar {
    width: 48px;
    height: 48px;
  }
  .card .avatar {
    vertical-align:middle;
    border-radius:50%;
  }
</style>
