<template>
      <img :src="url" :style="{
      width: size+ 'px',
      height: size + 'px',
      }" class="avater-container">
</template>

<script>
export default {
    props:{
        url:{
            type:String,
            required:true,
        },
        size:{
            type:Number,
            default:150,
        }
    }
}
</script>
<style  scoped>
/* scoped属性指定样式运用到块级作用域，解决样式冲突的问题 */
.avater-container{
    border-radius: 50%;
    object-fit: cover;
    display: block;
}
</style>