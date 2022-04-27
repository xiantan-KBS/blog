<template>
    <Layout>
        <div class="main-container" v-loading="isLoading" ref="container">
          <BlogDetail :blog="data"  v-if="data"/>
          <BlogComment v-if="!isLoading"/>  
        </div>
      <template #right>
        <div class="right-container" v-loading="isLoading">
          <BlogToc :toc="data.toc" v-if="data.toc" />
        </div>
      </template> 
    </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogToc from "./components/BlogToc";
import BlogComment from "./components/BlogComment";
import {getBlog}  from "@/Api/blogData";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import titleControl from "@/utils/titleControl";
export default {
  mixins:[fetchData({}),mainScroll("container")],
  components:{
    Layout,
    BlogDetail,
    BlogToc,
   BlogComment
  },
  methods:{
    async fetchData(){
     let resp = await getBlog(this.$route.params.id);
    if (!resp) {
      //文章不存在
      this.$router.push('/404');
      return;
    }
      titleControl.routerTitle(resp.title);
      return resp;
    },
    // handleScroll(){
    //   this.$bus.$emit('mainScroll',this.$refs.container);
    // },
    // handleReturnTop(){
    //     this.$refs.container.scrollTop = 0;
    // }
  },
  //给元素添加事件必须在mounted函数中，因为这时才生成了真实dom树
  // mounted(){
  //   //鼠标滚轮滚动就触发事件给事件总线，让其他监听者处理相对于的函数
  //   this.$refs.container.addEventListener('scroll',this.handleScroll);
  //   this.$bus.$on('returnTop',this.handleReturnTop);
  // },
  // beforeDestroy(){
  //   this.$refs.container.removeEventListener('scroll',this.handleScroll);
  //   //组件销毁后，dom元素也没了，就是undefined,触发事件，让其他监听者监听;
  //   this.$bus.$emit('mainScroll');
  //   this.$bus.$off('returnTop',this.handleReturnTop);
  // },
  updated(){
    const hash = location.hash;
    location.hash = "";
    setTimeout(function (){
      location.hash = hash;
    },50)
  }
}
</script>

<style scoped lang="less">
.main-container,.right-container{
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  position: relative;
  scroll-behavior: smooth;
}
.right-container{
  overflow: auto;
  width: 240px;
}
h1{
  margin-top: 30px;
}
</style>