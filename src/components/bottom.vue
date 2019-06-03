<template>
    <div class="bottom">
       <div class="bottom-warp" :style="color">
          <div class="bottom-item">
              <img src="../assets/erwei.png" alt="" class="logo-image">
              <div class="logo-introduce">{{$t('bottom.gongzong')}}</div>
          </div>
          <div class="bottom-item">
              <div class="item-font">Tonti</div>
              <div class="item-font">{{$t('bottom.chanping')}}</div>
              <div class="item-font">{{$t('bottom.about')}}</div>
          </div>
          <div class="bottom-item">
              <div class="item-font">{{$t('bottom.chuanzhen')}}</div>
              <div class="item-font">{{$t('bottom.youxiang')}}</div>
              <div class="item-font">{{$t('bottom.lianxi')}}</div>
          </div>
          <div class="bottom-item">
              <div class="item-font">{{$t('bottom.kefu')}}</div>
              <div class="item-font">0571-89915722 </div>
              <div class="item-font">4009-959510</div>
          </div>
       </div>
    </div>
</template>
<style scoped>
   .bottom{
       height: 205px;
       background: #ffffff
   }
   .bottom-warp{
       width: 940px;
       height: 100%;
       margin: 0 auto;
       display: flex;
       flex-flow: row nowrap;
       align-items: center;
       justify-content: space-between
   }
   .logo-image{
       margin-top: 30px
   }
   .logo-introduce{
       font-family: PingFangSC-Regular;
       font-size: 12px;
       letter-spacing: 0;
       margin-top: 9px;
   }
   .item-font{
       font-family: PingFangSC-Regular;
       font-size: 13px;
       letter-spacing: 0;
       line-height: 30px;
   }
</style>
<script>
export default {
  props:{
    'color':{
        type:String,
        default:"color:#313131"
    }
  },
  mounted(){
      console.log(this.color)
  }
}
</script>

