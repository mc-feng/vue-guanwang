<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted (){
      if (this._isMobile()) {
        this.$router.replace('/mPage');
      } else {
        this.$router.replace('/pcPage');
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
