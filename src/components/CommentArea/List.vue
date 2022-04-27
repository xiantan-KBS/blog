<template>
  <div class="list-container">
      <ul >
        <li v-for="item in data" :key="item.id">
          <Avatar :size="50" :url="item.avatar"/>
          <div class="info">
            <h2 class="name">{{item.nickname}}</h2>
          <p class="comment">{{item.content}}</p>
            <span class="time">{{formatDate(item.createDate,true)}}</span>
          </div>
        </li>
        <!-- <li>
          <Avater :size="50" url="https://img2.baidu.com/it/u=3435578013,572140249&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"/>
          <div class="info">
            <h2 class="name">小明</h2>
          <p class="comment">步写约作快华图数已义知结日育级听。步写约作快华图数已义知结日育级听。步写约作快华图数已义知结日育级听
            。步写约作快华图数已义知结日育级听。步写约作快华图数已义知结日育级听。</p>
            <span class="time">2022-02-12 15:35:10</span>
          </div>
        </li> -->
      </ul>
  </div>
</template>
<script>
import Avatar from "@/components/Avatar";
import formatDate from "@/utils/formatDate";
export default {
  components:{
    Avatar,
  },
  props:{
    data:Array,
  },
  methods:{
    formatDate,
  }
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.list-container{
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  // margin-bottom: 200px;
  position: relative;
  ul{
    // border: 1px solid;
    // margin-top: 10px;
    li{
      display: flex;
      height: 100px;
      padding: 15px 0;
      border-bottom:2px solid @gray; 
     .info{
       margin-left: 15px;
       position: relative;
       width: 100%;
       overflow: hidden;
        h2{
        color: lighten(@success,-2%);
        font-size: 18px;
      }
      P{
         font-size: 16px;
         margin-top: 15px;
      }
      .time{
        position: absolute;
        right: 10px;
        top: 2px;
        font-size: 12px;
        color: @gray;
      }
     }
    }
  }
}
</style>


