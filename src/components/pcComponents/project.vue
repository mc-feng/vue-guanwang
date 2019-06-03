<template>
    <div class="project">
        <div class="project-warp">
           <div class="project-title">
              {{$t('project.title')}}
           </div>
           <div class="content-warp">
               <div class="content-items">
                   <img src="../../assets/project/wangye1.png" alt="" class="items-images">
                   <div class="items-title">{{$t('project.itemHeader1')}}</div>
                   <div class="items-content">{{$t('project.itemContent1')}}</div>
               </div>
               <div class="content-items">
                   <img src="../../assets/project/wangye2.png" alt="" class="items-images">
                   <div class="items-title">{{$t('project.itemHeader2')}}</div>
                   <div class="items-content">{{$t('project.itemContent2')}}</div>
               </div>
               <div class="content-items">
                   <img src="../../assets/project/wangye3.png" alt="" class="items-images">
                   <div class="items-title">{{$t('project.itemHeader3')}}</div>
                   <div class="items-content">{{$t('project.itemContent3')}}</div>
               </div>
               <div class="content-items">
                   <img src="../../assets/project/wangye4.png" alt="" class="items-images">
                   <div class="items-title">{{$t('project.itemHeader4')}}</div>
                   <div class="items-content">{{$t('project.itemContent4')}}</div>
               </div>
           </div>
        </div>
    </div>
</template>
<style scoped>
  .project{
      background: url(../../assets/project/xiangmubeijingtu.png);
      background-size: cover;
      background-attachment: fixed;
  }
  .project-warp{
      width: 1200px;
      margin: 0 auto;
      padding: 200px 0 167px;
  }
  .project-title{
      font-family: PingFangSC-Medium;
      font-size: 36px;
      color: #FFFFFF;
      letter-spacing: 0;
  }
  .content-warp{
      margin-top: 110px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
  }
  .content-items{
      height: 360px;
      width: 280px;
      display: flex;
      flex-flow: column nowrap;
      align-items: center
  }
  .items-images{
      width: 80px;
      height: 80px;
      margin-top: 42px;
  }
  .items-title{
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 0;
      margin-top: 44px;
  }
  .items-content{
      width: 230px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      line-height: 24px;
      margin-top: 40px
  }
</style>
