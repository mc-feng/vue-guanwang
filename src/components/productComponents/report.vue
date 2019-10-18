<template>
    <div class="report">
        <div class="warp">
           <header class="title">{{name}}</header>
           <Upload 
            :action="UpAction"
            ref="upload"
            :show-upload-list="false"
            :with-credentials="true"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :on-error="error"
            :format="['jpg','jpeg','png','bmp']"
            :max-size="4096"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            :data="{account:myAccount}"
           >
                <Button class="updata">上传文件</Button>
            </Upload>
            <div class="tips">提示：可支持PNG、JPG、JPEG、BMP。图片大小不超过4M，请确保识别的部分为图片主体部分</div>
            <div class="content-warp">
                <div class="content-left">
                    <div class="left-title">原始图片</div>
                    <div class="bg">
                        <div v-viewer class="image">
                          <img :src="'http://www.tonticn.cn:8089/' + imgName" v-if="visible" style="width:630px;height: 430px" @click="add()">
                        </div>
                        <!-- <div v-viewer="{movable: false}" class="image">
                          <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width:630px;height: 430px" @click="add()">
                        </div> -->
                        <div class="top-left"></div>
                        <div class="top-right"></div>
                        <div class="bottom-left"></div>
                        <div class="bottom-right"></div>
                        <div class="pane" v-if="pane"></div>
                    </div>
                    <!-- <div class="demo-upload-list" v-for="(item,index) in uploadList" :key="index"> -->
                    <div class="demo-upload-list" v-for="(item,index) in defaultList" :key="index">
                        <template v-if="item.status === 'finished'">
                            <img :src="item.url">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                                <!-- <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon> -->
                            </div>
                        </template>
                        <template v-else>
                            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                        </template>
                    </div>
                </div>
                <div class="content-right">
                    <div class="tab-groub">
                        <div :class="{active:(select==item)}" v-for="(item,index) in tab" @click="slecet(item)" :key="index">{{item}}</div>
                    </div>
                    <div class="main-warp">
                        <div v-show="select=='识别结果'">
                         <template v-if="name=='化验单识别'">
                            <div v-for="(item,index) in result" :key="index">
                                <div class="main-header">{{item.physicalTyep}}</div>
                                <div v-for="(child,indexs) in item.dealDate" :key="indexs" class="main-content">
                                    <div class="content1">{{child.name}}</div>
                                    <div class="content2">{{child.result}}</div>
                                </div>
                            </div>
                         </template>
                         <template v-if="name=='病理报告单识别'">
                             <div class="main-content">
                                    <div class="content1">报告单类别</div>
                                    <div class="content2">病理报告单</div>
                             </div>
                             <div class="main-header">基本信息</div>
                             <div class="main-content" v-if="result.name">
                                    <div class="content1">姓名</div>
                                    <div class="content2">{{result.name|filterBase}}</div>
                             </div>
                             <div class="main-content" v-if="result.age">
                                    <div class="content1">年龄</div>
                                    <div class="content2">{{result.age|filterBase}}</div>
                             </div>
                             <div class="main-content" v-if="result.histologic_grade">
                                    <div class="content1">组织学分级</div>
                                    <div class="content2">{{result.histologic_grade|filterBase}}</div>
                             </div>
                             <div class="main-content" v-if="result.hosptialName">
                                    <div class="content1">医院名称</div>
                                    <div class="content2">{{result.hosptialName|filterBase}}</div>
                             </div>
                             <div class="main-content" v-if="result.hosptialTime">
                                    <div class="content1">检查日期</div>
                                    <div class="content2">{{result.hosptialTime|filterBase}}</div>
                             </div>
                             <div class="main-header">病理诊断</div>
                             <div class="main-long" v-if="result.examination_result" v-html="msg(result.examination_result)">
                             </div>
                         </template>
                         <template v-if="name=='影像报告单识别'">
                             <div class="main-content">
                                    <div class="content1">报告单类别</div>
                                    <div class="content2">影像报告单</div>
                             </div>
                             <div class="main-header">基本信息</div>
                             <div class="main-content" v-if="result.name">
                                    <div class="content1">姓名</div>
                                    <div class="content2">{{result.name|filterBase}}</div>
                             </div>
                             <div class="main-content" v-if="result.age">
                                    <div class="content1">年龄</div>
                                    <div class="content2">{{result.age|filterBase}}</div>
                             </div>
                             <div class="main-content" v-if="result.hosptialName">
                                    <div class="content1">医院名称</div>
                                    <div class="content2">{{result.hosptialName|filterBase}}</div>
                             </div>
                             <div class="main-content" v-if="result.hosptialTime">
                                    <div class="content1">检查日期</div>
                                    <div class="content2">{{result.hosptialTime|filterBase}}</div>
                             </div>
                             <div class="main-content" v-if="result.siteType">
                                    <div class="content1">检查项目</div>
                                    <div class="content2">{{result.siteType|filterBase}}</div>
                             </div>
                             <div class="main-header">检查所见</div>
                             <div class="main-long" v-if="result.describe" v-html="msg(result.describe)">
                             </div>
                             <!-- <div class="main-long">
                                {{result.describe|filterWu}}
                             </div> -->
                             <div class="main-header">意见诊断</div>
                             <div class="main-long">
                                {{result.conclusion|filterWu}}
                             </div>
                         </template>
                        </div>
                        <!-- <div v-show="select=='高精度识别'">高精度识别</div> -->
                    </div>
                </div>
            </div>
        </div>
        <Modal v-model="model" width=720>
            <p class="m-header">个人中心</p>
            <Form :model="formLeft" label-position="left" :label-width="100" ref="formLeft">
                <Form-item label="账号姓名">
                    <!-- <Input v-model="formLeft.input1"></Input> -->
                     <div class="font-number">{{formLeft.account}}</div>
                </Form-item>
                <Form-item label="用户类别">
                    <div class="font-number">{{formLeft.userType}}</div>
                    <!-- <Input v-model="formLeft.input1"></Input> -->
                    <!-- <input v-model="formLeft.userType" class="inputs"> -->
                </Form-item>
                <Form-item label="手机号">
                    <div class="font-number">{{formLeft.phone}}</div>
                    <!-- <Input v-model="formLeft.input2"></Input> -->
                    <!-- <input v-model="formLeft.phone" class="inputs"> -->
                </Form-item>
                <Form-item label="企业名称">
                    <Input v-model="formLeft.enterprise"></Input>
                </Form-item>
                <Form-item label="使用者姓名">
                    <Input v-model="formLeft.username"></Input>
                </Form-item>
                <Form-item label="部门">
                    <Input v-model="formLeft.department"></Input>
                </Form-item>
                <Form-item label="总次数">
                    <div class="font-number">{{formLeft.userNumberCount}}</div>
                </Form-item>
                <Form-item label="剩余次数">
                    <div class="font-number">{{formLeft.userNumber}}</div>
                </Form-item>
                <Button type="primary" style="height:40px;font-size: 14px;color: #FFFFFF;" @click="handleSubmit('formLeft')">提交</Button>
                <Button  style="margin-left:8px;font-size: 14px;color: #1E80EE;height:40px;" @click="clooseButtun">取消</Button>
            </Form>
            <div slot="footer"></div><!--自定义页脚 -->
        </Modal>
    </div>
</template>
<style scoped>
  .report{
      background: #f4f5f7;
  }
  .warp{
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
  }
  .title{
      font-size: 36px;
      color: #0A2341;
      margin-top: 51px;
  }
  .updata{
      width: 332px;
      height: 50px;
      background: #1C7EED;
      font-size: 16px;
      color: #FFFFFF;
      margin-top: 35px;
  }
  .tips{
      font-size: 14px;
      color: #878787;
      margin-top: 31px;
  }
  .content-warp{
      width: 100%;
      margin-top: 39px;
      display: flex;
      margin-bottom: 91px;
  }
  .content-left{
      width: 630px;
  }
  .left-title{
      font-size: 16px;
      color: #000000;
      margin-top: 20px;
  }
  /* 扫描 */
  .bg {
        width: 630px;
        height: 430px;
        overflow: hidden;  /* 隐藏显示区域外的内容*/
        position: relative;
        margin-top: 12px;
  }
 .pane {
     width: 630px;
     height: 142px;
     position: absolute;
     z-index: 1;
     background-image: linear-gradient(-179deg, rgba(14,99,253,0.41) 6%, rgba(125,183,255,0.02) 100%);
     animation: move 1s ease-in-out infinite ;
     -webkit-animation: move 1s ease-in-out infinite;
 }
 .top-left{
  width:30px;
  height:30px;
  border-left:3px solid #1C7EED;
  border-top:3px solid #1C7EED;
  position:absolute;
  left:-0px;
  top:-0px;
}

.top-right{
  width:30px;
  height:30px;
  border-right:3px solid #1C7EED;
  border-top:3px solid #1C7EED;
  position:absolute;
  right:-0px;
  top:-0px;
}
.bottom-left{
  width:30px;
  height:30px;
  border-left:3px solid #1C7EED;
  border-bottom:3px solid #1C7EED;
  position:absolute;
  left:-0px;
  bottom:-0px;
}
.bottom-right{
  width:30px;
  height:30px;
  border-right:3px solid #1C7EED;
  border-bottom:3px solid #1C7EED;
  position:absolute;
  right:-0px;
  bottom:-0px;
}
 @keyframes move {
        from{top:-200px}  /*网格移动到显示区域的外面*/
        to{top:430px}
 }
 /* 内容 */
 .content-right{
     width: 548px;
     margin-left: 20px;
 }
 .tab-groub{
     display: flex;
 }
 .tab-groub div{
     width: 130px;
     height: 45px;
     border: 1px solid #1E80EE;
     text-align: center;
     line-height: 45px;
     font-size: 16px;
     color: #1E80EE;
     cursor: pointer;
 }
 .main-warp{
     background: #FFFFFF;
     border: 1px solid #C1C3C9;
     width: 548px;
     height: 539px;
     overflow:auto
 }
 .tab-groub .active{
    background: #1E80EE;
    color: #FFFFFF
 }
 .main-header{
     height: 50px;
     width: 100%;
     background: #F1F2F5;
     line-height: 50px;
     font-size: 16px;
     color: #000000;
     text-indent: 25px;
 }
 .main-content{
     min-height: 35px;
     border-bottom: 1px solid #D8D8D8;
     display: flex;
     width: 100%;
     line-height: 35px;
     font-size: 16px;
     color: #444444;
 }
 .main-long{
     box-sizing:border-box;
     width: 100%;
     padding: 17px 12px 18px 26px;
     font-size: 16px;
     color: #444444;
 }
 .content1{
     width: 30%;
     border-right: 1px solid #D8D8D8;
     padding-left: 25px;
 }
 .content2{
     width: 70%;
     text-indent: 40px;
 }
 /* 图片展示框 */
 .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
}
.demo-upload-list img{
    width: 100%;
    height: 100%;
}
.demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
    display: block;
}
.demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
}
/* 弹框样式 */
.m-header{
    font-size: 20px;
    color: #111111;
    margin-bottom: 34px;
}
div>>>.ivu-modal-body{
    padding: 72px 120px 127px 81px
}
div>>>.ivu-modal-footer{
    height: 0px;
    border: none;
}
div>>>.ivu-input{
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid #C8D6E1;
      width: 440px;
      font-size: 16px;
      color: #111111;
  }
div>>>.ivu-input:focus{
    box-shadow: none
}
div>>>.ivu-input:hover{
    border-color:#57a3f3
}
div>>>.ivu-form-item-label{
    font-size: 16px;
    color: #999999;
}
div>>>.inputs{
    border: none;
    font-size: 16px;
    color: #111111;
}
div>>>.inputs:focus{
   outline: none
}
.font-number{
    font-size: 16px;
    color: #111111;
}
</style>
<script>
import { Upload,Button, Select,Icon,Progress,Modal,Notice,Form,FormItem,Input} from 'iview';
import {getUserData,updateUserData} from "../../api/api";
import bus from "../../comment/bus";
import Cookies from 'js-cookie'
export default {
    data(){
        return{
            tab:["识别结果"],
            box:["内容一","内容二"],
            indexs:0,
            select:"识别结果",
            defaultList: [
                {
                    'name': '1.jpg',
                    'url': 'http://www.tonticn.cn:8089/1.jpg'
                },
                {
                    'name': '2.jpg',
                    'url': 'http://www.tonticn.cn:8089/2.jpg'
                },
                {
                    'name': '3.jpg',
                    'url': 'http://www.tonticn.cn:8089/3.jpg'
                }
            ],//默认显示的图片
            imgName: '1.jpg',
            visible: true,
            uploadList: ["",""],
            name:"化验单识别",
            result:[{"dealDate":[{"isNumber":"0","name":"红细胞计数","ranges":"成年男性：4.0~5.5，成年女性：3.5~5.0，新生儿：6.0~7.0，婴儿：3.0~4.5，儿童：4.0~5.3","result":"4.6","type":"血常规","unit":"10^12个/L"},{"isNumber":"0","name":"白细胞计数","ranges":"成人白细胞数：4.0~10.0,新生儿：15.0~20.0;婴儿：11.0~12.0","result":"7.6","type":"血常规","unit":"10^9个/L"},{"isNumber":"0","name":"血红蛋白测定","ranges":"成年男性120~160，成年女性110~150，新生儿170~200，婴儿100~140，儿童120~140","result":"127","type":"血常规","unit":"g/L"},{"isNumber":"0","name":"中性粒细胞%","ranges":"50~70","result":"58.5","type":"血常规","unit":"%"},{"isNumber":"0","name":"红细胞压积","ranges":"男性为40~50;女性为36~45;新生儿为49~60;","result":"30.7","type":"血常规","unit":"%"},{"isNumber":"0","name":"淋巴细胞百分比","ranges":"20~40","result":"30.7","type":"血常规","unit":"%"},{"isNumber":"0","name":"单核细胞","ranges":"3~8","result":"5.1","type":"血常规","unit":"%"},{"isNumber":"0","name":"平均红细胞体积","ranges":"82~95","result":"85","type":"血常规","unit":"fl"},{"isNumber":"0","name":"嗜碱性粒细胞%","ranges":"0~1","result":"27.5","type":"血常规","unit":"%"},{"isNumber":"0","name":"嗜酸性粒细胞%","ranges":"0.5~5","result":"5.6","type":"血常规","unit":"%"},{"isNumber":"0","name":"平均血红蛋白浓度","ranges":"320~360","result":"325","type":"血常规","unit":"g/L"},{"isNumber":"0","name":"平均血小板体积","ranges":"7-13","result":"10.2","type":"血常规","unit":"fl"},{"isNumber":"0","name":"淋巴细胞绝对数","ranges":"1.1-3.2","result":"2.3","type":"血常规","unit":"10^9/L"},{"isNumber":"0","name":"血小板分布宽度","ranges":"","result":"12.4","type":"血常规","unit":"pg"},{"isNumber":"0","name":"血小板计数","ranges":"100~300","result":"171","type":"血常规","unit":"10^9/L"},{"isNumber":"0","name":"血小板压积%","ranges":"0.18~0.35","type":"血常规","unit":"%"}],"modify":false,"physicalTyep":"血常规"}],
            names:true,
            model:false,//控制弹框
            formLeft: {
                    account: '',
                    userType:"",
                    phone: '',
                    enterprise: '',
                    username: '',
                    department: '',
                    userNumber:"",
                    userNumberCount:""
            },//用户信息表
            UpAction:"http://www.tonticn.cn:8089/analysis/uploadALiYunHuaYanData",
            pane:false,//是否显示扫描
            myAccount:""//账户名称
        }
    },
    components:{
        Upload,
        Button,
        Icon,
        Progress,
        Modal,
        Form,
        FormItem,
        Input
    },
    methods:{
        slecet(e){
          this.select = e
        },
        handleView (name) {
            var that = this
            clearTimeout();
            this.pane = true;
            setTimeout(()=>{
              that.pane = false;
              clearTimeout();
            },1000)//每次点击给一个扫描效果
            if(name == "1.jpg"){
                this.result =[{"dealDate":[{"isNumber":"0","name":"红细胞计数","ranges":"成年男性：4.0~5.5，成年女性：3.5~5.0，新生儿：6.0~7.0，婴儿：3.0~4.5，儿童：4.0~5.3","result":"4.6","type":"血常规","unit":"10^12个/L"},{"isNumber":"0","name":"白细胞计数","ranges":"成人白细胞数：4.0~10.0,新生儿：15.0~20.0;婴儿：11.0~12.0","result":"7.6","type":"血常规","unit":"10^9个/L"},{"isNumber":"0","name":"血红蛋白测定","ranges":"成年男性120~160，成年女性110~150，新生儿170~200，婴儿100~140，儿童120~140","result":"127","type":"血常规","unit":"g/L"},{"isNumber":"0","name":"中性粒细胞%","ranges":"50~70","result":"58.5","type":"血常规","unit":"%"},{"isNumber":"0","name":"红细胞压积","ranges":"男性为40~50;女性为36~45;新生儿为49~60;","result":"30.7","type":"血常规","unit":"%"},{"isNumber":"0","name":"淋巴细胞百分比","ranges":"20~40","result":"30.7","type":"血常规","unit":"%"},{"isNumber":"0","name":"单核细胞","ranges":"3~8","result":"5.1","type":"血常规","unit":"%"},{"isNumber":"0","name":"平均红细胞体积","ranges":"82~95","result":"85","type":"血常规","unit":"fl"},{"isNumber":"0","name":"嗜碱性粒细胞%","ranges":"0~1","result":"27.5","type":"血常规","unit":"%"},{"isNumber":"0","name":"嗜酸性粒细胞%","ranges":"0.5~5","result":"5.6","type":"血常规","unit":"%"},{"isNumber":"0","name":"平均血红蛋白浓度","ranges":"320~360","result":"325","type":"血常规","unit":"g/L"},{"isNumber":"0","name":"平均血小板体积","ranges":"7-13","result":"10.2","type":"血常规","unit":"fl"},{"isNumber":"0","name":"淋巴细胞绝对数","ranges":"1.1-3.2","result":"2.3","type":"血常规","unit":"10^9/L"},{"isNumber":"0","name":"血小板分布宽度","ranges":"","result":"12.4","type":"血常规","unit":"pg"},{"isNumber":"0","name":"血小板计数","ranges":"100~300","result":"171","type":"血常规","unit":"10^9/L"},{"isNumber":"0","name":"血小板压积%","ranges":"0.18~0.35","type":"血常规","unit":"%"}],"modify":false,"physicalTyep":"血常规"}]
            }else if(name == "2.jpg"){
                this.result = [{"dealDate":[{"isNumber":"0","name":"血清总蛋白","ranges":"","result":"68.5","type":"肝功能","unit":""},{"isNumber":"0","name":"白蛋白","ranges":"","result":"46","type":"肝功能","unit":""},{"isNumber":"0","name":"血清球蛋白","ranges":"","result":"23.1","type":"肝功能","unit":""},{"isNumber":"2","name":"白蛋白球比","ranges":"","result":"白/球比例","type":"肝功能","unit":""},{"isNumber":"0","name":"血清总胆红素","ranges":"","result":"20.96","type":"肝功能","unit":""},{"isNumber":"0","name":"直接胆红素","ranges":"1.71~7","result":"4.93","type":"肝功能","unit":"umol/L"},{"isNumber":"0","name":"间接胆红素","ranges":"1.7~13.7","result":"16.03","type":"肝功能","unit":"umol/L"},{"isNumber":"0","name":"谷丙转氨酶","ranges":"","result":"19","type":"肝功能","unit":""},{"isNumber":"0","name":"谷草转氨酶","ranges":"","result":"24","type":"肝功能","unit":""},{"isNumber":"0","name":"碱性磷酸酶","ranges":"20~110","result":"54","type":"肝功能","unit":"U/L"},{"isNumber":"0","name":"乳酸脱氢酶","ranges":"135~225","result":"133","type":"肝功能","unit":"U/L"},{"isNumber":"0","name":"前白蛋白","ranges":"免疫散射比浊法:200~400mg/L;","result":"241","type":"肝功能","unit":"mg/L"},{"isNumber":"0","name":"血清总胆汁酸","ranges":"","result":"1.6","type":"肝功能","unit":""}],"modify":false,"physicalTyep":"肝功能"}]
            }else if(name =="3.jpg"){
                this.result =[{"dealDate":[{"isNumber":"0","name":"血清总蛋白","ranges":"","result":"71.7","type":"肝功能","unit":""},{"isNumber":"0","name":"白蛋白","ranges":"","result":"48.9","type":"肝功能","unit":""},{"isNumber":"0","name":"血清球蛋白","ranges":"","result":"22.8","type":"肝功能","unit":""},{"isNumber":"0","name":"谷丙转氨酶","ranges":"","result":"10","type":"肝功能","unit":""},{"isNumber":"0","name":"谷草转氨酶","ranges":"","result":"16","type":"肝功能","unit":""},{"isNumber":"0","name":"碱性磷酸酶","ranges":"20~110","result":"55","type":"肝功能","unit":"U/L"},{"isNumber":"0","name":"血清总胆红素","ranges":"","result":"17.7","type":"肝功能","unit":""},{"isNumber":"0","name":"直接胆红素","ranges":"1.71~7","result":"7.1","type":"肝功能","unit":"umol/L"},{"isNumber":"0","name":"间接胆红素","ranges":"1.7~13.7","result":"10.6","type":"肝功能","unit":"umol/L"}],"modify":false,"physicalTyep":"肝功能"}]
            }else if(name =="4.jpg"){
                this.result = {"age":"","conclusion":"胆囊小息肉","data":"","describe":"肝外形大小正常范围，表面光滑，肝实质回声分布均匀，血管网清晰，各切面扫查未见明显的囊实性占位病变。门静脉主干内径正常范围。左右肝内胆管未见扩张。<br/>胆囊外形正常，囊壁上见一枚中等回声点附于囊壁，大小约0.3cm，不随体位改变而移动，后不伴声影。胆总管内径正常，内未见异常回声。<br/>脾外形大小正常，轮廓光整，脾实质回声均匀细腻。<br/>胰腺外形大小正常范围，边界整齐清晰，内部呈均匀分布，未见团块回声，主胰管未见扩张。","hosptialName":"","hosptialTime":"","name":"姓名：倪红","openId":"","photoNames":"1562743856693.jpg","reportId":"","siteType":"检查项目：肝胆脾胰(彩超)","time":"","type":""}
            }else if(name == "5.jpg"){
                this.result ={"age":"","conclusion":"宫内早孕(超声估测孕周约：9W3d)","data":"","describe":"经腹部检查：子宫后位，大小约：103x54x88mm，形态正常，轮廓清晰，包膜光滑，肌层回声均匀， 宫腔内探及大小约：64x21x56mm孕囊回声， 内见卵黄囊、胚芽(CRL约：26mm)及原始心管搏动。<br/>双侧附件区未见明显异常回声。<br/>CDFI：未见明显异常血流信号","hosptialName":"","hosptialTime":"检查时间：2018-03-28","name":"王金华","openId":"","photoNames":"1562743896068.jpg","reportId":"","siteType":"检查部位：子宫附件","time":"","type":""}
            }else if(name =="6.jpg"){
                this.result = {"age":"","conclusion":"前列腺、精囊、睾丸、附睾及精索静脉声像图未见异常","data":"","describe":"前列腺大小3.4X2.8X3.0cm，包膜光滑，内外腺分界清，实质回声分布均匀，内未见异常回声.<br/>双侧精囊区未见明显异常回声，双侧睾丸扫查：左侧睾丸大小为：3.8X2.2X2.8cm，右侧睾丸大小为：3.7X2.0X2.7cm，双侧睾丸及附睾内部回声尚均匀，未见明显异常回声<br/>CFD I：双侧睾丸内未见明显异常血流信号显示，平卧位：左侧精索静内径为1.7mm，右侧精索静脉内径为1.4mm，站立位：左侧精索静脉内径为1.9mm，右侧精索静脉内径为1.7mm.","hosptialName":"","hosptialTime":"","name":"谢小宝","openId":"","photoNames":"1562743908115.jpg","reportId":"","siteType":"检查部位：超声号：934","time":"","type":""}
            }else if(name =="7.jpg"){
                this.result = {"age":"年龄：37","checkNumber":"病理号：姓名：辛","data":"","examination_result":"大体：穿刺组织长1.0、1.0cm。;镜下：见11个肾小球，小球体积增大，弥漫性毛细血管壁增厚并见嗜伊红物质沉积，P.A.S.M染;色见肾小球基底膜空泡变性及“钉突”形成，可见脏层上皮肿胀。肾小管上皮细胞浊肿变性，偶;见小管萎缩及间质纤维化，灶性(5%)间质水肿。部分入球小动脉见透明变性。;免疫荧光：见2个肾小球;IgG：(+++) ， 细颗粒状沿毛细血管壁沉积;I gGl：(++) ， 细颗粒状沿毛细血管壁沉积;IgG 2：(-);IgG 3：(-);IgG 4：(+++) ， 细颗粒状沿毛细血管壁沉积;IgA：(-);IgM：(-);C3：(++)，细颗粒状沿毛细血管壁沉积;Fib：(-);Cl q：(-) C 4：(-);K：(-);入：(-);PLA2R：(++) ， 细颗粒状沿毛细血管壁沉积;THSD7A：(-);病理诊断：膜性肾病;ⅡI期;","histologic_grade":"","hosptialName":"","hosptialTime":"报告日期：2018-09-03","name":"姓名：辛","openId":"","photoNames":"1562743974539.jpg","reportId":"","siteType":"送检材料：肾活检","time":"","type":""}
            }else if(name =="8.jpg"){
                this.result = {"age":"年龄：56岁","checkNumber":"病理号：Z267586","data":"","examination_result":"(右侧)乳腺浸润性导管癌(Ⅱ级)。;免疫组化：ER(+++) ， PR(+) ， P 53(+) ， C erbB-2(-) ，;E-Cadherin(+) ， EF GR(-) ， CK 5/6(-) ， Ki-67 index约;60%。;注：本报告仅供临床参考;","histologic_grade":"","hosptialName":"常德市第一人民医院","hosptialTime":"收到日期：2012-05-11","name":"王小明","openId":"","photoNames":"1562743956984.jpg","reportId":"","siteType":"","time":"","type":""}
            }else if(name =="9.jpg"){
                this.result = {"age":"年龄：38","checkNumber":"病理号：2018-00813","data":"","examination_result":"左乳腺癌改良根治术标本;肿瘤所在位置：乳晕下方;肿瘤大小：肿块大小1.2×1.0×0.5cm。;组织学类型：浸润性导管癌，部分呈浸润性微乳;头状癌形态。;组织学分级：I级;脉管侵犯：(一);乳头：/;皮肤：(-);基底：(一);其余象限乳腺组织：内上象限：/;内下象限：/;外上象限：外下象限：;保乳手术切缘情况：上切缘：(-)距肿瘤1cm;下切缘：(-)距肿瘤2cm;内切缘：(-)距肿瘤2cm;外切缘：(-)距肿瘤3.5cm;表面：(-)距肿瘤0.8cm;基底：(-)距肿瘤0.2cm;淋巴结转移情况：腋下淋巴结(2/12)。;","histologic_grade":"组织学分级：I级","hosptialName":"复旦大学附属肿瘤医院","hosptialTime":"报告日期：2018-01-11","name":"王小也","openId":"","photoNames":"1562743935806.jpg","reportId":"","siteType":"标本类型：左乳腺癌改良根治术标本","time":"","type":""}
            }
            this.imgName = name;
            this.visible = true;
        },
        // handleRemove (file) {
        //     // 从 upload 实例删除数据
        //     const fileList = this.$refs.upload.fileList;
        //     this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        // },
        handleSuccess (res, file) {
            console.log(res)
            this.pane = false;
            // 因为上传过程为实例，这里模拟添加 url
            if(res.success){
                file.url = `http://www.tonticn.cn:8089/${res.result.photoNames}`;
                file.name = res.result.photoNames;
                var arr = res.result.physicalList
                this.imgName = res.result.photoNames
                if(this.name=='化验单识别'){ 
                  this.result = arr
                }else{
                    this.result = res.result
                }
                console.log(this.uploadList)
            }else if(res.message){
                Notice.warning({
                    title: '数量不够',
                    desc: '您所拥有的条数已用完，请联系管理员充值'
                });
            }else{
                Notice.warning({
                    title: '识别失败',
                    desc: '很抱歉！图片识别失败'
                });
            }
        },
        handleFormatError (file) {
            this.pane = false;
            Notice.warning({
                title: '文件格式不正确',
                desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
            });
        },
        handleMaxSize (file) {
            this.pane = false;
            Notice.warning({
                title: '超出文件大小限制',
                desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
            });
        },
        handleBeforeUpload () {
            // const check = this.uploadList.length < 5;
            this.pane =true
            // if (!check) {
            //     Notice.warning({
            //         title: '最多只能上传 5 张图片。'
            //     });
            // }
            // return check;
        },
        error(file){
            var newfile = {
                    'name': '7eb99afb9d5f317c912f08b5212fd69a',
                    'url': 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar',
                   "status": "finished"
                }
           this.uploadList.push(newfile)
            console.log(this.uploadList)
        },
        add(){
            const viewer = this.$el.querySelector('.images')
            if ((viewer !== null) && viewer.hasOwnProperty('$viewer')) {
                // handle property xxx of documentFragment as required
               viewer.$viewer.show()
            }
        },
        clooseButtun(){
            this.model =! this.model
        },
        handleSubmit(name){//提交修改表单信息
            console.log(name)
            var reslutL= this.formLeft;
            var that = this;
            updateUserData({
                enterprise:reslutL.enterprise,
                department:reslutL.department,
                username:reslutL.username,
                account:reslutL.account
            }).then(response=>{
                console.log(response)
                that.clooseButtun()
            }).catch(error=>{
                that.clooseButtun()
                Message.error('提交失败!');
            })
        }
    },
    mounted () {
        // this.uploadList = this.$refs.upload.fileList;
        var cookieAcc = Cookies.get('account')
        if(cookieAcc){
           var account =  cookieAcc
        }else{
           var account = this.$route.params.account
        }//判断是否有cookie是否登录过
        var that = this
        this.myAccount = account
        bus.$on('id-selected', function (id) {
          console.log(id)
          that.name = id
          if(id =="化验单识别"){
              that.UpAction ="http://www.tonticn.cn:8089/analysis/uploadALiYunHuaYanData"
              console.log("进来的")
              that.defaultList=[
                {
                    'name': '1.jpg',
                    'url': 'http://www.tonticn.cn:8089/1.jpg',
                    "status": "finished"
                },
                {
                    'name': '2.jpg',
                    'url': 'http://www.tonticn.cn:8089/2.jpg',
                    "status": "finished"
                },
                {
                    'name': '3.jpg',
                    'url': 'http://www.tonticn.cn:8089/3.jpg',
                    "status": "finished"
                }
              ];
              that.imgName='1.jpg';
              that.result =[{"dealDate":[{"isNumber":"0","name":"红细胞计数","ranges":"成年男性：4.0~5.5，成年女性：3.5~5.0，新生儿：6.0~7.0，婴儿：3.0~4.5，儿童：4.0~5.3","result":"4.6","type":"血常规","unit":"10^12个/L"},{"isNumber":"0","name":"白细胞计数","ranges":"成人白细胞数：4.0~10.0,新生儿：15.0~20.0;婴儿：11.0~12.0","result":"7.6","type":"血常规","unit":"10^9个/L"},{"isNumber":"0","name":"血红蛋白测定","ranges":"成年男性120~160，成年女性110~150，新生儿170~200，婴儿100~140，儿童120~140","result":"127","type":"血常规","unit":"g/L"},{"isNumber":"0","name":"中性粒细胞%","ranges":"50~70","result":"58.5","type":"血常规","unit":"%"},{"isNumber":"0","name":"红细胞压积","ranges":"男性为40~50;女性为36~45;新生儿为49~60;","result":"30.7","type":"血常规","unit":"%"},{"isNumber":"0","name":"淋巴细胞百分比","ranges":"20~40","result":"30.7","type":"血常规","unit":"%"},{"isNumber":"0","name":"单核细胞","ranges":"3~8","result":"5.1","type":"血常规","unit":"%"},{"isNumber":"0","name":"平均红细胞体积","ranges":"82~95","result":"85","type":"血常规","unit":"fl"},{"isNumber":"0","name":"嗜碱性粒细胞%","ranges":"0~1","result":"27.5","type":"血常规","unit":"%"},{"isNumber":"0","name":"嗜酸性粒细胞%","ranges":"0.5~5","result":"5.6","type":"血常规","unit":"%"},{"isNumber":"0","name":"平均血红蛋白浓度","ranges":"320~360","result":"325","type":"血常规","unit":"g/L"},{"isNumber":"0","name":"平均血小板体积","ranges":"7-13","result":"10.2","type":"血常规","unit":"fl"},{"isNumber":"0","name":"淋巴细胞绝对数","ranges":"1.1-3.2","result":"2.3","type":"血常规","unit":"10^9/L"},{"isNumber":"0","name":"血小板分布宽度","ranges":"","result":"12.4","type":"血常规","unit":"pg"},{"isNumber":"0","name":"血小板计数","ranges":"100~300","result":"171","type":"血常规","unit":"10^9/L"},{"isNumber":"0","name":"血小板压积%","ranges":"0.18~0.35","type":"血常规","unit":"%"}],"modify":false,"physicalTyep":"血常规"}]
          }else if(id=="影像报告单识别"){
              that.UpAction ="http://www.tonticn.cn:8089/analysis/uploadALiYunYingXiangData";
              that.defaultList=[
                {
                    'name': '4.jpg',
                    'url': 'http://www.tonticn.cn:8089/4.jpg',
                    "status": "finished"
                },
                {
                    'name': '5.jpg',
                    'url': 'http://www.tonticn.cn:8089/5.jpg',
                    "status": "finished"
                },
                {
                    'name': '6.jpg',
                    'url': 'http://www.tonticn.cn:8089/6.jpg',
                    "status": "finished"
                }
              ];
              that.imgName='4.jpg'
              that.result = {"age":"","conclusion":"胆囊小息肉","data":"","describe":"肝外形大小正常范围，表面光滑，肝实质回声分布均匀，血管网清晰，各切面扫查未见明显的囊实性占位病变。门静脉主干内径正常范围。左右肝内胆管未见扩张。<br/>胆囊外形正常，囊壁上见一枚中等回声点附于囊壁，大小约0.3cm，不随体位改变而移动，后不伴声影。胆总管内径正常，内未见异常回声。<br/>脾外形大小正常，轮廓光整，脾实质回声均匀细腻。<br/>胰腺外形大小正常范围，边界整齐清晰，内部呈均匀分布，未见团块回声，主胰管未见扩张。","hosptialName":"","hosptialTime":"","name":"姓名：倪红","openId":"","photoNames":"1562743856693.jpg","reportId":"","siteType":"检查项目：肝胆脾胰(彩超)","time":"","type":""}
          }else if(id=="病理报告单识别"){
              that.UpAction ="http://www.tonticn.cn:8089/analysis/uploadALiYunBingLiData";
              that.defaultList=[
                {
                    'name': '7.jpg',
                    'url': 'http://www.tonticn.cn:8089/7.jpg',
                    "status": "finished"
                },
                {
                    'name': '8.jpg',
                    'url': 'http://www.tonticn.cn:8089/8.jpg',
                    "status": "finished"
                },
                {
                    'name': '9.jpg',
                    'url': 'http://www.tonticn.cn:8089/9.jpg',
                    "status": "finished"
                }
              ];
              that.imgName='7.jpg'
              that.result = {"age":"年龄：37","checkNumber":"病理号：姓名：辛","data":"","examination_result":"大体：穿刺组织长1.0、1.0cm。;镜下：见11个肾小球，小球体积增大，弥漫性毛细血管壁增厚并见嗜伊红物质沉积，P.A.S.M染;色见肾小球基底膜空泡变性及“钉突”形成，可见脏层上皮肿胀。肾小管上皮细胞浊肿变性，偶;见小管萎缩及间质纤维化，灶性(5%)间质水肿。部分入球小动脉见透明变性。;免疫荧光：见2个肾小球;IgG：(+++) ， 细颗粒状沿毛细血管壁沉积;I gGl：(++) ， 细颗粒状沿毛细血管壁沉积;IgG 2：(-);IgG 3：(-);IgG 4：(+++) ， 细颗粒状沿毛细血管壁沉积;IgA：(-);IgM：(-);C3：(++)，细颗粒状沿毛细血管壁沉积;Fib：(-);Cl q：(-) C 4：(-);K：(-);入：(-);PLA2R：(++) ， 细颗粒状沿毛细血管壁沉积;THSD7A：(-);病理诊断：膜性肾病;ⅡI期;","histologic_grade":"","hosptialName":"","hosptialTime":"报告日期：2018-09-03","name":"姓名：辛","openId":"","photoNames":"1562743974539.jpg","reportId":"","siteType":"送检材料：肾活检","time":"","type":""}
          }
        })//判断是哪个报告单
        bus.$on('show-model',function (id) {
         console.log(id)
         that.model = id
           getUserData({
             account 
            }).then(response=>{        
            var personal = response.data.result
            // bus.$emit('tx-show',personal)//发送个人信息等
            that.formLeft = Object.assign({},personal)
            }).catch(error=>{
                console.log(error)
            })
        })//是否显示个人信息模态框
        getUserData({
           account 
        }).then(response=>{        
          var personal = response.data.result
          bus.$emit('tx-show',personal)//发送个人信息等
          that.formLeft = Object.assign({},personal)
        }).catch(error=>{
            console.log(error)
        })
    },
    filters:{ 
        filterBase(virtue){
         if(virtue.split("：")[1]){   
           return virtue.split("：")[1];
         }else{
           return virtue
         }
        },//去冒号
        filterWu(value){
            if(value){
                return value
            }else{
                return "暂无"
            }
        }
    }
}
</script>

