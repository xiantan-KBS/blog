//日期格式化函数，把时间戳变成年月日,不足2位的前面补0
export default function(timestamp, exact = false) {
    const date = new Date(+timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDay().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, "");
    const minute = date.getMinutes().toString().padStart(2, "");
    const second = date.getSeconds().toString().padStart(2, "");
    let str = `${date.getFullYear()}-${month}-${day}`;
    if (exact) {
        str += ` ${hour}:${minute}:${second}`;
    }
    return str;
}