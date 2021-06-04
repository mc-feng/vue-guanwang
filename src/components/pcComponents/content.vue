<template>
    <div class="content">
       <div class="content-warp">
        <template v-if="(contentName=='智慧医疗')||(contentName=='Smart medical')">
            <div class="content-title">
                <div class="tile-tips"></div>
                <div>{{$t('content.yiliaoTitle')}}</div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <div class="items-title">{{$t('content.yiliaoHeader4')}}</div>
                    <div class="items-jieshao">{{$t('content.yiliaoContent4')}}</div>
                </div>
                <div class="items-right">
                    <img src="../../assets/content/yiliao/jiankong.png" alt="" class="items-image">
                </div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <img src="../../assets/content/yiliao/yiyuan.png" alt="" class="items-image">
                </div>
                <div class="items-right">
                    <div class="items-title">{{$t('content.yiliaoHeader1')}}</div>
                    <div class="items-jieshao">{{$t('content.yiliaoContent1')}}</div>
                </div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <img src="../../assets/content/yiliao/jiedu.png" alt="" class="items-image">
                </div>
                <div class="items-right">
                    <div class="items-title">{{$t('content.yiliaoHeader3')}}</div>
                    <div class="items-jieshao">{{$t('content.yiliaoContent3')}}</div>
                </div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <div class="items-title">{{$t('content.yiliaoHeader2')}}</div>
                    <div class="items-jieshao">{{$t('content.yiliaoContent2')}}</div>
                </div>
                <div class="items-right">
                    <img src="../../assets/content/yiliao/shoushu.png" alt="" class="items-image">
                </div>
            </div>
        </template>
        <template v-if="(contentName=='保险科技')||(contentName=='Science and Technology Insurance')">
            <div class="content-title">
                <div class="tile-tips"></div>
                <div>{{$t('content.baoxianTitle')}}</div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <img src="../../assets/content/keji/dangan.png" alt="" class="items-image">
                </div>
                <div class="items-right">
                    <div class="items-title">{{$t('content.baoxianHeader1')}}</div>
                    <div class="items-jieshao">{{$t('content.baoxianContent1')}}</div>
                </div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <div class="items-title">{{$t('content.baoxianHeader2')}}</div>
                    <div class="items-jieshao">{{$t('content.baoxianContent2')}}</div>
                </div>
                <div class="items-right">
                    <img src="../../assets/content/keji/piaoju.png" alt="" class="items-image">
                </div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <img src="../../assets/content/keji/hebao.png" alt="" class="items-image">
                </div>
                <div class="items-right">
                    <div class="items-title">{{$t('content.baoxianHeader3')}}</div>
                    <div class="items-jieshao">{{$t('content.baoxianContent3')}}</div>
                </div>
            </div>
        </template>
        <template v-if="(contentName=='保险创新')||(contentName=='Insurance innovation')">
            <div class="content-title">
                <div class="tile-tips"></div>
                <div>{{$t('content.chuangxinTitle')}}</div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <img src="../../assets/content/chuanxin/fangai.png" alt="" class="items-image">
                </div>
                <div class="items-right">
                    <div class="items-title">{{$t('content.chuangxinHeader1')}}</div>
                    <div class="items-jieshao">{{$t('content.chuangxinContent1')}}</div>
                </div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <div class="items-title">{{$t('content.chuangxinHeader2')}}</div>
                    <div class="items-jieshao">{{$t('content.chuangxinContent2')}}</div>
                </div>
                <div class="items-right">
                    <img src="../../assets/content/chuanxin/chijun.png" alt="" class="items-image">
                </div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <img src="../../assets/content/chuanxin/cuolou.png" alt="" class="items-image">
                </div>
                <div class="items-right">
                    <div class="items-title">{{$t('content.chuangxinHeader3')}}</div>
                    <div class="items-jieshao">{{$t('content.chuangxinContent3')}}</div>
                </div>
            </div>
            <div class="content-items">
                <div class="items-left">
                    <div class="items-title">{{$t('content.chuangxinHeader4')}}</div>
                    <div class="items-jieshao">{{$t('content.chuangxinContent4')}}</div>
                </div>
                <div class="items-right">
                    <img src="../../assets/content/chuanxin/wuian.png" alt="" class="items-image">
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
      margin-bottom: 70px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
  }
  .tile-tips{
      width: 15px;
      height: 5px;
      background-color: #55CCDD;
      margin-right: 10px;
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
      width: 350px;
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
    beforeRouteUpdate (to, from, next) {
    // 做一些想要做的处理...
    // this.errCode = to.params.code
    // this.info = formatErrorMsg(this.errCode)
       this.contentName = to.params.names
       next()  // 一定要有next
    },
}
</script>
