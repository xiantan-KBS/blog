<template>
  <div class="app-container">
     <Layout>
         <template #left  v-if="show" >
             <SiteAside  />
         </template>
         <template #default>
           <RouterView />
         </template>
     </Layout>
     <ToTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import  ToTop from "./components/ToTop";
import "@/Mock";
export default {
    components:{
        Layout,
        SiteAside,
        ToTop
    },
    data(){
      return{
        show:true,
      }
    },
    watch:{
      ["$route.name"]:{
        handler(newVal){
          if (newVal === 'notFound') {
              this.show=false;
          }else{
            this.show = true;
          }
        },
        immediate:true,
      }
    },
}
</script>

<style scoped>
.app-container{
  width: 100vw;
  height: 100vh;
}
</style>


