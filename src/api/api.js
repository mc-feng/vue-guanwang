import axios from '../api/http'
export function registerAccount(data) { // 注册
    return axios({
        url: '/login/registerAccount',
        method: 'post',
        data: data
    })
}
// export default { // 暴露接口
//     registerAccount
// }
