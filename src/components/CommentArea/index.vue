<template>
  <div class="comment-area-container" >
      <!-- @submit="handleSubmit" v-on:submit="handleSubmit"  v-on="{submit:handleSubmit}"-->
      <Form  v-on="$listeners"/>  
        <h2>{{title}}
            <span>({{subTitle}})</span>
        </h2>
      <List :data="list"/>
  </div>
</template>

<script>
import Form from "./Form";
import List from "./List"
export default {
    components:{
        Form,
        List,
    },
    props:{
    title:{
        type:String,
        default:'',
    },
    subTitle:{
      type:Number,
      default:0,
    },
    list:{
      type:Array,
      default:null,
    },
    isListLoading:{
      type:Boolean,
      dafault:false,
    }
  },
  methods:{
      handleSubmit(data,callback){
          // console.log(data,callback);
          this.$emit('submit',data,callback); //继续往上抛出事件
      }
  },
  // async mounted(){
  //   console.log(this.$listeners.submit);
  //   await this.$listeners.submit(1,()=>{
  //     console.log(1)
  //   })
  // }
}
</script>

<style scoped lang="less">
.comment-area-container{
  position: relative;
  h2{
     padding-left: 20px;
     font-size: 18px;
     margin-bottom: 20px;
     span{
       margin-left: 10px;
     }
 }
}
 

</style>