
<template>
<!-- 博客主页，多篇文章 -->
  <div class="blog-category-container" v-loading="isLoading" ref="container">
    <!-- 一篇文章 -->
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink :to="{
            name:'Detail',
            params:{
              id:item.id,
            }
          }">
            <img
              v-lazy="item.thumb"
              :alt="item.title"
              :title="item.title"
            />
          </RouterLink>
        </div>
        <div class="main">
          <router-link :to="{
            name:'Detail',
            params:{
              id:item.id,
            }
          }">
            <h2>{{item.title}}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{formatDate(item.createDate)}}</span>
            <span>浏览：{{item.scanNumber}}</span>
            <span>评论：{{item.commentNumber}}</span>
            <RouterLink 
            :to="{name:'BlogCategory',params:{category:item.category.id}}"
            class="">{{item.category.name}}</RouterLink>
          </div>
          <div class="desc">
           {{item.description}}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页 -->
  <Page v-if="data.total" :current="routeInfo.page" :limit="routeInfo.limit" :total="data.total" 
  @pageChange="handlePageChange" />
  <Empty v-if="!data.total && !isLoading"/>
  </div>
</template>
<style lang="less" scoped>
@import "~@/style/var.less";
.blog-category-container {
  line-height: 1.7;
  position: relative;
  padding: 20px 35px;
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      font-size: 1.8em;
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
.page-container{
    margin-top: 20px;
    flex-wrap: nowrap;
    min-width: 600px;
  }
</style>
<script>
import Page from "@/components/Page";
import  {getBlogs}  from "@/Api/blogData";  //远程获取数据函数
import fetchData from "@/mixins/fetchData" //混合函数
import formatDate from "@/utils/formatDate"; //格式化时间戳
import mainScroll from "@/mixins/mainScroll";
import Empty from "@/components/Empty";
export default {
  mixins:[fetchData({total:0,rows:[]}),mainScroll("container")],
  components:{
    Page,
    Empty,
  },
  methods:{
    formatDate, 
    async fetchData() {
      return await getBlogs();
    },
    handlePageChange(newpage){
      // console.log(this.$route);
      const query = {
        page : newpage,
        limit: this.routeInfo.limit,
      }
      ///article?page=4&limit=20
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name:"Blog",
          query,
        })
      }else{
        ///article/cate/10?page=4&limit=20
        this.$router.push({
          name:"BlogCategory",
          query,
          category:this.routeInfo.categoryId,
        })
      }
    },
    //  handleScroll(){
    //   this.$bus.$emit('categoryAreaScroll',this.$refs.container);
    // },
    // handleReturnTop(show){
    //     this.$refs.container.scrollTop = 0;
    // }
  },
  computed:{
    //路由变化信息
    routeInfo(){
      // console.log(this.$route);
      const categoryId = +this.$route.params.category || -1;
      const page = +this.$route.query.page  || 1;
      const limit = +this.$route.query.limit  || 10;
      return{
        categoryId,
        page,
        limit
      }
    }
  },
  watch:{
    $route:{
     async  handler(){
      //  console.log(this.routeInfo)
       const page = this.routeInfo.page;
       const limit = this.routeInfo.limit;
       const categoryId = this.routeInfo.categoryId;
        this.isLoading = true;
        this.data = await getBlogs(page,limit,categoryId);
        this.$refs.container.scrollTop = 0;
        this.isLoading = false;
      }
    }
  },
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
}
</script>
