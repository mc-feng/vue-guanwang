<template>
    <div class="report">
        <div class="warp">
           <header class="title">{{name}}</header>
           <Upload 
             action="http://192.168.31.165:8089/analysis/uploadALiYunHuaYanData"
             ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :on-error="error"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            :data="{account:'mcf'}"
           >
                <Button class="updata">上传文件</Button>
            </Upload>
            <div class="tips">提示：可支持PNG、JPG、JPEG、BMP。图片大小不超过4M，请确保识别的部分为图片主体部分</div>
            <div class="content-warp">
                <div class="content-left">
                    <div class="left-title">原始图片</div>
                    <div class="bg">
                        <div v-viewer class="image">
                          <img :src="'http://192.168.31.165:8089/' + imgName" v-if="visible" style="width:630px;height: 430px" @click="add()">
                        </div>
                        <!-- <div v-viewer="{movable: false}" class="image">
                          <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width:630px;height: 430px" @click="add()">
                        </div> -->
                        <div class="top-left"></div>
                        <div class="top-right"></div>
                        <div class="bottom-left"></div>
                        <div class="bottom-right"></div>
                        <div class="pane"></div>
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
                           <div v-for="(item,index) in result" :key="index">
                               <div class="main-header">{{item.physicalTyep}}</div>
                               <div v-for="child,indexs in item.dealDate" :key="indexs" class="main-content">
                                   <div class="content1">{{child.name}}</div>
                                   <div class="content2">{{child.result}}</div>
                                </div>
                           </div>
                        </div>
                        <div v-show="select=='高精度识别'">高精度识别</div>
                    </div>
                </div>
            </div>
        </div>
        <Modal v-model="model" width=720>
            <p class="m-header">个人中心</p>
            <Form :model="formLeft" label-position="left" :label-width="100">
                <Form-item label="用户类别">
                    <!-- <Input v-model="formLeft.input1"></Input> -->
                    <input v-model="formLeft.input1" class="inputs">
                </Form-item>
                <Form-item label="手机号">
                    <!-- <Input v-model="formLeft.input2"></Input> -->
                    <input v-model="formLeft.input2" class="inputs">
                </Form-item>
                <Form-item label="企业名称">
                    <Input v-model="formLeft.input3"></Input>
                </Form-item>
                <Form-item label="姓名">
                    <Input v-model="formLeft.input4"></Input>
                </Form-item>
                <Form-item label="部门">
                    <Input v-model="formLeft.input5"></Input>
                </Form-item>
                <Form-item label="剩余次数">
                    <div class="font-number">{{formLeft.input6}}</div>
                </Form-item>
                <Form-item label="测试次数">
                    <div class="font-number">{{formLeft.input7}}</div>
                </Form-item>
                <Button type="primary" style="width:385px;height:40px;font-size: 14px;color: #FFFFFF;">提交</Button>
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
     animation: move 1.5s ease-in-out infinite ;
     -webkit-animation: move 3s ease-in-out infinite;
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
import {getUserData} from "../../api/api";
import bus from "../../comment/bus";
export default {
    data(){
        return{
            tab:["识别结果","高精度识别"],
            box:["内容一","内容二"],
            indexs:0,
            select:"识别结果",
            defaultList: [
                {
                    'name': '1.jpg',
                    'url': 'http://192.168.31.165:8089/1.jpg'
                },
                {
                    'name': '2.jpg',
                    'url': 'http://192.168.31.165:8089/2.jpg'
                }
            ],
            imgName: '1.jpg',
            visible: true,
            uploadList: ["",""],
            name:"病理报告单",
            result:[{"dealDate":[{"isNumber":"2","name":"尿隐血","ranges":"","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"尿维生素C","ranges":"","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"上皮细胞","ranges":"","result":"少许","type":"尿常规","unit":""},{"isNumber":"2","name":"蛋白质","ranges":"","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"镜下白细胞","ranges":"","result":"3-5","type":"尿常规","unit":""},{"isNumber":"2","name":"镜下红细胞","ranges":"","result":"0-2","type":"尿常规","unit":""},{"isNumber":"2","name":"尿胆原","ranges":"阴性","result":"mg/d1","type":"尿常规","unit":""},{"isNumber":"2","name":"酮体","ranges":"","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"尿白细胞","ranges":"阴性","result":"9","type":"尿常规","unit":""},{"isNumber":"2","name":"亚硝酸","ranges":"","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"尿红细胞","ranges":"","result":"2","type":"尿常规","unit":""},{"isNumber":"2","name":"尿葡萄糖","ranges":"阴性","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"管型","ranges":"","result":"5","type":"尿常规","unit":""},{"isNumber":"2","name":"比重","ranges":"","result":"1.020","type":"尿常规","unit":""},{"isNumber":"2","name":"红细胞信息","ranges":"阴性","result":"阴性","type":"尿常规","unit":""}],"modify":false,"physicalTyep":"尿常规"}],
            names:true,
            model:false,//控制弹框
            formLeft: {
                    input1: '普通用户',
                    input2: '13965374927',
                    input3: '',
                    input4: '',
                    input5: '',
                    input6: 20,
                    input7: 10
            },//用户信息表
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
            if(name == "1.jpg"){
                this.result =[{"dealDate":[{"isNumber":"2","name":"尿隐血","ranges":"","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"尿维生素C","ranges":"","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"上皮细胞","ranges":"","result":"少许","type":"尿常规","unit":""},{"isNumber":"2","name":"蛋白质","ranges":"","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"镜下白细胞","ranges":"","result":"3-5","type":"尿常规","unit":""},{"isNumber":"2","name":"镜下红细胞","ranges":"","result":"0-2","type":"尿常规","unit":""},{"isNumber":"2","name":"尿胆原","ranges":"阴性","result":"mg/d1","type":"尿常规","unit":""},{"isNumber":"2","name":"酮体","ranges":"","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"尿白细胞","ranges":"阴性","result":"9","type":"尿常规","unit":""},{"isNumber":"2","name":"亚硝酸","ranges":"","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"尿红细胞","ranges":"","result":"2","type":"尿常规","unit":""},{"isNumber":"2","name":"尿葡萄糖","ranges":"阴性","result":"阴性","type":"尿常规","unit":""},{"isNumber":"2","name":"管型","ranges":"","result":"5","type":"尿常规","unit":""},{"isNumber":"2","name":"比重","ranges":"","result":"1.020","type":"尿常规","unit":""},{"isNumber":"2","name":"红细胞信息","ranges":"阴性","result":"阴性","type":"尿常规","unit":""}],"modify":false,"physicalTyep":"尿常规"}]
            }else if(name == "2.jpg"){
                this.result = [{"dealDate":[{"isNumber":"0","name":"血清总蛋白","ranges":"","result":"68.5","type":"肝功能","unit":""},{"isNumber":"0","name":"白蛋白","ranges":"","result":"46","type":"肝功能","unit":""},{"isNumber":"0","name":"血清球蛋白","ranges":"","result":"23.1","type":"肝功能","unit":""},{"isNumber":"2","name":"白蛋白球比","ranges":"","result":"白/球比例","type":"肝功能","unit":""},{"isNumber":"0","name":"血清总胆红素","ranges":"","result":"20.96","type":"肝功能","unit":""},{"isNumber":"0","name":"直接胆红素","ranges":"1.71~7","result":"4.93","type":"肝功能","unit":"umol/L"},{"isNumber":"0","name":"间接胆红素","ranges":"1.7~13.7","result":"16.03","type":"肝功能","unit":"umol/L"},{"isNumber":"0","name":"谷丙转氨酶","ranges":"","result":"19","type":"肝功能","unit":""},{"isNumber":"0","name":"谷草转氨酶","ranges":"","result":"24","type":"肝功能","unit":""},{"isNumber":"0","name":"碱性磷酸酶","ranges":"20~110","result":"54","type":"肝功能","unit":"U/L"},{"isNumber":"0","name":"乳酸脱氢酶","ranges":"135~225","result":"133","type":"肝功能","unit":"U/L"},{"isNumber":"0","name":"前白蛋白","ranges":"免疫散射比浊法:200~400mg/L;","result":"241","type":"肝功能","unit":"mg/L"},{"isNumber":"0","name":"血清总胆汁酸","ranges":"","result":"1.6","type":"肝功能","unit":""}],"modify":false,"physicalTyep":"肝功能"}]
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
            // 因为上传过程为实例，这里模拟添加 url
            if(res.success){
                file.url = `http://192.168.31.165:8089/${res.result.photoNames}`;
                file.name = res.result.photoNames;
                var arr = res.result.physicalList
                this.imgName = res.result.photoNames
                this.result = arr
                console.log(this.uploadList)
            }else if(res.message){
                Notice.warning({
                    title: '数量不够',
                    desc: '您所拥有的条数已用完，请联系管理员充值'
                });
            }
        },
        handleFormatError (file) {
            Notice.warning({
                title: '文件格式不正确',
                desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
            });
        },
        handleMaxSize (file) {
            Notice.warning({
                title: '超出文件大小限制',
                desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
            });
        },
        handleBeforeUpload () {
            const check = this.uploadList.length < 5;
            if (!check) {
                Notice.warning({
                    title: '最多只能上传 5 张图片。'
                });
            }
            return check;
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
        }
    },
    mounted () {
        console.log(this.$refs.upload.fileList)
        // this.uploadList = this.$refs.upload.fileList;
        var account = this.$route.params.account
        var that = this
        bus.$on('id-selected', function (id) {
          that.name = id
        })
        bus.$on('show-model',function (id) {
         console.log(id)
         that.model = id
        })//接受显示模态框
        getUserData({
           account 
        }).then(response=>{        
          bus.$emit('tx-show',response.data.result)//发送个人信息等
        }).catch(error=>{
            console.log(error)
        })
    }
}
</script>

