<template>
  <div class="no-data-msg">
    <img src="@/assets/images/common/no-icon.png" alt="" class="no-icon">
    <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'no-data',
  props: {
    msg: {
      type: String,
      default: '没有更多数据了'
    }
  }
}
</script>

<style lang="less">
  .no-data-msg{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    color: #c9c9c9;
    .no-icon{
      position: relative;
      right: 8px;
      width: 18px;
    }
  }
</style>
