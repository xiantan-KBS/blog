<template>
<!-- 文章分类 -->
  <div class="blog-list-container" v-loading="isLoading">
      <h1>文章分类</h1>
  <RightList :data="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from './RightList';
import fetchData from "@/mixins/fetchData"; //混合
import {getBlogType} from "@/Api/blogData";  //axios获取数据

export default {
    mixins:[fetchData([])],
    components:{
        RightList
    },
    computed:{
        id(){
            return +this.$route.params.category || -1; //当前路由的id
        },
        limit(){
            return +this.$route.query.limit || 10;  //当前路由的页容量
        },
        list(){
            const totalArticleCount = this.data.reduce((a,b)=>a+b.articleCount,0);
            const result =[{name:'全部',articleCount:totalArticleCount,id:-1,},
            ...this.data,
            ];
            // console.log(this.data)
            return result.map((item,i)=>({
            ...item,
            articleCount:`${item.articleCount}篇`,
            isSelect:item.id === this.id,
            }));
        }
    },
    methods:{
        async fetchData(){
            return await getBlogType();
        },
        handleSelect(item){
            // console.log(item,this.list);
            // item.isSelect = true;
            const query = {
                page : 1,
                limit: this.limit,
            };
            if (item.id === -1) {
                    // this.$router.push({
                    // name:"Blog",
                    // query,
                    // })
                    this.$router.push('article');
            }else{
                ///article/cate/10?page=4&limit=20
                this.$router.push({
                name:"BlogCategory",
                query,
                params:{
                    category:item.id,
                }
                })
            }
    },
    }
}
</script>

<style lang="less" scoped>
.blog-list-container{
    width: 240px;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
    position: relative;
    h1{
        font-size: 16px;
        letter-spacing: 2px;
    }
}
</style>