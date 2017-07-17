<template>
  <div>
    <div class="pd10">
      <div class="avatar_box">
        <mt-cell title="头像" is-link>
          <span>
            <img src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" class="avatar">
          </span>
        </mt-cell>
      </div>

      <mt-cell title="名字" is-link></mt-cell>
      <mt-cell title="微信号" value="18813364620"></mt-cell>
      <mt-cell title="我的二维码" is-link>
        <span>
          <img slot="icon" src="../../assets/image/code.png" style="width: 18px;height: 18px;">
        </span>
      </mt-cell>
      <mt-cell title="更多" is-link to="/more-information"></mt-cell>
    </div>

    <div class="pd10">
      <mt-cell title="我的地址" is-link></mt-cell>
    </div>
  </div>
</template>

<style>
  .pd10 {
    padding: 10px 0;
  }
  img {
    width: 24px;
    height: 24px;
  }
  .avatar {
    width: 48px;
    height: 48px;
  }
  .avatar_box .mint-cell-wrapper {
    padding:  10px;
  }
</style>
