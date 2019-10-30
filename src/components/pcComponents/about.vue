<template>
    <div class="down">
        <div class="down-warp">  
            <div class="content-left">
                <div class="content-header">
                    <div class="content-icon"></div>
                    <div class="content-header-font">{{$t('aboutUs.title')}}</div>
                </div>
                <div class="content-fanyi">Company Introduction</div>
                <div class="content-main">
                    <div class="content-main-header"><img src="../../assets/downLoad/yijin/log.png" class="content-loge">{{$t('aboutUs.name')}}</div>
                    <div class="content-main-controduct">
                        {{$t('aboutUs.introduce')}}
                    </div>
                </div>
            </div>
            <div class="content-right"></div>
        </div>
    </div>
</template>
<style scoped>
  .down{
      background: url(../../assets/downLoad/yijin/us.png) no-repeat center center;
      background-size: cover;
  }
  .down-warp{
      width: 750px;
      padding: 240px 0 160px;
      display: flex;
      flex-flow: row nowrap;
      margin-left: 415px;
  }
  .content-left{
      height: 600px;
  }
  .content-header{
      display: flex;
      align-items: center;
  }
  .content-icon{
      width: 15px;
      height: 5px;
      margin-right: 10px;
      background:  #55CCDD;
  }
  .content-header-font{
        font-family: PingFangSC-Regular;
        font-size: 36px;
        color: #FFFFFF;
        line-height: 50px;
  }
  .content-fanyi{
      margin-left: 25px;
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: #FFFFFF;
      line-height: 33px;
  }
  .content-main{
      margin-left: 25px;
      margin-top: 87px;
  }
  .content-main-header{
      font-family: PingFangSC-Regular;
      font-size: 36px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 50px;
  }
  .content-main-controduct{
      width: 702px;
      font-size: 18px;
      margin-top: 13px;
      line-height: 30px;
      color: #FFFFFF;
  }
  .content-loge{
      width: 71px;
      height: 29px;
      margin-right: 10px;
  }
</style>