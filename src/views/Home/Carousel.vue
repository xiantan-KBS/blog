<template>
  <div class="carousel-container" ref="container" 
  @mousemove="mousePosition"  @mouseleave="mouseleave">
      <div class="carousel" ref="img" :style="imgMove">
        <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" @load="wordShow" />
        </div>
      <p class="title" ref="title">{{carousel.title}}</p>
      <p class="desc" ref="desc">{{carousel.description}}</p>
  </div>
</template>
<script>
import ImageLoader from "@/components/ImageLoader";
export default {
    data(){
        return{
            tWidth:0,
            dWidth:0,
            container:{},
            img:{},
            mouseX:0,
            mouseY:0
        }
    },
    components:{
        ImageLoader,
    },
    props:['carousel'],
    computed:{
        imgMove(){
            if(!this.container.w || !this.img.w){
                return;
            }
            //  console.log(this.container.w,this.img.w)
            const disX =this.img.w -  this.container.w; //横向多出的距离
            const disY =this.img.h -  this.container.h; //纵向多出的距离
            // console.log(disX,disY);
            //公式比例： -disx / this.container.w ===  ? / mouseX;
            const left = -disX / this.container.w * this.mouseX;
            const top = -disY / this.container.h * this.mouseY;
            // console.log(left,top)
            return {
                transform:`translate(${left}px,${top}px)`,
            }
        }
    },
    mounted(){
        // console.log(this.$refs);
        //标题的宽度
        this.tWidth = this.$refs.title.clientWidth;
        //描述的宽度
        this.dWidth = this.$refs.desc.clientWidth;

        //外层容器对象的宽高
        // this.container.w = this.$refs.container.clientWidth,
        // this.container.h = this.$refs.container.clientHeight;
        this.container = {
            w:this.$refs.container.clientWidth,
            h:this.$refs.container.clientHeight,
        }
        //里头图片对象的宽高
        // this.img.w = this.$refs.img.clientWidth;
        // this.img.h = this.$refs.img.clientHeight;
        this.img = {
            w:this.$refs.img.clientWidth,
            h:this.$refs.img.clientHeight,
        }

        //设置鼠标的位置在中间，最开始保持图片的位置在中间
        this.mouseX = this.container.w / 2;
        this.mouseY = this.container.h / 2;
        // console.log(this.container,this.img)
    },
    methods:{
        wordShow(){
            // console.log('图片加载完成')
            //tilte的宽度变化
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            //强行渲染一次
            this.$refs.title.clientWidth;
            // this.$refs.title.style.transition = '1s';
            this.$refs.title.style.width = this.tWidth + 'px';


            //description的宽度变化
            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
            this.$refs.desc.clientWidth;
             this.$refs.desc.style.width = this.dWidth + 'px';
        },
        mousePosition(e){
            // console.log(e)
            const rect = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.pageX - rect.left;
            this.mouseY =e.pageY -  rect.top;
            // console.log(this.mouseX,this.mouseY)
        },
        mouseleave(){
            this.mouseX = this.container.w / 2;
            this.mouseY = this.container.h / 2;
        }
    }
}
</script>
<style scoped lang="less">
@import "~@/style/var.less";
.carousel-container{
    width: 100%;
    height: 100%;
    position: relative;
    color: #fff;
    overflow: hidden;
    .carousel{
        width: 110%;
        height: 110%;
        // position: absolute;
        // left: 0px;
       transition: .2s;
     }
        .title,
        .desc{
            position: absolute;
            left: 20px;
            letter-spacing: 3px;  //文字间隔
            white-space: nowrap;  //不换行
            opacity: 0; //一开始不显示
            overflow: hidden;  //没有宽度直接隐藏
            text-shadow: 1px 0 0 rgba(0, 0, 0, .5),0 1px 0 rgba(0, 0, 0, .5),-1px 0 0 rgba(0, 0, 0, .5),0 -1px 0 rgba(0, 0, 0, .5);
        }
        .title{
            top:calc(50% - 30px);
            font-size: 1.8em;
            transition: 1s;
        }
        .desc{
            top:calc(50% + 30px);
            font-size: 1.2em;
            transition: 1.5s 1s;
            color: lighten(@lightWords,20%);
        }
    }
</style>
