<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'App',
  mounted (){
      console.log(window.location.href)
      console.log(window.location.href.split("#"))
      console.log()
      if (this._isMobile()) {
        this.$router.replace('/mPage');
      } else {
        var cookies = Cookies.get('click')
        var account = Cookies.get('account')
        if(cookies){  
         this.$router.push(`/product/report/${account}`)//防止刷新保留当前页面
        }else{ 
          if(window.location.href.split("#")[1]=="/pcPage/downLoad/%E4%B9%89%E9%87%91%E5%81%A5%E5%BA%B7"){
            this.$router.push("/pcPage/downLoad/义金健康")
          }else{
            this.$router.replace('/pcPage');
          }
        }
      }
    },
  methods:{
      _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone|MicroMessenger)/i)
      return flag;
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@media (min-width:1024px){
  html{
    font-size:75px !important;/*no*/
  }
}
    html * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
body, html {
    /* important */
    font: normal 100% Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
}
.clear:after {
  content:".";
  height:0;
  visibility:hidden;
  display:block;
  clear:both;
}
body {
  margin: 0;
}
html,body{
  margin:0;
  padding: 0;
  list-style: none;
}
</style>
