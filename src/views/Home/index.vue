<template>
    <div class="home-container" @wheel="handleWheel" v-loading="loading">
        <!-- <Loading v-if="isLoading"/> -->
        <ul class="banner-container" ref="ul" :style="{marginTop:changeBg}" @transitionend="lock=false">
            <li v-for="item in data" :key="item.id" >
                <!-- <div class="item">
                    <img :src="item.bigImg" alt="">
                    <h2>{{item.title}}</h2>
                    <h3>{{item.description}}</h3>
                </div> -->
                <Carousel :carousel="item" />
            </li>
        </ul>
        <!-- <div class="banner-container" ref="banner" :style="{marginTop:changeBg}" @transitionend="lock=false">
            <Carousel :item="banner" />
        </div> -->
        <div class="icon icon-up" v-show="index!==0" @click="index--">
            <Icon type="arrowUp" />
        </div>
        <div class="icon icon-down" v-show="(index !== data.length-1) && (loading===false)" @click="index++">
            <Icon type="arrowDown" />
        </div>
        <ul class="nav">
            <li v-for="(item , i) in data" 
            :key="item.id" 
            :class="{active:i === index}"
            @click="index = i"></li>
        </ul>
    </div>
</template>

<script>
import Carousel from "./Carousel";
import Icon from "@/components/Icon";
// import {getData} from "@/Api/bannerData.js";
// import fetch from '@/mixins/fetchData.js';
// import Loading from "@/components/Loading";
import {mapState} from "vuex";
export default {
    // mixins:[fetch([])],
    data(){
        return{
            // banner:[],
            //  isLoading:true,
            index:0,  //图片的索引
            height:0,  //外层ul的高度
            lock:false,  //滑动图片的开关
           
        }
    },
    components:{
        Icon,
        Carousel,
        // Loading,
    },
    computed:{
        changeBg(){
        return -this.index * this.height + 'px';
        },
        ...mapState('banner',['loading','data']),
    },
    created(){
        this.$store.dispatch('banner/fetchBanner');
    },
    // async created(){
    //     //发送Axios请求数据
    //     this.banner =  await getData();
    //     this.isLoading = false;
    // },
    mounted(){
        this.height = this.$refs.ul.clientHeight;  //高度赋值
        // this.$refs.ul.addEventListener('transitionend',function (){
        //     this.lock = false;
        // })
        window.addEventListener("resize",this.handleResize)
    },
    // updated(){
    //     console.log(this.$refs.ul);
    //      this.height = this.$refs.ul.clientHeight;  //高度赋值
    //     // this.$refs.ul.addEventListener('transitionend',function (){
    //     //     this.lock = false;
    //     // })
    //     window.addEventListener("resize",this.handleResize)
    // },
    destroyed(){
        window.removeEventListener("resize",this.handleResize)
    },
    methods:{
        //处理滚动图片
        handleWheel(e){
            if(this.lock){
                return;
            }
            if(e.deltaY === -125 && this.index > 0){
                this.index--;
                this.lock = true;  //写在外面会导致，多向上滚动了一次，没有过渡回来为false，就一直是true啦
                //  console.log("向上滚动");
                return;
            }
            if (e.deltaY === 125 && this.index < this.data.length -1) {
                // console.log("向下滚动");
                this.index++;
                this.lock = true;  //写在外面会导致，多向下滚动了一次，没有过渡回来为false，就一直是true啦
            }
        },
        handleResize(){
            this.height = window.innerHeight;
        },
        // async fetchData(){
        //     return await getData();
        // }
    }
}
</script>
<style lang="less" scoped>
@import "~@/style/var.less";
.home-container{
    width: 100%;
    height: 100%;
    .banner-container{
        width: 100%;
        height: 100%;
        transition:.5s;

    //     //测试
    //     width: 400px;
    //     height: 300px;
    //    position: absolute;
    //    overflow: visible;
    //    top: 100px;
    //    left:calc( 50% - 200px);
    //     border: 2px solid #006b8c;
    //     box-sizing: border-box;
        li{
            width: 100%;
            height: 100%;
        }
    }
    .icon{
        position: absolute;
        left: 50%;
        transform: translatex(-50%);
        font-size: 30px;
        cursor: pointer;
        color: @gray;
        &.icon-up{
            top: 20px;
            animation: up-jump 1s linear infinite;
        }
         &.icon-down{
            bottom: 20px;
            animation: down-jump 1s linear infinite;
        }
    }
    .nav{
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translatey(-50%);
        li{
            width: 10px;
            height: 10px;
            background-color: @words;
            border: 1px solid #fff;
            border-radius: 50%;
            box-sizing: border-box;
            margin-bottom: 10px;
            cursor: pointer;
            &.active{
                background: #fff;
            }
        }
    }
}
@keyframes up-jump {
    0%{
        transform: translate(-50%);
    };
    50%{
        transform: translate(-50%,15px);
    };
    100%{
        transform:translate(-50%) ;
    }
}
@keyframes down-jump {
    0%{
        transform: translate(-50%);
    };
    50%{
        transform: translate(-50%,-15px);
    };
    100%{
        transform:translate(-50%) ;
    }
}
</style>