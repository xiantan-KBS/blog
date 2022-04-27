import axios from "axios";
import popup from "../utils/popup";
const inst = axios.create();
inst.interceptors.response.use(function(resp) {
    // console.log('拦截了请求');
    // console.log(resp.data);
    if (resp.data.code !== 0) {
        popup({
            type: 'error',
            text: resp.data.message,
        })
        return null;
    }
    return resp.data.data
})
export default inst;