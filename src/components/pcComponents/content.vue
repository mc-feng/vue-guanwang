<template>
    <div class="content">
       <div class="content-warp">
        <template v-if="contentName=='智慧医疗'">
            <div class="content-title">{{$t('content.yiliaoTitle')}}</div>
            <div class="content-items">
                <div class="items-left">
                    <img src="../../assets/content/big1.png" alt="" class="items-image">
                </div>
                <div class="items-right">
                    <div class="items-title">{{$t('content.yiliaoHeader1')}}</div>
                    <div class="items-jieshao">{{$t('content.yiliaoContent1')}}</div>
                </div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <div class="items-title">{{$t('content.yiliaoHeader2')}}</div>
                    <div class="items-jieshao">{{$t('content.yiliaoContent2')}}</div>
                </div>
                <div class="items-right">
                    <img src="../../assets/content/big2.png" alt="" class="items-image">
                </div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <img src="../../assets/content/big3.png" alt="" class="items-image">
                </div>
                <div class="items-right">
                    <div class="items-title">{{$t('content.yiliaoHeader3')}}</div>
                    <div class="items-jieshao">{{$t('content.yiliaoContent3')}}</div>
                </div>
            </div>
        </template>
        <template v-if="contentName == '保险科技'">
            <div class="content-title">{{$t('content.baoxianTitle')}}</div>
            <div class="content-items">
                <div class="items-left">
                    <img src="../../assets/content/big5.png" alt="" class="items-image">
                </div>
                <div class="items-right">
                    <div class="items-title">{{$t('content.baoxianHeader1')}}</div>
                    <div class="items-jieshao">{{$t('content.baoxianContent1')}}</div>
                </div>
            </div>
        </template>
        <template v-if="contentName == '家庭健康'">
            <div class="content-title">{{$t('content.jiankangTitle')}}</div>
            <div class="content-items">
                <div class="items-left">
                    <img src="../../assets/content/big4.png" alt="" class="items-image">
                </div>
                <div class="items-right">
                    <div class="items-title">{{$t('content.jiankangHeader1')}}</div>
                    <div class="items-jieshao">{{$t('content.jiankangContent1')}}</div>
                </div>
            </div>
        </template>
       </div>
    </div>
</template>
<style scoped>
  .content{
      background: url(../../assets/background.png) no-repeat center center;
      background-size: cover;
      background-attachment: fixed;
  }
  .content-warp{
      padding: 130px 0 170px;
      width: 1200px;
      margin: auto;
  }
  .content-title{
      font-family: FZLTZHUNHK--GBK1-0;
      font-size: 36px;
      color: #FFFFFF;
      letter-spacing: 0.72px;
      margin-top: 40px;
      margin-bottom: 70px
  }
  .content-items{
      background: #FFFFFF;
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 30px
  }
  .items-left{
      margin-left: 80px
  }
  .items-right{
      margin-left: 100px
  }
  .items-image{
      width: 400px;
      height: 350px;
  }
  .items-title{
      font-family: PingFangSC-Regular;
      font-size: 28px;
      color: #000000;
      letter-spacing: 0;
      text-align: center;
      line-height: 60px;
      border-bottom: 1px solid #1C7EED;
      display: inline-block;
      margin-top: 60px
  }
  .items-jieshao{
     margin-top: 30px;
     width: 500px;
     opacity: 0.94;
     font-family: PingFangSC-Regular;
     font-size: 15px;
     color: #000000;
     letter-spacing: 0;
     text-align: justify;
     line-height: 28px;
     margin-bottom: 30px;
  }
</style>
<script>
export default {
    data(){
        return{
            contentName:this.$route.params.names
        }
    },
}
</script>
