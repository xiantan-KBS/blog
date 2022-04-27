<template>
<!-- 总数量很稳定，不会频繁改动，所以使用v-if --> 
  <div class="page-container" v-if=" pageNumber >1"> 
    <a @click="eventHandle(1)"
     >|&lt;&lt;</a>
    <a  @click="eventHandle(current-1)"
    class="n" v-show="current !== 1" 
    >&lt;上一页</a>
    <a @click="eventHandle(n)" 
        v-for="(n , index ) in numbers" 
        :key="index"
        :class="{active: current === n}"
    >{{n}}</a>
    <a  @click="eventHandle(current+1)"
     class="n" v-show="current !== pageNumber"
    >下一页&gt;</a>
    <a @click="eventHandle(pageNumber)"
    >&gt;&gt;|</a>
  </div>
</template>

<style lang="less" scoped>
@import "~@/style/var.less";  //~@代表工程的src目录
.page-container{
    display: flex;
    justify-content: center;
    margin: 5px 0;
    a{
        border-radius: 6px;
        text-align: center;
        line-height: 36px;
        width: 36px;
        height: 36px;
        margin-right: 10px;
        color: #3951b3;
        cursor: pointer;
        &.n{
            width: 80px;
        }
        &.active,
        &:hover{
            background-color: #4e6ef2;
            color: #fff;
        }
    }
}
</style>


<script>
export default {
    props:{
        current:{  //当前选中页码
            type:Number,
            default:1,
        },
        total:{   //总数据量
            type:Number,
            default:0,
        },
        limit:{  //一页码显示多少条数据
            type:Number,
            default:10,
        },
        visible:{  //一次显示多少页码
            type:Number,
            default: 10,
        },
    },
    computed:{
        pageNumber(){  //总页数
            return Math.ceil(this.total / this.limit);
        },
        minVisible(){
            let min = this.current - Math.floor(this.visible / 2);
            if(min < 1){
                min =1;
            }
            return min;
        },
        maxVisible(){
            let max = this.minVisible + this.visible - 1;
            if(max > this.pageNumber){
                max = this.pageNumber;
            };
            return max;
        },
        numbers(){
           let nums = [];
           for (let i = this.minVisible; i <= this.maxVisible; i++) {
               nums.push(i);
           };
           return nums;
        }
    },
    methods:{
        eventHandle(newPage){
            // console.log(e,newPage);
            if(newPage < 1){
                newPage = 1;
            };
            if (newPage > this.pageNumber) {
                newPage = this.pageNumber;
            };
            if (newPage === this.current) {
                return;
            }
            this.$emit("pageChange",newPage)   //抛出事件，给父组件
        }
    }
}
</script>

