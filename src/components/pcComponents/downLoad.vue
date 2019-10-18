<template>
    <div :class="[productName == '义金健康'?'down1':'down2']">
        <div class="down-warp">
            <template v-if="productName == '义金健康'">
                <img src="../../assets/downLoad/shouji.png" alt="" class="down-image">
                <div class="content-warp">
                    <div class="content-title">
                        {{$t("tongxi.app")}}<br/>{{$t('tongxi.introduce')}}
                    </div>
                    <div class="content-font">{{$t("tongxi.detaile")}}</div>
                    <img src="../../assets/downLoad/erwei.png" alt="" class="content-image">
                    <div class="content-image-font">{{$t("tongxi.saoma")}}</div>
                </div>
            </template>
            <template v-if="productName == '童熙健康'">
                 <img src="../../assets/downLoad/yijin/product.png" alt="" class="down-image">
                <div class="content-warp">
                    <div class="content-title">
                        {{$t("tongxi.app")}}<br/>{{$t('tongxi.introduce')}}
                    </div>
                    <div class="content-font">{{$t("tongxi.detaile")}}</div>
                    <div>
                        <img src="../../assets/downLoad/yijin/erwei.png" alt="" class="content-image-small">
                         <img src="../../assets/downLoad/yijin/search.png" alt="" class="content-image2">
                    </div>
                    <div class="content-image-font">{{$t("tongxi.saoma")}}</div>
                </div>
            </template>
        </div>
    </div>
</template>
<style scoped>
  .down1{
      background: url(../../assets/downLoad/xiazaibeijingtu.png) no-repeat center center;
      background-size: cover;
      background-attachment: fixed;
  }
  .down2{
      background: url(../../assets/downLoad/yijin/background.png) no-repeat center center;
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
  .content-image-small{
      margin-top: 50px;
      width: 72px;
      height: 72px;
  }
  .content-image2{
      width: 208px;
      height: 51px;
      margin-left: 24px;
  }
  .content-image-font{
      margin-top: 20px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
  }
</style>
<script>
export default {
    data(){
        return{
            productName:this.$route.params.product
        }
    },
    beforeRouteUpdate (to, from, next) {
    // 做一些想要做的处理...
    // this.errCode = to.params.code
    // this.info = formatErrorMsg(this.errCode)
       this.productName = to.params.product
       console.log(this.productName)
       next()  // 一定要有next
    },
}
</script>