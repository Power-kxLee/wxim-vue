<template>
  <div class='many_conetnt'>
      <div class="pd10">
          <mt-cell title="朋友圈">
              <img slot="icon" src="../../assets/image/friends.png">
              <span class="red_point">
                  <img slot="icon" src="../../assets/image/friends.png">
              </span>
          </mt-cell>
      </div>
      <div class="pd10">
          <mt-cell title="扫一扫" is-link>
              <img slot="icon" src="../../assets/image/scan.png">
          </mt-cell>
          <mt-cell title="摇一摇" is-link>
              <img slot="icon" src="../../assets/image/shake.png">
          </mt-cell>
      </div>
      <div class="pd10">
          <mt-cell title="附近的人" is-link>
              <img slot="icon" src="../../assets/image/near.png">
          </mt-cell>
          <mt-cell title="漂流瓶" is-link>
              <img slot="icon" src="../../assets/image/bottle.png">
          </mt-cell>
      </div>
      <div class="pd10">
          <mt-cell title="购物" is-link>
              <img slot="icon" src="../../assets/image/shopping.png">
          </mt-cell>
          <mt-cell title="游戏" is-link>
              <span class="small">英雄无敌首发送现金</span>
              <img slot="icon" src="../../assets/image/game.png">
          </mt-cell>
      </div>
      <div class="pd10">
          <mt-cell title="小程序" is-link>
              <img slot="icon" src="../../assets/image/applet.png">
          </mt-cell>
      </div>
  </div>
</template>

<style>
    .pd10 {
        padding: 10px 0;
    }
    .small {
        color: #999;
        font-size:12px;
    }
    img {
        width: 24px;
        height: 24px;
    }
    .red_point {
        position: relative;
    }
    .red_point:after {
        content: '';
        width: 8px;
        height: 8px;
        background: red;
        position: absolute;
        top:-2px;
        right:0;
        -webkit-border-radius:50%;
        -moz-border-radius:50%;
        border-radius:50%;
    }
</style>