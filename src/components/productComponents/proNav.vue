<template>
    <div class="pro-nav" :style="background">
        <div class="warp">
            <div class="nav-left">
                <img src="../../assets/logo.png" alt="loge" @click="select()" class="warp-image" style="width:82px;height:58px;marginLeft:77px">
                <div class="tiyan">产品体验中心</div>
            </div>
            <div class="nav-warp">
                <div class="nav-item"  @click="selectNav('化验单识别')" :class="{active : active == '化验单识别'}">化验单识别</div>
                <div class="nav-item" @click="selectNav('病理报告单识别')" :class="{active : active == '病理报告单识别'}">病理报告单识别</div>
                <div class="nav-item" @click="selectNav('影像报告单识别')" :class="{active : active == '影像报告单识别'}">影像报告单识别</div>
                <!-- <div class="nav-item" @click="selectNav('体检报告单识别')" :class="{active : active == '体检报告单识别'}">体检报告单识别</div> -->
            </div>
            <div class="touxiang" v-if="show">
                <img src="http://www.tonticn.cn:8089/touxiang.jpg" alt="" class="tx-image" @click="showTk">
                <p class="tx-font" @click="showTk">{{account}}</p>
                <div class="tankuang" :class="tkShow?'showtk':''">
                    <div class="triangle"></div>
                    <div class="tx-gr" @click="showModel">个人中心</div>
                    <div class="tx-out" @click="quit">退出</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
  .warp{
      height: 95px;
      width: 1200px;
      margin:0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
  }
  .warp-image{
      cursor: pointer;
  }
  .tiyan{
      font-family: PingFangSC-Medium;
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: 0;
      margin-left: 31px
  }
  .nav-left{
      display: flex;
      align-items: center;
  }
  .nav-warp{
      display: flex;
  }
  .nav-item{
      font-family: PingFangSC-Medium;
      font-size: 16px;
      margin-right: 50px;
      color: #FFFFFF;
      cursor: pointer;
  }
  .nav-item:hover{
     color: #37B2DB;
  }
  .active{
     color: #37B2DB;
  }
  .touxiang{
      display: flex;
      cursor: pointer;
      position: relative;
  }
  .tx-image{
      width: 25px;
      height: 25px;
      border-radius: 50%
  }
  .tx-font{
      font-size: 14px;
      color: #FFFFFF;
      margin-left: 15px;
      max-width: 200px;
      line-height: 25px;
  }
  .tx-gr{
      margin-top: 35px;
  }
  .tx-out{
       margin-top: 14px;
  }
  .tx-gr:hover{
      color: #37B2DB;
  }
  .tx-out:hover{
       color: #37B2DB;
  }
  .tankuang{
      position: absolute;
      width: 168px;
      height: 108px;
      background: #FFFFFF;
      font-size: 14px;
      color: #111111;
      flex-flow: column;
      align-items: center;
      left: -70px;
      top:76px;
      display: none;
  }
  .triangle{
      display: inline-block;
      vertical-align: top;
      border-bottom: 15px solid #ffffff;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
      content: "";
      position: absolute;
      top: -15px;
  }
  .showtk{
      display: flex;
  }
</style>
<script>
import bus from "../../comment/bus";
import {store} from "../../comment/store";
import {Modal} from 'iview';
import Cookies from 'js-cookie';
import {logout} from "../../api/api";
import {Message} from 'iview';
export default {
    props:{
        'background':{
            type:String,
            default:"background:#17375C"
        }
    },
    data(){
        return{
            active:"",
            show:false,
            account:"",
            tkShow:false
        }
    },
    methods:{
        select(){
            this.$router.replace('/pcPage')
            location.reload()
        },
        selectNav(name){
            if(store.state.click){  
                bus.$emit('id-selected', name)
                // DOM 现在更新了
                this.$router.push({
                    path: `/product/report/${this.account}`,
                })
                this.active = name
            }else{
               Modal.error(
                {
                    title:"消息提示",
                    content: "请登录后在点击"
                })
            }
        },
        showTk(){
           this.tkShow =  !this.tkShow
        },
        showModel(){
            bus.$emit('show-model', true);//发送显示模态框按键
            this.showTk();
        },
        quit(){//退出登录
           store.setMessageAction(false);
           this.$router.replace({path: '/product/loge'});
           this.show= false;
           this.tkShow = false;
           this.active = "";
           logout({}).then((res)=>{
               console.log(res)
           }).catch((err)=>{
           })
           Cookies.remove('click');
           Cookies.remove('account')
        }
    },
    mounted(){
        var that = this
        bus.$on('tx-show',function (id) {
         console.log(id)
         that.account = id.account;
         that.show= true;
         store.setMessageAction(true)
        })//显示头像
    },
    beforeDestroy () {
            bus.$off('id-selected')
    }
}
</script>


