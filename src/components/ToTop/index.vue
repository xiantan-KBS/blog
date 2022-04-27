<template>
  <div class="to-top-container" v-show="show" @click="handleReturnTop">
      Top
  </div>
</template>

<script>
export default {
    data(){
        return{
            show:false,
        }
    },
    methods:{
        showTop(dom){
        // console.log(dom.scrollTop,dom.scrollHeight,dom.clientHeight);
            // if (top >= 500) {
            //     this.show = true;
            // }
            //dom都不存在,则把top隐藏,直接退出
            if(!dom){
                this.show = false;
                return;
            }
            const top = dom.scrollTop;
            this.show = top >= 400 ? true : false;
        },
        handleReturnTop(){
            // console.log("top");
            this.$bus.$emit('returnTop',this.show);
        }
    },
    mounted(){
        this.$bus.$on('mainScroll',this.showTop);
        // this.$bus.$on('categoryAreaScroll',this.showTop);
    },
    beforeDestroy(){
        this.$bus.$on('mainScroll',this.showTop);
        // this.$bus.$on('categoryAreaScroll',this.showTop);
    }
}
</script>

<style scoped lang='less'>
@import "~@/style/var.less";
.to-top-container{
    width: 50px;
    height: 50px;
    background-color: @primary;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 50px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    z-index: 99;
    cursor: pointer;
}
</style>