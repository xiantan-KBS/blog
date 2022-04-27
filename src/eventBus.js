//事件总线
// listeners ={"event1":[handle1,handle2],
//             "event2":[handle1,handle2]}
// let listeners = {

// }
// export default {
//     //添加监听事件处理函数
//     $on(event, handle) {
//         if (!listeners[event]) {
//             listeners[event] = new Set(); //避免重复处理函数
//         }
//         listeners[event].add(handle); //添加一个事件处理函数
//     },
//     //删除监听事件处理函数
//     $off(event, handle) {
//         if (!listener[event]) {
//             return;
//         }
//         listeners[event].delete(handle);
//     },
//     //触发事件和传递数据给事件总线，并通知相对应的事件处理函数运行
//     $emit(event, ...args) {
//         if (!listener[event]) {
//             return; //有问题  listeners[event]= new Set()
//         }
//         for (const handle of listeners[event]) {
//             handle(...args);
//         }
//     }
// }

//vue的事件总线写法
import Vue from "vue";
export default new Vue({});