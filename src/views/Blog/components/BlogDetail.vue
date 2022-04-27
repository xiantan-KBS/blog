<template>
<!-- 文章内容页 -->
  <div class="blog-detail-container">
      <h1>{{blog.title}}</h1>
      <aside class="aside" v-if="blog.id">
        <span>日期：{{formatDate(blog.createDate)}}</span>
        <span>浏览：{{blog.scanNumber}}</span>
        <a href="#form">评论：{{blog.commentNumber}}</a>
        <RouterLink :to="{name:'BlogCategory',params:{
          category:id
        }}">{{categoryId}}</RouterLink> 
      </aside>
      <div v-html="blog.htmlContent" class="markdown-body">
      </div>
  </div>
</template>
<script>
import formatDate from "@/utils/formatDate";
import "@/style/markdown.css";
import "highlight.js/styles/github.css";
export default {
  props:{
    blog:{
      type:Object,
      required:true,
    }
  },
  computed:{
    categoryId(){
      if(this.blog.category){
          return this.blog.category.name;
      }
    },
    id(){
      if(this.blog.category){
          return this.blog.category.id;
      }
    },
  },
  methods:{
    formatDate,
  }
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.aside{
  margin: 10px 0;
  span,a{
    font-size: 12px;
    color:@gray;
    margin-right: 15px;
  }
}
.markdown-body{
  margin: 2em 0;
}
</style>