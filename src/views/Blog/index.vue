<template>
        <Layout>
        <template #default>
            <BlogCategory />
        </template>
        <template v-slot:right>
            <BlogList />
        </template>   
        </Layout>
</template>

<script>
import BlogList from "./components/BlogList.vue";
import Layout from '@/components/Layout';
import BlogCategory from "./components/BlogCategory.vue";
import * as fetchData from '@/Api/blogData';
// fetchData.getBlogType().then(r=>console.log(r));
// fetchData.getBlog("0eDfeDb7-7dCd-8Fbf-98DF-72723F4fCd6b").then(r=>console.log(r));
// fetchData.postComment({
// 	nickname: "xiaotan",
// 	content: "哈哈哈哈哈",
// 	blogId: "298a5B3A-8eE5-47Ab-bCe2-3836FDf6525A"
// }).then(r=>console.log(r));
// fetchData.getPageComment("298a5B3A-8eE5-47Ab-bCe2-3836FDf6525A").then(r=>console.log(r));
export default {
    components:{
        BlogList,
        Layout,
        BlogCategory
    },
}
</script>

<style>

</style>