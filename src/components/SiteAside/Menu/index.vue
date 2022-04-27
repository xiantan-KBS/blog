<template>
  <nav class="menu-container">
      <!-- :to="item.link" -->
      <RouterLink 
        v-for="item in items" 
        :key="item.link" 
        :to="{name:item.name}"
        :exact="item.exact"
        exact-active-class=""
        active-class="selected"
        >
        <div class="icon">
              <Icon :type="item.icon" />
        </div>
        <span>{{item.title}}</span>
      </RouterLink>
  </nav>
</template>

<style lang="less" scoped>
@import "~@/style/var.less";
.menu-container{
    margin: 20px 0;
    color: @gray;
    a{
        display: flex;
        align-items: center;
        padding: 0 50px;
        height: 45px;
        &.selected{
           background: darken(@words, 3%); 
        }
      .icon{
        //   font-size: 26px;
          width: 36px;
      }
      &:hover{
          color: #fff;
      }
    }
}
</style>

<script>
import Icon from "@/components/Icon";
export default {
    components:{
        Icon,
    },
    data(){
        return{
            items:[
                {
                    name:"Home",
                    title:'首页',
                    icon:"home",
                    exact:true,
                },
                {
                    name:"Blog",
                    title:'文章',
                    icon:"blog",
                    exact:false,
                },
                {
                    name:"About",
                    title:'关于我',
                    icon:"about",
                    exact:true,
                },
                {
                    name:"Project",
                    title:'项目&效果',
                    icon:"code",
                    exact:true,
                },
                {
                    name:"Message",
                    title:'留言板',
                    icon:"chat",
                    exact:true,
                },
            ]
        }
    },
    // methods:{
    //     startsWith(path){
    //        var link = location.pathname;
    //        if (path === '/blog') {
    //            return link.startsWith(path);
    //        }else{
    //             return path===link;
    //        }
           
    //     }
    // }
}
</script>

