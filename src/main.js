// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import WXConfig from "./assets/js/wx.jsapi.js"
import VueI18n from 'vue-i18n' 
import 'iview/dist/styles/iview.css';
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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  i18n,
  template: '<App/>'
})