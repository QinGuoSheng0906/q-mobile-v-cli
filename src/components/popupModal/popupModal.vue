<!--
  popup 弹窗封装
  秦国胜
  2019/05/23
-->
<template>
  <mt-popup v-model="modalVisible"  :position="position" class="popup-modal-container" :closeOnClickModal="false">
    <div class="popup-operation">
      <div class="popup-operation-cancel popup-operation-btn" @click="cancelPopup">取消</div>
      <div class="popup-operation-confirm popup-operation-btn bg-1" @click="confirmPopup">确定</div>
    </div>
    <slot></slot>
  </mt-popup>
</template>

<script>
export default {
  name: 'popupModal',
  data() {
    return {
      modalVisible: false
    }
  },
  props: {
    popupVisible: Boolean,
    position: String,
    cancelPopup: Function,
    confirmPopup: Function
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    popupVisible (newQuestion, oldQuestion) {
      this.modalVisible = this.popupVisible
      this.popupVisible ? this.closeTouch() : this.openTouch()
    }
  },
  methods: {
    // 解决滚动穿透
    closeTouch () {
      document.getElementsByTagName('body')[0].addEventListener('touchmove', this.handler, { passive: false })// 阻止默认事件
    },
    openTouch () {
      document.getElementsByTagName('body')[0].removeEventListener('touchmove', this.handler, { passive: false })// 打开默认事件
    },
    handler(e) {
      e.preventDefault()
    }
  }
}
</script>

<style lang="less">
  .popup-modal-container{
    width: 100%;
    .popup-operation{
      display: flex;
      flex-flow: row nowrap;
      //border-bottom: 1px solid #c9c9c9;
      .popup-operation-btn{
        padding: 15px 0;
        width: 50%;
        font-size: 14px;
        color: #333;
        text-align: center;
        letter-spacing: 5px;
      }
      .popup-operation-cancel{
        border-bottom:1px solid #d6d6d6;
      }
      .popup-operation-confirm{
        color: #fff;
      }
    }
    .picker-center-highlight:before, .picker-center-highlight:after{
      height: 1px;
      background: #a5a2a2;
    }
    .address-divide{
      margin: 0 30px;
    }
    .picker-item{
      font-size: 14px;
    }
    .picker-selected {
      font-weight: bold;
    }
  }
</style>
