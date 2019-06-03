<template>
    <div class="warp">
        <div class="header-warp">
            <header class="header">
                <img src="../assets/mimage/title.png" alt="" class="loge">
                <div class="select-item">
                    <div class="nav-select" @click="changeLang('zh')" :class="{active : lang == 'zh'}">中文</div>/
                    <div class="nav-select" @click="changeLang('en')" :class="{active: lang == 'en'}">English</div>
                </div>
                <!-- <select v-model="lang" @change="changeLang(lang)" class="nav-select">
                    <option v-bind:value="option.value" v-for="option in options" :key="option.index" class="option"> 
                        {{option.text}}
                    </option>
                </select> -->
                <img src="../assets/mimage/nav.png" alt="" class="header-nav" @click="controlNav()">
            </header>
            <transition name="fade">
                <div class="nav-warp"  v-show="show">
                    <div class="nav-item"  :class="{'active':0 ==checkindex }" @click="controlNav();toggle(0);jump(0)">{{$t('mnav.home')}}</div>
                    <div class="nav-item"  :class="{'active':1 ==checkindex }" @click="controlNav();toggle(1);jump(1)">{{$t('mnav.about')}}</div>
                    <div class="nav-item"  :class="{'active':2 ==checkindex }" @click="controlNav();toggle(2);jump(2)">{{$t('mnav.product')}}</div>
                    <div class="nav-item"  :class="{'active':3 ==checkindex }" @click="controlNav();toggle(3);jump(3)">{{$t('mnav.server')}}</div>
                    <div class="nav-item"  :class="{'active':4 ==checkindex }" @click="controlNav();toggle(4);jump(4)">{{$t('mnav.linke')}}</div>
                      <!-- <div class="nav-item" v-for="(item,index) in navs" :key="index" :class="{'active':index ==checkindex }" @click="controlNav();toggle(index);jump(index)">{{item}}</div> -->
                </div>
            </transition>
        </div>
        <div class="swiper-inner wrap">
            <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrap">
            <swiper-slide class="slide1"></swiper-slide>
            <swiper-slide class="slide2"></swiper-slide>
            <swiper-slide class="slide3"></swiper-slide>
            <div class="swiper-pagination "  slot="pagination"></div>
            </swiper> 
        </div>
        <div class="product-warp wrap">
            <header class="product-title">{{$t("bottom.chanping")}}</header>
            <div class="product-items">
                <img src="../assets/mimage/big1.png" alt="">
                <transition name="move">
                     <div class="product-items-title">{{$t("content.yiliaoHeader1")}}</div>
                </transition>
                <transition name="movel">
                     <div class="product-items-content">{{$t("content.yiliaoContent1")}}</div>
                </transition>
                <!-- <img src="../assets/mimage/big1.png" alt="">
                <div class="product-items-title" :class="{'company_name':anmintion[0]}">报告解读</div>
                <div class="product-items-content" :class="{'company_introduce':anmintion[0]}">该系统由两部分组成，一是基于ORC识别技术，实现医疗化验单、报告单、体检报告的文字智能识别与归类，快速为用户建立个人电子病历和健康档案；二是结合医疗数据，提供化验单的项目说明和解释，帮助用户对自身指标的认识。</div> -->
            </div>
            <div class="product-items">
                <transition name="moveT">
                <img src="../assets/mimage/big2.png" alt="">
                </transition>
                <transition name="move">
                     <div class="product-items-title">{{$t("content.yiliaoHeader2")}}</div>
                </transition>
                <transition name="movel">
                     <div class="product-items-content">{{$t("content.yiliaoContent2")}}</div>
                </transition>
            </div>
            <div class="product-items">
                <transition name="moveT">
                  <img src="../assets/mimage/big3.png" alt="">
                </transition>
                <transition name="move">
                     <div class="product-items-title">{{$t("content.yiliaoHeader3")}}</div>
                </transition>
                <transition name="movel">
                     <div class="product-items-content">{{$t("content.yiliaoContent3")}}</div>
                </transition>
            </div>
            <div class="product-items">
                <transition name="moveT">
                 <img src="../assets/mimage/big5.png" alt="" class="item-margin">
                </transition>
                <transition name="move">
                     <div class="product-items-title">{{$t("content.baoxianHeader1")}}</div>
                </transition>
                <transition name="movel">
                     <div class="product-items-content">{{$t("content.baoxianContent1")}}</div>
                </transition>
            </div>
            <div class="product-items">
                <transition name="moveT">
                 <img src="../assets/mimage/big4.png" alt="" class="item-margin">
                </transition>
                <transition name="move">
                     <div class="product-items-title">{{$t("content.jiankangHeader1")}}</div>
                </transition>
                <transition name="movel">
                     <div class="product-items-content">{{$t("content.jiankangContent1")}}</div>
                </transition>
            </div>
        </div>
        <div class="service-warp wrap">
            <div class="service-title">{{$t("mpage.fuwei")}}</div>
            <div class="swiper-inner2">
                <swiper :options="swiperOption2" class="swiper-wrap2">
                <swiper-slide class="swiper-slide2">
                <img src="../assets/mimage/1.png" alt="" class="service-image">
                <div class="service-item-head">{{$t("project.itemHeader1")}}</div>
                <div class="service-item-content">{{$t("project.itemContent1")}}</div>
                </swiper-slide>
                <swiper-slide class="swiper-slide2">
                    <img src="../assets/mimage/2.png" alt="" class="service-image">
                    <div class="service-item-head">{{$t("project.itemHeader2")}}</div>
                    <div class="service-item-content"> {{$t("project.itemHeader2")}}</div>
                </swiper-slide>
                <swiper-slide class="swiper-slide2">
                    <img src="../assets/mimage/3.png" alt="" class="service-image">
                    <div class="service-item-head">{{$t("project.itemHeader3")}}</div>
                    <div class="service-item-content">{{$t("project.itemHeader3")}}</div>
                </swiper-slide>
                <swiper-slide class="swiper-slide2">
                    <img src="../assets/mimage/4.png" alt="" class="service-image">
                    <div class="service-item-head">{{$t("project.itemHeader4")}}</div>
                    <div class="service-item-content">{{$t("project.itemHeader4")}}</div>
                </swiper-slide>
                <div class="swiper-pagination "  slot="pagination"></div>
                </swiper> 
            </div>
        </div>
        <div class="panter-warp">
           <div class="panter-title">{{$t("partner.title")}}</div>
            <swiper :options="swiperOption3" class="panter-contion">
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters13.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters22.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters5.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters23.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters14.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters21.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters18.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters24.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                    <img src="../assets/panter/panterRound/panters1.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters19.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters3.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters31.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters4.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                    <img src="../assets/panter/panterRound/panters6.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters7.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters8.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters9.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters10.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters11.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                    <img src="../assets/panter/panterRound/panters12.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters15.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters16.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                    <img src="../assets/panter/panterRound/panters17.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters20.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterRound/panters2.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters25.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters26.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters27.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters28.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters29.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters30.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters37.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters33.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters34.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters35.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters36.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters39.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters38.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters32.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters40.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters41.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters47.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters43.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters50.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters42.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters46.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters48.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters45.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters49.png" alt="">
                </swiper-slide>
                <swiper-slide class="panter-item">
                     <img src="../assets/panter/panterSquare/panters44.png" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="app-warp wrap">
            <!-- <img src="../assets/mimage/app-img.png" alt=""> -->
            <div class="app-content-warp">
                <div class="app-title">{{$t("tongxi.app")}}</div>
                <div class="app-title">{{$t("tongxi.introduce")}}</div>
                <div class="app-content">{{$t("tongxi.detaile")}}</div>
                <div class="app-buttun">
                    <div class="down-buttun"  @click="linke('https://fir.im/mjbk')">{{$t("mnav.download1")}}</div>
                    <div class="down-buttun" @click="linke('https://itunes.apple.com/cn/app/id1417071605?mt=8')">{{$t("mnav.download2")}}</div>
                </div>
                <!-- <img src="../assets/mimage/tongxierwei.png" alt="" class="app-erwei">
                <div class="app-xiazai">{{$t("tongxi.saoma")}}</div> -->
            </div>
        </div>
        <div class="bottom-warp">
            <div class="bottom-header">{{$t("mpage.lianxi")}}</div>
            <div class="link-our">
                <div>{{$t("mpage.kefu")}}</div>
                <div>0571-89915722</div>
                <div>4009-959510</div>
            </div>
            <div class="link-address">
                <div>{{$t("mpage.dizhi")}} </div>
                 <div>{{$t("mpage.weizhi")}}</div>
            </div>
            <img src="../assets/mimage/yijinerwei.png" alt="" class="bottom-erwei">
            <div>{{$t("mpage.guanzhu")}}</div>
        </div>
   </div>
</template>
<style scoped>
   .warp{
       margin: 0 auto;
       width: 750px;
       background-color: #FFFFFF
   }
   .header-warp{
       width: 100%;
       position: fixed;
       top: 0;
       z-index: 10;
       background: #fff;
       top:0;
   }
   .header{
       width: 100%;
       padding: 0 34px;
       display: flex;
       flex-flow: row nowrap;
       justify-content: space-between;
       align-items: center;
       height: 150px;
   }
   .loge{
       width: 124px;
       height: 58px;
   }
   .header-nav{
       height: 34px;
       width: 44px;
   }
   .select-item{
       font-size: 32px;
       color: #174477;
       margin-left: 250px;
   }
   .nav-select{
       display: inline-block;
   }
   /* .nav-select{
       margin-left: 350px;
       cursor: pointer;
       color: #174477;
       text-decoration: none;
       outline: none;
       border: none;
       background: transparent;
       min-width: 60px;
   } */
    /* .option{
        -moz-appearance:none;
        -webkit-appearance:none;
        appearance: none;
        color:#174477;
        background: transparent
    } */
   /* 轮播1*/
   .swiper-inner {
    width: 100%;
    height: 460px;
    overflow: hidden;
    margin-top: 120px
  }
  .swiper-wrap{
    height: 100%;
    width: 100%
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    background-color: aqua;
    font-size: 40px;
  }
.slide1 {
      background-image:url('../assets/mimage/banner1.png')
    }
.slide2 {
      background-image:url('../assets/mimage/banner2.png')
    }
.slide3 {
      background-image:url('../assets/mimage/banner3.png')
    }
    /* 轮播2*/
   .swiper-inner2 {
    width: 100%;
    height: 440px;
    overflow: hidden;
  }
  .swiper-wrap2{
    height: 100%;
    width: 100%
  }
  .swiper-slide2 {
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-flow: column nowrap;
    align-items: center
  }
  /* 导航 */
  .nav-warp{
      width: 100%;
      background: #174477;
      padding: 30px 0 30px 0;
  }
  .nav-item{
    width: 100%;
    text-align: center;
    font-size: 28px;
    color: #fff;
    line-height: 80px;
  }
  .active{
        color: #55CCDD
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
  /* .mybox-leave-active,.mybox-enter-active{
            transition:  all 0.3s ease; 
    } */
    /* 产品 */
 .product-warp{
     width: 100%;
     padding: 52px 36px;
 }
 .product-title{
     font-family: PingFangSC-Regular;
    font-size: 40px;
    color: #174477;
    letter-spacing: 0;
    text-align: center;
    height: 56px;
    line-height: 56px;
    margin-bottom: 34px;
    margin-top:40px;
 }
 .product-items{
     border-bottom:2px dashed #e8e8e8;
 }
 .product-items:nth-of-type(5){
     border-bottom: none;
 }
.product-items:nth-of-type(4) .product-items-content{
    margin-bottom: 40px
 }
 .product-items img{
    margin-top: 20px;
    width: 100%;
    height: 550px;
 }
 .item-margin{
     margin-top: 20px
 }
 .product-items-title{
     display: inline-block;
     height: 88px;
     line-height: 88px;
     border-bottom: 2px solid #275495;
     font-family: PingFangSC-Regular;
     font-size: 32px;
     color: #000;
     letter-spacing: 0;
     text-align: center;
     margin-bottom: 12px
 }
 .product-items-content{
     opacity: 0.94;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #666;
    letter-spacing: 0;
    text-align: justify;
    line-height: 40px;
    width: 100%;
    margin-bottom: 60px;
 }
 .product-kongbai{
     height: 800px;
     width: 100%
 }
 /* 服务 */
 .service-warp{
     width:100%;
     height: 710px;
     background-image: url("../assets/mimage/mBackground1.png");
     background-size: cover
 }
 .service-title{
     width: 100%;
     text-align: center;
     padding-top:70px;
     margin-bottom: 70px;
     font-family: PingFangSC-Regular;
     font-size: 40px;
     color: #FFFFFF;
     letter-spacing: 0;
 }
 .service-image{
     width: 120px;
     height: 120px;
 }
 .service-item-head{
     margin-top: 52px;
     font-family: PingFangSC-Regular;
     font-size: 32px;
     color: #FFFFFF;
     letter-spacing: 0;
     text-align: center;
 }
 .service-item-content{
     width: 560px;
     margin-top: 26px;
     font-family: PingFangSC-Regular;
     font-size: 24px;
     color: #FFFFFF;
     letter-spacing: 0;
     text-align: center;
     line-height: 48px;
 }
 /* 伙伴 */
 .panter-warp{
     padding: 60px 32px;
 }
 .panter-title{
     font-family: PingFangSC-Regular;
    font-size: 40px;
    color: #163F6F;
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    margin-bottom: 34px;
 }
 .panter-item{
     width: 136px;
     height: 100px;
     margin-bottom: 10px;
     background: #174477
 }
 .panter-item img{
     width: 100%;
     height: 100%;
 }
 .panter-contion{
     height: 280px;
 }
 .panter-contion .swiper-pagination{
     position: absolute;
     bottom: 0px
 }
 /* app */
 .app-warp{
     min-height: 1270px;
     width: 100%;
     background-image: url(../assets/mimage/mbackground.png);
     background-size: cover;
     padding:114px 0 0 80px;
     display: flex;
     flex-flow: row nowrap;
     position: relative;
 }
 .app-content-warp{
    margin-top: 860px;
    margin-bottom: 60px;
 }
 .app-buttun{
     height: 70px;
     margin-top: 40px;
     display: flex;
     flex-flow: row nowrap;
     justify-content: space-between;
     width: 480px;
 }
 .down-buttun{
   width: 220px;
   background: #fff;
   border-radius: 40px;
   font-size: 28px;
   color: #29bd8a;
   text-align: center;
   line-height: 70px;
 }
 .app-title{
   font-family: PingFangSC-Regular;
   font-size: 36px;
   color: #FFFFFF;
   line-height: 50px
 }
 .app-content{
     font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #FFFFFF;
    width: 366px;
    line-height: 30px;
    margin-top: 16px;
 }
 .app-content-warp .app-erwei{
     width: 120px;
     height: 120px;
     margin-top: 40px;
 }
 .app-xiazai{
     font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #FFFFFF;
    margin-top: 12px;
 }
 /* 底部 */
 .bottom-warp{
     padding: 56px 34px;
     font-family: PingFangSC-Regular;
     font-size: 24px;
     color: #193F6B;
     letter-spacing: 0;
     line-height: 36px;
 }
 .bottom-header{
     font-family: PingFangSC-Regular;
     font-size: 40px;
     color: #17375C;
 }
 .link-our{
     margin-top: 16px
 }
 .link-address{
     margin-top: 16px;
 }
 .bottom-erwei{
     width: 120px;
     height: 120px;
     margin-top: 16px;
     margin-left: -6px
 }
</style>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper' 
import vue from 'vue'
import Cookies from 'js-cookie'
export default {
    components: {
        swiper,  
        swiperSlide  
    },
    data(){
        return{
            // 下拉选择框样式
            lang: 'zh',
            check:true,
            anmintion:[false,false,false,false],
            show: false,
            // navs:[this.$t('mnav.home'),this.$t('mnav.about'),this.$t('mnav.product'),this.$t('mnav.server'),this.$t('mnav.linke')],
            checkindex:0,
            swiperOption: {
                spaceBetween: 30,
                effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true
                },
                    //自动播放
                autoplay:true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                    //循环
                loop:true,
            },
            swiperOption2: {
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                }
            },
            swiperOption3:{
                slidesPerView: 5,
                slidesPerColumn: 2,
                spaceBetween:0,
                slidesPerGroup: 5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            }
        }
    },
    mounted(){
         this.WXConfig.wxShowMenu();
    },
    methods:{
        // 下载地址跳转
        linke(res){
            console.log(res)
           window.location.href = res
        },
        changeLang(res){
            Cookies.set('lang', res);//设置name
            var lang = Cookies.get('lang');//获取name
            console.log(lang)
             this.$i18n.locale = lang 
             this.lang =lang
        },
        controlNav(){
           this.show =!this.show
        },
        jump (index) {
        // 用 class="wrap" 添加锚点
        let jump = document.querySelectorAll('.wrap')
        let top = []
        for(let i = 0,len = jump.length;i< len;i++){
            top.push(jump[i].offsetTop)
        }
        let topArr = [0].concat(top)
        let total = topArr[index]
         console.log(total)
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
　　　　　　　document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
　　　　　　　document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
       } 
     },
     toggle(index){
        this.checkindex = index
      }
    }
}
</script>