<template>
<div>
  <Page :total="total" :current="current" @pageChange="changePage($event)"/>
  </div>
</template>

<script>
import Page from "./";
export default {
  components:{
    Page,
  },
  data(){
    return{
      current:7,
      total:300,
    }
  },
  methods:{
    changePage(newData){
      this.current = newData;
      console.log('加载新的页面数据',newData);
    }
  },
  beforeCreate(){
    console.log("beforeCreate");
  },
  created(){
    console.log("created");
  },
  beforeMount(){
    console.log(beforeMount);
  },
mounted(){
  console.log("mounted");
}
}
</script>

<style scoped>

</style>
