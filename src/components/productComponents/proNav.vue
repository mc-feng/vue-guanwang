<template>
    <div class="pro-nav" :style="background">
        <div class="warp">
            <img src="../../assets/logo.png" alt="loge" @click="select()" class="warp-image">
            <div class="tiyan">产品体验中心</div>
            <div class="nav-warp">
                <div class="nav-item"  @click="selectNav('化验单识别')" :class="{active : active == '化验单识别'}">化验单识别</div>
                <div class="nav-item" @click="selectNav('病理报告单识别')" :class="{active : active == '病理报告单识别'}">病理报告单识别</div>
                <div class="nav-item" @click="selectNav('影像报告单识别')" :class="{active : active == '影像报告单识别'}">影像报告单识别</div>
                <div class="nav-item" @click="selectNav('体检报告单识别')" :class="{active : active == '体检报告单识别'}">体检报告单识别</div>
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
  .nav-warp{
      margin-left: 181px;
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
</style>
<script>
import bus from "../../comment/bus"
export default {
    props:{
        'background':{
            type:String,
            default:"background:#17375C"
        }
    },
    data(){
        return{
            active:""
        }
    },
    methods:{
        select(){
            this.$router.replace('/pcPage')
            location.reload()
        },
        selectNav(name){
            console.log(name)
            bus.$emit('id-selected', name)
            // DOM 现在更新了
            this.$router.push({
                path: `/product/report`,
            })
            this.active = name
        }
    },
    beforeDestroy () {
            bus.$off('id-selected')
    }
}
</script>


