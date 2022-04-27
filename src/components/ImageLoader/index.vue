<template>
<div class="image-loader-container">
    <img v-if="flag" :src="placeholder" class="placehold" >
    <img :src="src" @load="loadImg" :style="{opacity:originOpacity, transition:`${duration}ms`}">
    
</div>
</template>

<script>
export default {
    data(){
        return{
            flag:true,
            originOpacity:0,
        }
    },
    props:{
        src:{
            type:String,
            required:true,
        },
        placeholder:{
            type:String,
            required:true,
        },
        duration:{
            type:Number,
            default:500,
        }
    },
    // computed:{
    //     originOpacity(){
    //         return this.flag?0:1;
    //     }
    // },
    methods:{
        loadImg(){
            // console.log('a');
            var This = this;
            this.originOpacity = 1;
            setTimeout(function () {
                // This.originOpacity = 1;
                // console.log(this);
                This.$emit('load');
                This.flag = false;
            },This.duration)
        },
    }
}
</script>

<style scoped lang="less">
.image-loader-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .placehold{
        filter: blur(20px);
        position: absolute;
    }
}
</style>