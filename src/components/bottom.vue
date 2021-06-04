<template>
  <div class="bottom">
    <div class="bottom-warp" :style="color">
      <div class="bottom-item">
        <img src="../assets/erwei.png" alt="" class="logo-image" />
        <div class="logo-introduce">{{ $t("bottom.gongzong") }}</div>
      </div>
      <div class="bottom-item">
        <div class="item-font">Tonti</div>
        <div class="item-font">{{ $t("bottom.chanping") }}</div>
        <div class="item-font">{{ $t("bottom.about") }}</div>
        <div class="beian-warp">
          <div class="item-font hover" @click="linkeBei">
            工业和信息化部备案管理系统网站 浙ICP备18047769号-2 Copyright
            2017-现在 义金（杭州）健康科技有限公司 版权所有
          </div>
        </div>
      </div>
      <div class="bottom-item">
        <div class="item-font">{{ $t("bottom.chuanzhen") }}</div>
        <div class="item-font">{{ $t("bottom.youxiang") }}</div>
        <div class="item-font">{{ $t("bottom.lianxi") }}</div>
      </div>
      <div class="bottom-item">
        <div class="item-font">{{ $t("bottom.kefu") }}</div>
        <div class="item-font">0571-89915722</div>
        <div class="item-font">4009-959510</div>
      </div>
      <div class="bottom-item">
        <!-- <div class="item-font">{{ $t("bottom.wangbie") }}</div> -->
        <!-- <div class="item-font hover" @click="linkeBei">浙ICP备18047769号-3 </div> -->
        <div class="item-font"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bottom {
  height: 205px;
  background: #ffffff;
}
.bottom-item {
  position: relative;
}
.bottom-warp {
  width: 940px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
.logo-image {
  margin-top: 30px;
}
.logo-introduce {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  letter-spacing: 0;
  margin-top: 9px;
}
.item-font {
  font-family: PingFangSC-Regular;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 30px;
  min-height: 30px;
}
.beian-warp {
  display: flex;
  position: absolute;
  width: 800px;
}
.hover:hover {
  color: blue;
  cursor: pointer;
}
</style>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "color:#313131"
    }
  },
  mounted() {
    console.log(this.color);
  },
  methods: {
    linkeBei() {
      window.open("https://beian.miit.gov.cn/#/Integrated/index");
    }
  }
};
</script>
