<template>
<!-- 文章的评论 -->
  <div class="blog-comment-container" >
        <CommentArea :list="data.rows" title="评论列表" :subTitle="data.total" 
        :isListLoading="isLoading"
        @submit="handleSubmit" />
        <div v-loading="isLoading"></div>
  </div>
</template>

<script>
import {getPageComment} from "@/Api/blogData";
import CommentArea from "@/components/CommentArea";
import fetchData from "@/mixins/fetchData";
import {postComment} from "@/Api/blogData";
export default {
    mixins:[fetchData({})],
    components:{
         CommentArea
    },
    data(){
        return{
            page:1, //存贮当前第几页
            limit:10,
        }
    },
    computed:{
        hasMore(){
            return this.data.rows.length < this.data.total
        }
    },
    methods:{
        async fetchData(){
            return await getPageComment(this.$route.params.id)
        },
        async handleSubmit(data,callback){
            const result = await postComment({
                blogId:this.$route.params.id,
                ...data,
            });
            this.data.rows.unshift(result);
            this.data.total++;
            callback('评论成功');
            // this.$popup({
            //        container:this.$refs.form,
            //        type:"success",
            //        text:"评论成功",
            //        duration:1000,
            //        callback(){
            //            console.log('完成了');
            //            callback();
            //        }
            //    })
        },
        //加载下一页数据
        async fetchMore () {
            //判断数据是否请求完全
            if (!this.hasMore) {
                return;
            }
            this.page++;
            this.isLoading = true;
            const resp = await this.fetchData();
            this.data.rows = this.data.rows.concat(resp.rows);
            this.isLoading = false;
        },
        handleComment(dom){
            // 防止频繁触发把所有数据直接一次请求到了，应该判断每次数据是否请求完成，否则不进行下一次请求
            //dom元素销毁后，直接返回
            if (this.isLoading || !dom) {
                return;
            }
            const range = 100;
            const dif = Math.abs((dom.clientHeight + dom.scrollTop) - dom.scrollHeight);
            if(dif <= 100){
                this.fetchMore();
            }
        }
    },
    // created(){
    //     window.fetchMore= this.fetchMore;
    // },
    mounted(){
        this.$bus.$on('mainScroll',this.handleComment);
    },
    beforeDestroy(){
        this.$bus.$off("mainScroll",this.handleComment);
    }
}
</script>

<style scoped lang="less">
.blog-comment-container{
    margin-bottom: 200px;
    div{
        position: relative;
    }
}
</style>