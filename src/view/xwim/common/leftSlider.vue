<template>
  <div class="left-delete">
    <div class="move"
         @touchstart="_touchStart"
         @touchmove="_touchMove"
         @touchend="_touchEnd"
         :style="txtStyle">
      <slot></slot>
    </div>
    <div class="labelIcon" :style="zIndex"  @click="labelItem(index)"></div>
    <div class="deleteIcon" :style="zIndex"  @click="deleteItem(index)"></div>
  </div>
</template>

<script>
  export default {
    props: {
      index: Number
    },
    data () {
      return {
        startX: 0,       // 触摸位置
        moveX: 0,       // 滑动时的位置
        disX: 0,       // 移动距离
        txtStyle: '',
        delWidth: 200,
        top: '',
        zIndex: 'z-index:-1'
      }
    },
    methods: {
      _touchStart: function (ev) {
        ev = ev || event
        if (ev.touches.length === 1) {
          // 手指按下的时候记录按下的位置
          this.startX = ev.touches[0].clientX
//          console.log(this.startX)
        }
      },
      _touchMove: function (ev) {
        ev = ev || event
        if (ev.touches.length === 1) {
          // 滑动过程中的实时位置
          this.moveX = ev.touches[0].clientX
          // 滑动过程中实时计算滑动距离
          this.disX = this.startX - this.moveX
          console.log('disX==>',this.disX)
          // 如果是向右滑动或者只是点击，不改变滑动位置
          if (this.disX < 0 || this.disX === 0) {
            console.log('没有移动')
            this.txtStyle = 'transform:translateX(0rem)'
          } else if (this.disX > 0) {
//            如果是向左滑动，则实时给这个根元素一个向左的偏移-left，当偏移量到达固定值delWidth时，固定元素的偏移量为 delWidth
            this.txtStyle = 'transform:translateX(-' + this.disX / 100 + 'rem)'
            if (this.disX >= this.delWidth / 100) {
              this.txtStyle = 'transform:translateX(-' + this.delWidth / 100 + 'rem)'
              this.zIndex = 'z-index:' + 10 + 'rem'
            }
          }
        }
      },
      _touchEnd: function (ev) {
        if (event.changedTouches.length === 1) {
          this.startX = 0
          this.zIndex = 'z-index:' + -1 + 'rem'
          console.log(event.changedTouches[0].clientX)
          // 手指移动结束后的水平位置
          let endX = event.changedTouches[0].clientX
          // 触摸开始与结束,手指移动的距离
          this.disX = this.startX - endX
          // 如果距离小于删除按钮的1/2，不显示删除按钮
        }
      },
      labelItem: function (index) {
        this.$emit('lebelIndex', index)
      },
      deleteItem: function (index) {
        this.$emit('deletes', index)
      }
    }
  }
</script>

<style>
  .left-delete{
    width:100%;
    height:100%;
    position:relative;
    z-index:2;
  }
  .move{
    position: relative;
  }
  .labelIcon{
    width: 32px;
    height:100%;
    position: absolute;
    right:40px;
    top:0;
    background:url(../../../assets/image/label.png) no-repeat center center;
    background-size: contain;
  }
  .deleteIcon{
    width: 32px;
    height:100%;
    position: absolute;
    right:4px;
    top:0;
    background:url(../../../assets/image/delete.png) no-repeat center center;
    background-size: contain;
  }
</style>
