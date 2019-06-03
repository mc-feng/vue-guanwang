import axios from 'axios'
 
export default {
 
    wxShowMenu: function() {
        console.log(location.href.split('#')[0])
        axios.get('http://www.yijinhealth.com/FS/login/sharingWeb?url='+encodeURIComponent(location.href.split('#')[0])).then(function(res) {
            var getMsg = res.data;
            //     wx.config({
 
            //     debug: true, //生产环境需要关闭debug模式
 
            //     appId: "123132132", //appId通过微信服务号后台查看
 
            //     timestamp: getMsg.timestamp, //生成签名的时间戳
 
            //     nonceStr: getMsg.nonceStr, //生成签名的随机字符串
 
            //     signature: getMsg.signature, //签名
 
            //     jsApiList: [ //需要调用的JS接口列表
 
            //         'onMenuShareTimeline', //分享给好友
 
            //         'onMenuShareAppMessage', //分享到朋友圈
 
            //         'showMenuItems',
 
            //         'hideMenuItems'
 
            //     ]
 
            // });
            wx.config({
                debug: false, //生产环境需要关闭debug模式
 
                appId: "wxc5098329f1bf51dd", //appId通过微信服务号后台查看
 
                timestamp: getMsg.timestamp, //生成签名的时间戳
 
                nonceStr: getMsg.nonceStr, //生成签名的随机字符串
 
                signature: getMsg.signature, //签名
 
                jsApiList: [ //需要调用的JS接口列表
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                ]
                });
                wx.ready(function () {
                    // 在这里调用 API
                    wx.onMenuShareTimeline({
                    title: '佟蒂--大健康科技保险服务商', // 分享标题
                    link: getMsg.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'http://www.yijinhealth.com/JavaWebApp/guanwang/index.jpg', // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: '佟蒂--大健康科技保险服务商', // 分享标题
                    desc: '保险科技，人工智能，家庭健康全生命周期保障', // 分享描述
                    link: getMsg.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'http://www.yijinhealth.com/JavaWebApp/guanwang/index.jpg', // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
             });
        });
        }
    }