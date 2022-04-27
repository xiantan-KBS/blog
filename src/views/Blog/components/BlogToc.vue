<template>
<!-- 文章目录 -->
  <div class="blog-toc-container" >
    <h2>目录</h2>
    <RightList :data="newToc" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import debounce from "@/utils/debounce";
export default {
  components:{
    RightList,
  },
  props:{
    toc:Array,
  },
  data(){
    return{
      curActive : '',
    }
  },
  computed:{
    //通过计算属性生成新的带有isSelect属性的toc数组
    newToc(){
      const getNewtoc = (toc=[])=>{
        return toc.map(t=>({
          ...t,
          isSelect:t.anchor === this.curActive,
          children:getNewtoc(t.children)   //递归
        }))
      };
      return getNewtoc(this.toc);
    },
    doms(){
      let doms=[];
      const getDoms = (toc=[]) => {
        for (const t of toc) {
          // console.log(t.anchor);
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            getDoms(t.children);
          }
        }
      };
      getDoms(this.toc);
      return doms;
    }
  },
  methods:{
    handleSelect(data){
      location.hash = data.anchor;
    },
    setSelect(){
      this.curActive =""; //回到顶部初始化为空
      const range = 200; //给定200的范围
      for (const dom of this.doms) {
        //判断有没有这个dom元素的存在，没有直接跳过这次循环
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;  //当前的dom离可视区顶部的距离
        //当dom在离可视区顶部0-200的距离时，则是选中状态，结束函数
        
        if (top >= 0 && top <= range) {
          this.curActive = dom.id;
          return;
        }else if( top > range) {
          return;
        }else{
          this.curActive = dom.id;
        }
      }
    }
  },
  created(){
    //频繁触发，浪费性能，因此需要防抖处理
    this.newSetSelect = debounce(this.setSelect,50);
    this.$bus.$on('mainScroll',this.newSetSelect);
  },
  destroyed(){
    this.$bus.$off('mainScroll',this.newSetSelect);
  }
}
</script>

<style scoped lang="less">
.blog-toc-container{
  height: 100%;
  h2{
    font-size: 1em;
    letter-spacing: 3px;
  }
}
</style>