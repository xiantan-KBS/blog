<template>
  <div class="about-container" v-loading="loading">
      <iframe :src="data" frameborder="0"></iframe>
      <Empty v-if="!data && !loading"/>
  </div>
</template>

<script>
// import fetchAbout from "@/Api/about";
// fetchAbout().then(r=>console.log(r))
import {mapState} from 'vuex';
import Empty from "@/components/Empty";
export default {
    computed:mapState('about',['loading','data']),
    created(){
        this.$store.dispatch('about/fetchAbout');
    },
    components:{
        Empty,
    }
}
</script>
<style scoped lang="less">
.about-container{
    width: 100%;
    height: 100%;
    position: relative;
    iframe{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
}
</style>