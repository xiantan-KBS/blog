export default function(container) {
    return {
        methods: {
            handleScroll() {
                this.$bus.$emit('mainScroll', this.$refs[container]);
            },
            handleReturnTop() {
                this.$refs[container].scrollTop = 0;
            }
        },
        //给元素添加事件必须在mounted函数中，因为这时才生成了真实dom树
        mounted() {
            //鼠标滚轮滚动就触发事件给事件总线，让其他监听者处理相对于的函数
            this.$refs[container].addEventListener('scroll', this.handleScroll);
            this.$bus.$on('returnTop', this.handleReturnTop);
        },
        beforeDestroy() {
            this.$refs[container].removeEventListener('scroll', this.handleScroll);
            //组件销毁后，dom元素也没了，就是undefined,触发事件，让其他监听者监听;
            this.$bus.$emit('mainScroll');
            this.$bus.$off('returnTop', this.handleReturnTop);
        },
    }
}


// export default function() {
//     return {
//         methods: {
//             handleScroll() {
//                 this.$bus.$emit('mainScroll', this.$refs.container);
//             },
//             handleReturnTop() {
//                 this.$refs.container.scrollTop = 0;
//             }
//         },
//         //给元素添加事件必须在mounted函数中，因为这时才生成了真实dom树
//         mounted() {
//             //鼠标滚轮滚动就触发事件给事件总线，让其他监听者处理相对于的函数
//             this.$refs.container.addEventListener('scroll', this.handleScroll);
//             this.$bus.$on('returnTop', this.handleReturnTop);
//         },
//         beforeDestroy() {
//             this.$refs.container.removeEventListener('scroll', this.handleScroll);
//             //组件销毁后，dom元素也没了，就是undefined,触发事件，让其他监听者监听;
//             this.$bus.$emit('mainScroll');
//             this.$bus.$off('returnTop', this.handleReturnTop);
//         },
//     }
// }