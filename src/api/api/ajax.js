
import *as urls from '../urls/urls'
import Axios from 'axios';
import qs from 'qs'



const instance = Axios.create({
    baseURL: 'http://localhost:7001',
    timeout: 3000
})



// 添加请求拦截器
instance.interceptors.request.use((config) => {
    // console.log(config, ' config----------config')
    // token
    // config.headers.token = localStorage.getItem('token');
    // 授权验证
    // config.headers.Authorization = 'Basic';
    // 参数处理 post get
    // config.method === 'post'
    //     ? config.data = qs.stringify({ ...config.data })
    //     : config.params = { ...config.params }
    // // 数据响应格式：
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
}, (err) => {
    Promise.reject(err)
})



instance.interceptors.response.use((response) => {
    if (response.data.code === 1) {
        return response
    } else {
        return response;
        console.log('error')
    }

}, (error) => {
    // 状态码

})




//公共方法post
export const commonPost = async (url = '', data = {}) => {
    let res = await instance({ url, method: 'post', data })
    return res.data
}



//公共方法get
export const commonGet = async (url = '') => await instance({ url, method: 'get' }).then(res => res.data);




//post
export const login = data => commonPost(urls.login, data);
export const register = data => commonPost(urls.register, data);


//get