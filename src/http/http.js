// import axios from 'axios';
// import store from '../store'

//自动切换环境
// let baseUrl = '';
// if (process.env.NODE_ENV == 'development') {
//     baseUrl = "/link/a"
// } else if (process.env.NODE_ENV == 'production') {
//     baseUrl = process.env.VUE_APP_BASEURL;
// } else {
//     baseUrl = ""
// }
// axios.defaults.baseURL = baseUrl

// 解决刷新页面失去header
// axios.defaults.headers = {};
// if (Object.keys(store.state.token).length > 0) {
//     axios.defaults.headers = {
//         'Authorization': 'Bearer ' + store.state.token,
//     }
// } else {
//     axios.defaults.headers = {
//         'Authorization': ' 123',
//     }
// }
/*
axios.defaults.headers = {
    'Authorization': 'Bearer ' + store.state.token,
}*/



// export default {
//     /**
//      * get 请求
//      * @param url 接口路由
//      * @param auth 是否需要带登录信息
//      * @returns {AxiosPromise<any>}
//      */
//     get(url, auth = false) {
//         if (auth) {
//             return axios.get(url, {headers: {Authorization: 'Bearer ' + store.state.token}}); // 在此处设置不上？？？？
//         } else {
//             return axios.get(url);
//         }
//     },


//     /**
//      * post 请求
//      *
//      * @param url 接口路由
//      * @param data 接口参数
//      * @param auth 是否需要带登录信息
//      * @returns {AxiosPromise<any>}
//      */
//     post(url, data, auth = false) {
//         if (auth) {
//             return axios.post(url, data, {headers: {Authorization: 'Bearer ' + store.state.token}});
//         } else {
//             return axios.post(url, data);
//         }
//     },

// }