<template>
  <div class="icon-container">
      <i v-for="(icon ,i) in classMap" :key="i"
  class="iconfont" :class="icon"></i>
  </div>
</template>

<script>
export default {
    data(){
        return {
            classMap:["iconzhuye","iconzhengque","iconcuowu","iconguanbi","iconjinggao","iconxinxi",
            "iconblog","iconcode","iconset_about_hov","iconweixin","iconemail","icongithub",
            "iconsign_qq","iconiconfonticonfonti2copy","iconiconfonticonfonti2","iconempty","iconliuyan",]
        }
    },
    props:{
        type:{
            type:String,
            required:true,
        }
    },
    computed:{
        getClass(){
            return this.classMap[this.type]
        }
    }
}
</script>

<style scoped lang="less">
 @import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
 .icon-container{
     width: 300px;
     height: 300px;
     border: 1px solid;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     .iconfont{
         font-size: 30px;
         height: 30px;
     }
 }
</style>