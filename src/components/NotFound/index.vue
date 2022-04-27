<template>
  <div class="not-found-container">
    <div class="box">
        <div class="number">4 0 4</div>
        <div class="text">
        Page not found
        </div>
        <div class="btn-container">
        <RouterLink class="btn" :to="{name:'Home'}">
            <svg  viewBox="0 0 24 24" width="16" height="16" style="margin-right: 8px;">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z"></path>
            </svg>
            Back
        </RouterLink>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
            this.$router.push('/');
        }
    }
}
</script>

<style scoped lang="less">
.not-found-container{
    width: 100%;
    height: 100%;
    background: #eaebec;
    text-align: center;
    .box{
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .number{
                font-size: 80px;
                color: #666;
                font-weight: bold;
        }
        .text{
            font-size: 14px;
            margin: 24px;
            color: #333;
        }
        .btn-container{
                display: flex;
                justify-content: center;
                .btn{
                    padding: 8px 24px;
                    background: #fff;
                    border: 2px solid #efefef;
                    margin: 24px;
                    border-radius: 20px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }
        }
    }
}
</style>