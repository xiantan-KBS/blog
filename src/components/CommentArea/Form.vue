<template>
      <form  id="form" class="form-container"  @submit.prevent="handleSubmit" ref="form">
          <div class="entry">
              <input type="text" placeholder="用户昵称" maxlength="10" v-model="formData.nickname">
              <span>{{formData.nickname.length}}/10</span>
          </div>
          <div class="error">{{err.nickname}}</div>
          <div class="text">
              <textarea placeholder="输入内容" maxlength="300" v-model="formData.content"></textarea>
              <span>{{formData.content.length}}/300</span>
          </div>
          <div class="error">{{err.content}}</div>
          <button :disabled="isSubmit">{{isSubmit?"提交中...":"提交"}}</button>
      </form>
</template>

<script>
export default {
    data(){
        return{
            formData:{
                nickname:'',
                content:"",
            },
            err:{
                nickname:'',
                content:"",
            },
            isSubmit:false,
        }
    },
    methods:{
        async handleSubmit(){
            //判断提交之前是否有值
           this.formData.nickname ? this.err.nickname="" : this.err.nickname='请输入昵称';
           this.formData.content ? this.err.content="" : this.err.content='请输入内容';
           if (this.err.nickname  || this.err.content) {  //当都没提示错误，就能提交表单
               return;
           }
           this.isSubmit = true; //鼠标禁用，正在提交中
        //    console.log(this.$listeners.submit())
           this.$emit('submit',this.formData,(text)=> {  //往上抛出事件
                        this.$popup({
                    container:this.$refs.form,
                    duration:1000,
                    type:"success",
                    text:text,
                    callback:()=>{
                        this.isSubmit = false;
                        this.formData.nickname="";
                        this.formData.content="";
                    }
                })
           })
        // if (this.$listeners.submit) {
        //     await this.listeners.submit(this.formData,()=>{
        //         this.$popup({
        //             container:this.$refs.form,
        //             duration:6000,
        //             type:"success",
        //             text:"评论成功",
        //             callback:()=>{
        //                 this.formData.nickname="";
        //                 this.formData.content="";
        //                 this.isSubmit = false;
        //             }
        //         })
        //     })
        // }
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.form-container{
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    .error{
        height: 40px;
        line-height: 40px;
        color: @danger;
    }
    .entry{
        width: 360px;
        height: 40px;
        border: 2px dashed @gray;
        border-radius: 4px;
        position: relative;
        // margin-bottom: 30px;
        input{
            width: 100%;
            line-height: 40px;
            padding: 0 15px;
            box-sizing: border-box;
            &::placeholder{
                font-weight: bold;
                color: @gray;
                letter-spacing: 2px;
            }
        }
        span{
                position: absolute;
                right: 5px;
                top: 50%;
                font-size: 12px;
                color: @gray;
            }
    }
    .text{
        width: 600px;
        height: 150px;
        border: 2px dashed @gray;
         border-radius: 5px;
        position: relative;
        // margin-bottom: 30px;
        textarea{
            width: 100%;
            height: 100%;
            resize: none;
            padding: 15px;
            box-sizing: border-box;
            font-size: 16px;
            color: #000;
            &::placeholder{
                font-weight: bold;
                color: @gray;
            }
        }
        span{
                position: absolute;
                right: 5px;
                bottom: 5px;
                font-size: 12px;
                color: @gray;
            }
    }
    button{
        width: 100px;
        height: 35px;
        background: lighten(@primary,-5%);
        color: #fff;
        border-radius: 5px;
        &[disabled="disabled"]{
             background: @gray;
             cursor: not-allowed;
        }
    }
}
// button[disabled="disabled"]{
//              background: @gray;
//              cursor: not-allowed;
//         }
input,textarea,button{
    border: none;
    outline: none;
}
</style>