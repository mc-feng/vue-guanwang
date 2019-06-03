<template>
    <div class="down">
        <div class="down-warp">
             <img src="../../assets/downLoad/shouji.png" alt="" class="down-image">
             <div class="content-warp">
                 <div class="content-title">
                     {{$t("tongxi.app")}}<br/>{{$t('tongxi.introduce')}}
                 </div>
                 <div class="content-font">{{$t("tongxi.detaile")}}</div>
                 <img src="../../assets/downLoad/erwei.png" alt="" class="content-image">
                 <div class="content-image-font">{{$t("tongxi.saoma")}}</div>
             </div>
        </div>
    </div>
</template>
<style scoped>
  .down{
      background: url(../../assets/downLoad/xiazaibeijingtu.png) no-repeat center center;
      background-size: cover;
      background-attachment: fixed;
  }
  .down-warp{
      width: 750px;
      margin: 0 auto;
      padding: 240px 0 160px;
      display: flex;
      flex-flow: row nowrap;
  }
  .down-image{
      width: 240px;
      height: 487px;
  }
  .content-warp{
      margin-left: 110px;
  }
  .content-title{
      font-family: PingFangSC-Light;
      font-size: 36px;
      color: #FFFFFF;
      font-weight: 100;
      margin-top: 80px
  }
  .content-font{
      width: 400px;
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #FFFFFF;
      margin-top: 10px;
  }
  .content-image{
      margin-top: 50px;
      width: 100px;
      height: 100px;
  }
  .content-image-font{
      margin-top: 20px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
  }
</style>
