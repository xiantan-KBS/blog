<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" />
      <h1>{{data.siteTitle}}</h1>
    </template>
    <Menu  v-if="data" />
    <Contact v-if="data" />
    <p class="footer" v-if="data">{{data.icp}}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import {mapState} from "vuex";
export default {
    components:{
      Avatar,
      Contact,
      Menu,
    },
    computed:mapState('setting',['data']),
    created(){
      this.$store.dispatch('setting/fetchSetting');
    }
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.site-aside-container{
  height: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: @dark;
  .avater-container{
    margin: 0 auto;
  }
  h1{
    margin-top: 12px;
    font-size: 1.2em;
    color: @gray;
    text-align: center;
  }
  .footer{
    font-size: 12px;
    text-align: center;
  }
}
</style>
