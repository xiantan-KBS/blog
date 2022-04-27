import inst from "./request";


//获取所有博客分类
export async function getBlogType() {
    return await inst.get("/api/blogtype");
}


//分页获取博客
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
    return await inst.get('/api/blog', {
        params: {
            page,
            limit,
            categoryId,
        },
    });
}

//获取单个博客
export async function getBlog(id) {
    return await inst.get(`/api/blog/${id}`);
}

//分页获取评论
export async function getPageComment(blogid, page = 1, limit = 10) {
    return await inst.get("/api/comment", {
        params: {
            blogid,
            page,
            limit,
        },
    });
}

//提交评论
export async function postComment(commentInfo) {
    return await inst.post(`/api/comment`, commentInfo);
}