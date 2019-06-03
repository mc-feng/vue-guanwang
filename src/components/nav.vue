<template>
    <div>
        <div class="warp">
            <img src="../assets/logo.png" alt="loge">
            <div class="nav">
                <div class="nav-item"  @click="selected($t('menu.chanping'))" :class="{active : active == '产品体验入口'|| active == 'Product experience portal'}">
                    {{$t('menu.chanping')}}
                    <div class="badge">NEW</div>
                </div>
                <div class="nav-item"  @click="selected($t('menu.home'))" :class="{active : active == '首页'|| active == 'Home'}">{{$t('menu.home')}}</div>
                <div class="nav-item"  @click="selected($t('menu.project'))" :class="{active : active == '项目介绍'|| active == 'Project Introduction'}">{{$t('menu.project')}}</div>
                <div class="nav-item"  @click="selected($t('menu.partner'))" :class="{active : active == '合作伙伴'|| active == 'Partner'}">{{$t('menu.partner')}}</div>
                <div class="nav-item"  @click="selected($t('menu.tongxi'))" :class="{active : active == '童熙健康'|| active == 'Tongxi health'}">{{$t('menu.tongxi')}}</div>
                <div class="nav-item">
                    <div class="nav-select" @click="changeLang('zh')" :class="{active : lang == 'zh'}">中文</div>/
                    <div class="nav-select" @click="changeLang('en')" :class="{active: lang == 'en'}">English</div>
                </div>
                <!-- <select v-model="lang" @change="changeLang(lang)" class="nav-select">
                    <option v-bind:value="option.value" v-for="option in options" :key="option.index" class="option"> 
                        {{option.text}}
                    </option>
                </select> -->
            </div>
        </div>
    </div>
</template>
<style scoped>
   .warp{
       width: 1200px;
       margin:0 auto;
       display: flex;
       flex-flow: row nowrap;
       justify-content: space-between;
       align-items: center;
       background: transparent;
       position: absolute;
       top:35px;
       margin-left : 50% ; 
       transform: translateX(-50%);
       z-index: 100;
   }
   .nav{
       display: flex;
       flex-flow: row nowrap;
       font-family: PingFangSC-Medium;
       font-size: 16px;
       color: #FFFFFF;
       letter-spacing: 0;
   }
   .nav-item{
       margin-left: 50px;
       cursor: pointer;
       color: #fff;
       text-decoration: none;
       position: relative;
   }
   .badge{
       position: absolute;
       background: red;
       color: #fff;
       font-size: 10px;
       text-align: center;
       line-height: 12px;
       padding: 3px;
       border-radius: 4px;
       top: -12px;
       right: -36px;
   }
   .nav-select{
       display: inline-block;
   }
   .active {
        color: #58E3E4;
    }
</style>
<script>
import bus from "../assets/bus.js"
import Cookies from 'js-cookie'
export default {
    data(){
        return{
            active:this.$t('menu.home'),
            lang:"zh"
        }
    },
    methods:{
        selected(name){
            if(name==this.$t('menu.home')){
             this.$router.push({ path:'/pcPage/home' })
            //  location.reload()
            }else if(name == this.$t('menu.project')){
             this.$router.push({ path:'/pcPage/project' })  
            }else if(name == this.$t('menu.partner')){
             this.$router.push({ path:'/pcPage/panter' })  
            }else if(name == this.$t('menu.tongxi')){
             this.$router.push({ path:'/pcPage/downLoad' })  
            }else if(name == this.$t("menu.chanping")){
                this.$router.push('/product')
            }
            this.active = name;
         },
        changeLang(res){
            Cookies.set('lang', res);//设置name
            var lang = Cookies.get('lang');//获取name
            console.log(lang)
            this.$i18n.locale = lang 
            this.lang =lang
        }
    },
    mounted(){
         if(!Cookies.get('lang')){
             this.lang = "zh"
         }else{
             this.lang =  Cookies.get('lang')
         }
         console.log(this.lang)
         this.$i18n.locale = this.lang
        var that = this
        bus.$on("navName",function(mas){
          that.active = mas
        })
    }
}
</script>
