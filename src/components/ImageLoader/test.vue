<template>
<div class="wrap">
  <ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
  @load="loadImg()"  :duration="1000"
/>
</div>
</template>

<script>
import ImageLoader from './components/ImageLoader/';
export default {
  components:{
    ImageLoader,
  },
  methods:{
    loadImg(){
      console.log('ImageLoader组件加载图片完成了');
    }
  }
}
</script>
<style scoped>
.wrap{
  width: 600px;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
}
</style>
