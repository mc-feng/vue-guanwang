<template>
    <div class="pcHome">  
         <canvas id="canvas" width="1249" height="1004px" ></canvas>
        <div class="homeWarp">
          <div class="home-item">
              <div class="images-items"  @click="navToContent('智慧医疗')">
                <div class="home-font">{{$t('home.yiliao')}}</div>
                <img src="../../assets/1.png" alt="" >
              </div>
              <div class="group2" @click="navTo('童熙健康')">
                  <img src="../../assets/Group4.png" alt="" class="group-image">
                  <div class="group-font">{{$t('menu.tongxi')}}</div>
              </div>
          </div>
          <div class="home-item">
              <div class="images-items" @click="navToContent('保险科技')">
                <div class="home-font">{{$t('home.baoxian')}}</div>
                <img src="../../assets/2.png" alt="" >
              </div>
              <div class="group1"  @click="navTo('义金健康')">
                   <img src="../../assets/Group2.png" alt="" class="group-image">
                   <div class="group-font">{{$t('menu.yijin')}}</div>
              </div>
          </div>
          <div class="home-item"> 
              <div class="images-items" @click="navToContent('保险创新')">
                  <div class="home-font">{{$t('home.chuangxin')}}</div>
                  <img src="../../assets/3.png" alt="" >
              </div>
              <div class="group3" @click="navTo('关于我们')">
                  <img src="../../assets/Group5.png" alt="" class="group-image">
                  <div class="group-font">{{$t('menu.aboutUs')}}</div>
              </div>
          </div>
        </div>
    </div>
</template>
<style scoped>
      .canvs-warp{
          position: absolute;
          top: 125px;
          left: 125px;
          width: 150px;
          height: 150px;
      }
       .canvas-font{
           color: #fff;
           position: absolute;
           left: 30px;
           top: 55px;
           font-size: 16px
       }
        .canvas1{
            position: absolute;
        }
    .pcHome{
        background-image: -webkit-radial-gradient(ellipse farthest-corner at center top, #000d4d 0%, #000105 100%);
	    background-image: radial-gradient(ellipse farthest-corner at center top, #000d4d 0%, #000105 100%);
    }
   .homeWarp{
       position: absolute;
       top: 0;
       width: 1300px;
       padding: 410px 0 368px;
       display: flex;
       flex-flow: row nowrap;
       justify-content: space-between;
        margin-left : 50% ; 
       transform: translateX(-50%)
   }
   .home-item{
       position: relative;
   }
   .home-font{
       font-size: 36px;
       color: #fff;
       position: absolute;
       left: 30px;
       top: 30px
   }
   .group1{
       top: -175px;
       left: 200px;
       position: absolute;
       cursor: pointer;
   }
   .group2{
       bottom: -175px;
       left: 50px;
       position: absolute;
       cursor: pointer;
   }
   .group3{
       bottom: -175px;
       left: 100px;
       position: absolute;
       cursor: pointer;
   }
   .group-image{
      width: 150px;
     height: 150px;
   }
   .group-font{
     font-size: 20px;
     color: #fff;
     position: absolute;
     left: 35px;
     top: 50%;
     margin-top:-20px;
     text-align: left;
   }
   .images-items:hover{
       transform: scale(1.05);
   }
</style>
<script>
import canvjs from "../../comment/canvas.js"
import bus from "../../assets/bus.js"
import globe from "../../assets/globe.js"
export default {
 name:"pcHome",
 methods: {
    // updateCanvas: function (){
    //   console.log(canvjs())  
    // },
    navTo:function(name){
       if(name == "义金健康"){
            this.$router.push({name:"pcDownLoad",params:{product:"义金健康"}})
        }else if(name == "关于我们"){
            this.$router.push({name:"pcAboutUs"})
        }else if(name == "童熙健康"){
            this.$router.push({name:"pcDownLoad",params:{product:"童熙健康"}})
        }
        bus.$emit("navName",name)
    },
    navToContent:function(names){
        this.$router.push({ name:'pcContent',params: {names}}) 
        bus.$emit("navName","")
    }
  },
  mounted: function (){
      if(!globe.canvas){   
        canvjs()
        globe.canvas =1
        console.log("来了")
      }
  }
}
</script>