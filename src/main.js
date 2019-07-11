// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import WXConfig from "./assets/js/wx.jsapi.js"
import VueI18n from 'vue-i18n' 
import 'iview/dist/styles/iview.css';
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer';
import Cookies from 'js-cookie'
const account = Cookies.get('account')
Vue.use(VueI18n) 
const i18n = new VueI18n({ 
 locale: 'zh', // 语言标识 
 messages: { 
  'zh': require('./assets/lang/zh'), 
  'en': require('./assets/lang/en') 
 }
})
Vue.config.productionTip = false
Vue.prototype.WXConfig = WXConfig;
Vue.prototype.msg = function(msg){
  　　return msg.replace(/;/g,"</br>")
}//添加了一个全局过滤器进行v-hmtl中的换行
router.beforeEach((to, from, next) => {
  if(from.name =="loge"){
    next();
  }else{
     if(to.name =="report"){ 
        if (account) { // 判断是否有token
            next();
        } else {
          alert("小子别想走捷径")
          next('/product/loge'); // 否则全部重定向到登录页
        }
      }else{
        next();
      }
  }
});
new Vue({
  el: '#app',
  router,
  components: { App },
  i18n,
  template: '<App/>'
})
Vue.use(Viewer)