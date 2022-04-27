<template>
<div class="wrap">
  <Empty />
</div>
</template>

<script>
import Empty from './components/Empty';
export default {
  components:{
    Empty
  }
}
</script>
<style scoped>
.wrap{
  width: 600px;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
  position: relative;
}
</style>