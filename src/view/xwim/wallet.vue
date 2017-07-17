<template>
  <div>
    <div class="top"></div>
    <div class="grid-box">

      <div class="grid-view">
        <p>腾讯服务</p>
        <div class="grids">
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>信用卡还款</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>微粒贷借钱</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>手机充值</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>理财通</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>生活缴费</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>Q币充值</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>城市服务</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>腾讯公益</p>
          </a>
        </div>
      </div>

      <div class="grid-view">
        <p>限时推广</p>
        <div class="grids">
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>摩拜单车</p>
          </a>
        </div>
      </div>

      <div class="grid-view">
        <p>第三方服务</p>
        <div class="grids">
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>火车票机票</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>滴滴出行</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>京东优选</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>美团外卖</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>电影演出赛事</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>吃喝玩乐</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>酒店</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>蘑菇街女装</p>
          </a>
          <a href="#">
            <div class="grid-icon">
              <img src="../../assets/image/newfriend.png" alt="">
            </div>
            <p>58到家</p>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scope>
  .pd10 {
    padding: 10px 0;
  }
  img {
    width: 24px;
    height: 24px;
  }
  .grid-view {
    width: 100%;
  }
  .grid-view>p {
    color: #999;
    font-size: 12px;
    padding: 5px 10px;
  }
  .grid-view .grids {
    position: relative;
    overflow: hidden;
    background: #fff;
  }
  .grid-view .grids a {
    position: relative;
    float: left;
    padding: 20px 10px;
    width: 33.33333333%;
    box-sizing: border-box;
  }
  .grid-view .grids a .grid-icon {
    width: 28px;
    height: 28px;
    margin: 0 auto;
  }
  .grid-view .grids a .grid-icon>img {
    width: 100%;
    height: 100%;
  }
  .grid-view .grids a>p {
    margin-top: 5px;
    display: block;
    text-align: center;
    color: #000;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .grid-view .grids:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .grid-view .grids:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    border-left: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
  }
  .grid-view .grids a:before {
    content: " ";
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    border-right: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
  }
  .grid-view .grids a:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
</style>
