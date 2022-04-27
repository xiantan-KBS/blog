// import Axios from "axios";
// import popup from "../utils/popup";
// const inst = Axios.create();
// inst.interceptors.response.use(function(resp) {
//     console.log('拦截了请求', resp);
//     return resp;
// })
import inst from "./request";
export async function getData() {
    //协议，域名，端口号不写则自动使用当前location的协议和主机
    //知乎测试地址https://www.zhihu.com/api/v3/oauth/sms/supported_countries
    // const resp = await fetch('/api/v3/oauth/sms/supported_countries');
    // const data = await resp.json();
    // console.log(resp, data);
    // const resp = await Axios.get('/api/v3/oauth/sms/supported_countries');
    return await inst.get('/api/banner'); //Mock拦截，返回数据
    // if (resp.data.code !== 0) {
    //     popup({
    //         type: 'error',
    //         text: resp.data.message,
    //     })
    //     return null;
    // }
}
// getData().then(r => console.log(r));