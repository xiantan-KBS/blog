<template>
  <div class="layout-container">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="main">
        <slot></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
</template>
<style scoped lang="less">
.layout-container{
  display: flex;
  height: 100%;
  .left{
    // width: 250px;
    flex: 0 0 auto;
  }
  .main{
    width: 100%;
    flex: 1 1 auto;
    overflow: hidden;
    position: relative;
  }
  .right{
    // width: 150px;
    flex: 0 0 auto;
  }
}

</style>