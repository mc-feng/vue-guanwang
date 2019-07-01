<template>
    <div class="loge">
          <img src="../../assets/product/background.png" alt="" class="loge-image">
          <div class="warp">
              <Tabs value="name1" @on-click="browseNotice">
                <Tab-pane label="登录" name="name1">
                    <div class="label-warp" v-if="yanzhen">
                        <Form>
                        </Form>
                        <Form label-position="top" ref='formTop' :model='formTop' :rules="ruleValidate">
                            <Form-item label='账号' prop="auccont">
                                <Input placeholder="请输入账号" v-model='formTop.auccont'></Input>
                            </Form-item>
                            <Form-item label="密码" prop="password">
                                <Input v-model="formTop.password" placeholder="请输入密码"></Input>
                            </Form-item>
                            <Form-item>
                                <Button type="primary" long @click="handleSubmit('formTop')">登录</Button>
                            </Form-item>
                            <div class="yanzhen" @click="qiehuan()">验证码登录</div>
                        </Form> 
                    </div>
                    <div class="label-warp" v-else>
                        <Form :model="formTop2" ref='formTop2' label-position="top" :rules="ruleValidate1">
                            <Form-item label="手机号" prop="phone">
                                <Input v-model="formTop2.phone" placeholder="请输入手机号"></Input>
                            </Form-item>
                            <Form-item label="验证码" prop="yanzhen">
                                <Input v-model="formTop2.yanzhen" placeholder="请输入验证码"></Input>
                                <Button type="info" class="yanzhenB" :disabled="disabled" @click="sendcode">{{btntxt}}</Button>
                            </Form-item>
                            <Form-item>
                                <Button type="primary" long @click="handleSubmit('formTop2')">登录</Button>
                            </Form-item>
                            <div class="yanzhen" @click="qiehuan()">账号登录</div>
                        </Form>
                    </div>
                </Tab-pane>
                <Tab-pane label="注册" name="name2" v-show="hidde">
                    <div class="label-warp">
                        <Form :model="formTop3"  ref='formTop3' label-position="top" :rules="ruleValidate2">
                            <Form-item label="手机号" prop="zphone">
                                <Input v-model="formTop3.zphone" placeholder="请输入手机号"></Input>
                            </Form-item>
                            <Form-item prop="zyanzhen">
                                <Input v-model="formTop3.zyanzhen" placeholder="请输入验证码"></Input>
                            </Form-item>
                            <Form-item prop="zaccunton">
                                <Input v-model="formTop3.zaccunton" placeholder="请输入账号"></Input>
                            </Form-item>
                            <Form-item prop="zpassword">
                                <Input v-model="formTop3.zpassword" placeholder="请输入密码"></Input>
                            </Form-item>
                            <Form-item prop="zcpassword">
                                <Input v-model="formTop3.zcpassword" placeholder="再次输入密码"></Input>
                            </Form-item>
                            <Form-item>
                                <Button type="primary" long @click="handleSubmit('formTop3')">注册</Button>
                            </Form-item>
                        </Form>
                    </div>
                </Tab-pane>
            </Tabs>
          </div>
    </div>
</template>
<style scoped>
 .loge{
     height: 960px;
     background: #130737
 }
 .loge-image{
    widows: 983px;
    height: 617px;
    margin-left: 175px;
    margin-top: 100px;
 }
 .warp{
     width: 456px;
     background: #FFFFFF;
     box-shadow: 0 7px 11px 0 rgba(224,224,224,0.50);
     border-radius: 8px;
     position: absolute;
     top: 259px;
     left: 1077px;
     padding-bottom: 46px;
 }
 div>>>.ivu-tabs-nav-container{
     width: 185px;
     margin:40px auto 0px;
 }
  div>>>.ivu-icon{
      display: none;
  }
  div>>>.ivu-tabs-bar{
      border: none
  }
  div>>>.ivu-tabs-tab{
      font-size: 20px
  }
  div>>>.ivu-tabs-tab:last-of-type{
      margin: 0;
  }
  div>>>.ivu-tabs-tabpane{
      font-size: 14px;
      color: #232323
  }
  div>>>.ivu-input{
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid #C8D6E1;
  }
  div>>>.ivu-input:focus{
      box-shadow: none
  }
  div>>>.ivu-input:hover{
      border-color:#57a3f3
  }
  div>>>.ivu-btn{
      height: 40px;
  }
  div>>>.ivu-form-item-label{
      font-size: 14px;
      color: #232323;
      line-height: 20px;
      padding: 0;
  }
  div>>>.ivu-input-default{
    font-size: 15px;
    color: #000000;
  }
  .label-warp{
    width: 330px;
    margin: 38px auto 0;
  }
  .yanzhen{
    font-size: 14px;
    color: #232323;
    margin-top: 23px;
    text-align: center;
    cursor: pointer;
  }
  .ivu-form-item-content .yanzhenB{
      position: absolute;
      right: 0;
      top: 0;
      height: 30px;
      border: none;
      background: #fff;
      color: #2db7f5;
  }
</style>
<script>
import { TabPane,Tabs,Form,FormItem,Input,Button,Message} from 'iview';
import {registerAccount} from "../../api/api";
import {store} from "../../comment/store";
export default {
    data(){
        const validateAuccont =(rule,value,callback)=>{
            if (value === '') {
                callback(new Error('请输入账号'));
            }else if(value === "123"){
                callback(new Error('账号错误'))
            }else{
                callback()
            }
        }
        const validatePass =(rule,value,callback)=>{
            if (value === '') {
                callback(new Error('请输入密码'));
            }else{
                callback()
            }
        }
        return{
            formTop:{
                auccont: '',
                password: ''
            },//账号密码
            formTop2:{
                phone: '',
                yanzhen: '',
            },//手机验证码
            formTop3:{
                zphone: '',
                zyanzhen: '',
                zaccunton: '',
                zpassword: '',
                zcpassword: '',
            },//注册信息
            ruleValidate:{
              auccont:[
                  { validator:validateAuccont, trigger: 'blur' },
              ],
              password:[
                  { validator:validatePass, trigger:'blur',message: '密码不能为空'}
              ]
            },//账号密码验证
            ruleValidate1:{
              phone:[
                  { validator:validateAuccont, message: '手机不能为空', trigger: 'blur' },
              ],
              yanzhen:[
                  { validator:validatePass, trigger:'blur',message: '验证码不能为空'}
              ]
            },//手机验证码验证
            ruleValidate2:{
              zphone:[
                  { validator:validateAuccont, message: '手机号不能为空', trigger: 'blur' },
              ],
              zyanzhen:[
                  { validator:validatePass, trigger:'blur',message: '验证码不能为空'}
              ],
              zaccunton:[
                  { validator:validatePass, trigger:'blur',message: '账号不能为空'}
              ],
              zpassword:[
                  { validator:validatePass, trigger:'blur',message: '密码不能为空'}
              ],
              zcpassword:[
                  { validator:validatePass, trigger:'blur',message: '请确定密码'}
              ]
            },//注册信息验证
            yanzhen:false, // 验证吗切换
            hidde:false,   // 高度大小切换
            btntxt:"获取验证码",
            disabled:false,
            time:0,
        }
    },
    components:{
        Tabs,
        TabPane,
        Form,
        FormItem,
        Input,
        Button
    },
    methods:{
        qiehuan(){
          this.yanzhen = !this.yanzhen 
        },
        browseNotice(id){
            if(id =="name1"){
               this.hidde = false 
            }else{
               this.hidde = true
            }
        },
        handleSubmit (name) {
                console.log(name)
                this.$refs[name].validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        if(name =="formTop"){ 
                            registerAccount({
                                account:this.formTop.auccont,
                                password:this.formTop.password
                            }).then(response => {
                                console.log(response);
                            }).catch(error => {
                                console.log(error)
                            })
                        }
                        Message.success('Success!');
                        store.setMessageAction(true)
                    } else {
                        Message.error('Fail!');
                    }
                })
        },
        sendcode:function(){
            // if(this.formTop2.phone==''){
            //     alert("请输入手机号码");
            //     return;
            // }
            this.time=35;
            this.disabled=true;
            this.timer();
        },//多少秒以后可以重新发送
         timer:function () {
             if (this.time > 0) {
                 this.time--;
//                 console.log(this.time);
                 this.btntxt=this.time+"s,后重新获取验证码";
                 setTimeout(this.timer, 1000);
             } else{
                 this.time=0;
                 this.btntxt="获取验证码";
                 this.disabled=false;
             }
         }//设置定时
    }
}
</script>


