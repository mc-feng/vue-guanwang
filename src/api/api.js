import axios from '../api/http'
export function registerAccount(data) { // 注册
    return axios({
        url: '/login/registerAccount',
        method: 'post',
        data: data
    })
}
export function getPhoneCode(data){//获取手机验证码
    return axios({
        url:"/login/getPhoneCode",
        method:"post",
        data:data
    })
}
export function checkAccount(data){//检查账户是否存在
    return axios({
        url:"/login/checkAccount",
        method:"post",
        data:data
    })
}
export function checkPhoneUsed(data){//检查手机号是否存在
    return axios({
        url:"/login/checkPhoneUsed",
        method:"post",
        data:data
    })
}
export function loginPhone(data){//检查手机号登录
    return axios({
        url:"/login/loginPhone",
        method:"post",
        data:data
    })
}
export function loginAccount(data){//账户密码登录
    return axios({
        url:"/login/loginAccount",
        method:"post",
        data:data
    })
}
export function getUserData(data){//获取个人信息
    return axios({
        url:"/login/getUserData",
        method:"post",
        data:data
    })
}
export function updateUserData(data){//修改个人信息
    return axios({
        url:"/login/updateUserData",
        method:"post",
        data:data
    })
}
export function uploadALiYunHuaYanData(data){//上传化验单报告
    return axios({
        url:"/analysis/uploadALiYunHuaYanData",
        method:"post",
        data:data
    })
}
export function uploadALiYunYingXiangData(data){//上传影像报告
    return axios({
        url:"/analysis/uploadALiYunYingXiangData",
        method:"post",
        data:data
    })
}
export function uploadALiYunBingLiData(data){//上传病理报告
    return axios({
        url:"/analysis/uploadALiYunBingLiData",
        method:"post",
        data:data
    })
}
export function logout(data){//上传病理报告
    return axios({
        url:"/login/logout",
        method:"post",
        data:data
    })
}
// export default { // 暴露接口
//     registerAccount
// }
