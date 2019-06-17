<template>
    <div class="report">
        <div class="warp">
           <header class="title">{{name}}</header>
           <Upload 
             action="http://www.yijinhealth.com:8083/upimage/uploadALiYunHuaYanData"
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
           >
                <Button class="updata">上传文件</Button>
            </Upload>
            <div class="tips">提示：可支持PNG、JPG、JPEG、BMP。图片大小不超过4M，请确保识别的部分为图片主体部分</div>
            <div class="content-warp">
                <div class="content-left">
                    <div class="left-title">原始图片</div>
                    <div class="bg">
                        <div v-viewer class="image">
                          <img :src="'http://www.yijinhealth.com:8083/' + imgName" v-if="visible" style="width:630px;height: 430px" @click="add()">
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
                    <div class="demo-upload-list" v-for="(item,index) in uploadList" :key="index">
                        <template v-if="item.status === 'finished'">
                            <img :src="item.url">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
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
</style>
<script>
import { Upload,Button, Select,Icon,Progress,Modal,Notice} from 'iview';
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
                    'name': 'a42bdcc1178e62b4694c830f028db5c0',
                    'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                },
                {
                    'name': 'bc7521e033abdd1e92222d733590f104',
                    'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                }
            ],
            imgName: 'a42bdcc1178e62b4694c830f028db5c0',
            visible: true,
            uploadList: ["",""],
            name:"病理报告单",
            result:[]
        }
    },
    components:{
        Upload,
        Button,
        Icon,
        Progress,
        Modal
    },
    methods:{
        slecet(e){
          this.select = e
        },
        handleView (name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove (file) {
            // 从 upload 实例删除数据
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess (res, file) {
            console.log(file)
            // 因为上传过程为实例，这里模拟添加 url
            file.url = `http://www.yijinhealth.com:8083/${res.result.photoNames}`;
            file.name = res.result.photoNames;
            var arr = res.result.physicalList
            this.result = arr
            console.log(this.uploadList)
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
        }
    },
    mounted () {
        console.log(this.$refs.upload.fileList)
        this.uploadList = this.$refs.upload.fileList;
        var that = this
        bus.$on('id-selected', function (id) {
          that.name = id
        })
    }
}
</script>

