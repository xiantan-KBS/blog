<template>
  <ul class="right-list-container">
      <li v-for="(item , i) in data" :key="i">
          <span :class="{active:item.isSelect}" @click="handleSelect(item)">{{item.name}}</span>
           <span v-if="item.articleCount" class="aside" :class="{active:item.isSelect}" @click="handleSelect(item)">{{item.articleCount}}</span>
          <!-- 递归循环组件 -->
          <RightList :data="item.children"  @select="handleSelect" v-if="item.children"/> 
      </li>
  </ul>
</template>

<script>
export default {
    //[{name="a",isSelect:false},{name="b",isSelect:true,children:[{name="b-1",isSelect:false},{name="b-2",isSelect:false}]}]
    props:{
        data:{
            type:Array,
            dafault: ()=> [],
        }
    },
    name:"RightList",
    methods:{
        handleSelect(data){
            // console.log(data);
           if(!data.isSelect){
                this.$emit('select',data);
           }
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.right-list-container{
    margin-left: 1em;
    li{
        cursor: pointer;
        margin-top: 10px;
        .right-list-container{
        margin-left: 2em;
    }
    }
    span{
        line-height: 30px;
        font-size: 14px;
        &.active{
            font-weight: bold;
            color: @warn;
        }
    }
}
.aside{
    font-size: 14px;
    color: @gray;
    margin-left: 1em;
}
</style>