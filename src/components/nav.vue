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
                <div class="nav-item"  @click="selected('产品介绍')" :class="{active : active == '产品介绍'}">
                    {{"产品介绍"}}
                    <i class="iconfont sword" :class="{actives : show1}">&#xe6b9;</i>
                    <transition name="fade">
                        <div class="sub-view" v-if="show1">
                            <div class="sub-item" @click.stop="selected2('智慧医疗')" :class="{active : subActive == '智慧医疗'}"><i class="iconfont fontSet" :class="{actives : subActive == '智慧医疗'}">&#xe619;</i>智慧医疗</div>
                            <div class="sub-item" @click.stop="selected2('保险科技')" :class="{active : subActive == '保险科技'}"><i class="iconfont fontSet" :class="{actives : subActive == '保险科技'}">&#xe664;</i>保险科技</div>
                            <div class="sub-item" @click.stop="selected2('保险创新')" :class="{active : subActive == '保险创新'}"><i class="iconfont fontSet" :class="{actives : subActive == '保险创新'}">&#xe60f;</i>保险创新</div>
                        </div>
                    </transition>
                </div>
                <div class="nav-item"  @click="selected('产品下载')" :class="{active : active == '产品下载'}">
                    {{"产品下载"}}
                    <i class="iconfont sword" :class="{actives : show2}">&#xe6b9;</i>
                    <transition name="fade">
                        <div class="sub-view showHeight" v-if="show2">
                            <div class="sub-item" @click.stop="selected2('义金健康')" :class="{active : subActive == '义金健康'}"><i class="iconfont fontSet" :class="{actives : subActive == '义金健康'}">&#xe60b;</i>义金健康</div>
                            <div class="sub-item" @click.stop="selected2('童熙健康')" :class="{active : subActive == '童熙健康'}"><i class="iconfont fontSet" :class="{actives : subActive == '童熙健康'}">&#xe602;</i>童熙健康</div>
                        </div>
                    </transition>
                </div>
                <div class="nav-item"  @click="selected($t('menu.partner'))" :class="{active : active == '合作伙伴'|| active == 'Partner'}">{{$t('menu.partner')}}</div>
                <div class="nav-item"  @click="selected('关于我们')" :class="{active : active == '关于我们'}">{{"关于我们"}}</div>
                <!-- <div class="nav-item"  @click="selected($t('menu.project'))" :class="{active : active == '项目介绍'|| active == 'Project Introduction'}">{{$t('menu.project')}}</div>
                <div class="nav-item"  @click="selected($t('menu.partner'))" :class="{active : active == '合作伙伴'|| active == 'Partner'}">{{$t('menu.partner')}}</div>
                <div class="nav-item"  @click="selected($t('menu.tongxi'))" :class="{active : active == '童熙健康'|| active == 'Tongxi health'}">{{$t('menu.tongxi')}}</div> -->
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
    .sword{
        position: absolute;
        right: -16px;
        top: 25%;
        font-size: 12px;
        color: #FFFFFF;
    }
    .sub-view{
        padding-bottom: 23px;
        background:  rgba(3,15,34,0.54);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;
        width: 100px;
        position: absolute;
        left: -14px;
        height: 160px;
        overflow: hidden;
    }
    .showHeight{
        height: 110px;
    }
    .sub-item{
        margin-top: 21px;
        line-height: 25px;
        color: #fff;
        font-size: 16px;
        position: relative;
    }
    .fontSet{
       font-size: 16px;
       margin-right: 5px;
       color: #fff;
    }
    .fade-leave-active,.fade-enter-active{
            transition: height .5s ease-in .1s; 
    }
    .fade-leave-active,.fade-enter{
            height:0px !important;
    }
   .active {
        color: #58E3E4;
    }
   .actives{
        transform:rotate(-180deg);
        transition:all .5s ease-in .1s;
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
            subActive:"",
            show1:false,
            show2:false,
            lang:"zh"
        }
    },
    methods:{
        selected(name){
            if(name==this.$t('menu.home')){
                this.show2 = false;
                this.show1 =false;
                this.subActive = "";
                this.$router.push({ path:'/pcPage/home' })
            //  location.reload()
            }else if(name == this.$t('menu.partner')){
                this.show2 = false;
                this.show1 =false;
                this.subActive = "";
                this.$router.push({ path:'/pcPage/panter' })  
            }else if(name == this.$t("menu.chanping")){
                this.subActive = "";
                var cookies = Cookies.get('click')
                var account = Cookies.get('account')
                if(cookies){  
                 this.$router.push(`/product/report/${account}`)
                }else{ 
                 this.$router.push('/product')
                }
            }
            this.active = name;
            if(name=="产品介绍"){
                this.show2 = false;
                this.show1 = !this.show1
            }else if(name=="产品下载"){
                 this.show1 =false;
                 this.show2 =  !this.show2
            }else if(name=='关于我们'){
                  this.show2 = false;
                  this.show1 =false;
                   this.$router.push({name:"pcAboutUs"})
            }
         },
        selected2(names){
            this.show2 =false;
            this.show1 =false;
            if((names=="义金健康")||(names=="童熙健康")){
              this.$router.push({name:"pcDownLoad",params:{product:names}})
            }else{
               this.$router.push({ name:'pcContent',params:{names}}) 
            }
            // bus.$emit("navName","")
            this.subActive = names;
            console.log(names)
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
