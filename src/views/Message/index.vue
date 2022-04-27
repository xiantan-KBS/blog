<template>
  <div class="message-container" ref="container" v-loading='isLoading' >
       <CommentArea :list="data.rows" title="留言板" :subTitle="data.total" 
        :isListLoading="isLoading"
        @submit="handleSubmit" 
        v-if="data.rows"/>
        <div class="loading" v-if="data.total && hasMore" v-loading="true"></div>
  </div>
</template>

<script>
import CommentArea from "@/components/CommentArea";
import fetchData from '@/mixins/fetchData';
import {getMessage} from "@/Api/message";
import {postMessage} from "@/Api/message";
import mainScroll from "@/mixins/mainScroll";
export default {
    mixins:[fetchData({}),mainScroll('container')],
    components:{
        CommentArea,
    },
    data(){
        return {
            page:1,
            limit:10,
        }
    },
    computed:{
        hasMore(){
            return this.data.rows.length < this.data.total
        }
    },
    methods:{
        async fetchData () {
            return await getMessage(this.page,this.limit)
        },
        async handleSubmit(data,callback){
            const resp = await postMessage({...data});
            this.data.total++;
            this.data.rows.unshift(resp);
            callback("谢谢你的留言！");
        },
        //加载下一页数据
        async fetchMore () {
            //判断数据是否请求完全
            if (!this.hasMore) {
                return;
            }
            this.page++;
            this.isLoading = true;
            const resp = await this.fetchData(this.page);
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
    // window.fetchMore = this.fetchMore;
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
.message-container{
    width: 100%;
    height: 100%;   
    overflow-y: auto;
    scroll-behavior: smooth;
    padding-bottom: 200px;
    box-sizing: border-box;
    position: relative;
    .loading{
        position: relative;
    }
}
.comment-area-container{
    width: 800px;
    margin: 0 auto;
}
</style>