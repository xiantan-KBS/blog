import inst from "./request";

export async function getMessage(page = 1, limit = 10) {
    return await inst.get('/api/message', {
        params: {
            page,
            limit
        }
    })
}
export async function postMessage(commentInfo) {
    return await inst.post('/api/message', commentInfo)
}