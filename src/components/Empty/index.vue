<template>
  <div class="empty-container">
      <Icon type="empty" />
      <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    props:{
        text:{
            type:String,
            default:"无数据",
        }
    },
    components:{
        Icon
    }
}
</script>

<style scoped lang="less">
@import "~@/style/mixin.less";
@import "~@/style/var.less";
.empty-container{
   .self-center();
   color: @gray;
   text-align: center;
   .icon-container{
       font-size: 80px;
   }
}
</style>