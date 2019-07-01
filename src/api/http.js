import axios from 'axios'
import {Message} from 'iview'
import util from "@/comment/util";
function startLoading() {
    Message.loading('正在加载中...', 0)
}

function endLoading() {
    Message.destroy()
}
axios.defaults.headers.post['Content-Type'] = 'application/json';
// 请求拦截
axios.interceptors.request.use(
    (request)=>{
             startLoading()
            const host = 'http://192.168.31.165:8089'
            if (!/^(http|\/\/)/.test(request.url)) {
                request.url = host + request.url;
            }//设置默认host
            console.log(request.data)
            request.data = util.Encrypt(JSON.stringify(request.data));//加密
            console.log(request.data)
            return request;
    },
    // (confing) => {
    //     startLoading()

    //     //设置请求头
    //     if (localStorage.eToken) {
    //         confing.headers.Authorization = localStorage.eToken
    //     }

    //     return confing
    // },
    (error) => {
        return Promise.reject(error)
    }
)

//响应拦截

axios.interceptors.response.use(
    (response) => {
        endLoading()
        response.data = JSON.parse(util.formatString(util.Decrypt(response.data)))
        return response
    },
    (error) => {
        Message.error(error.response.data)
        endLoading()

        // 获取状态码
        const { status } = error.response

        if (status === 401) {
            Message.error('请重新登录')
        }
        return Promise.reject(error)
    }
)
export default axios