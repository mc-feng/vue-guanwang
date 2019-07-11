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
                                <Input v-model="formTop.password" placeholder="请输入密码" type="password"></Input>
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
                                <Input v-model="formTop2.yanzhen" placeholder="请输入验证码" :disabled="!disabled"></Input>
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
                                <Input v-model="formTop3.zyanzhen" placeholder="请输入验证码" :disabled="!disabled2"></Input>
                                <Button type="info" class="yanzhenB" :disabled="disabled2" @click="sendcode2">{{btntxt2}}</Button>
                            </Form-item>
                            <Form-item prop="zaccunton">
                                <Input v-model="formTop3.zaccunton" placeholder="请输入账号"></Input>
                            </Form-item>
                            <Form-item prop="zpassword">
                                <Input v-model="formTop3.zpassword" placeholder="请输入密码" type="password"></Input>
                            </Form-item>
                            <Form-item prop="zcpassword">
                                <Input v-model="formTop3.zcpassword" placeholder="再次输入密码" type="password"></Input>
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
  div>>>.ivu-input[disabled]{
    background-color:#FFFFFF
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
import {registerAccount,getPhoneCode,checkPhoneUsed,checkAccount,loginPhone,loginAccount} from "../../api/api";
import {store} from "../../comment/store";
import Cookies from 'js-cookie'
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
        const validatePassCheck =(rule,value,callback)=>{
            if (value === '') {
                callback(new Error('请再次输入密码'));
            }else if (value !== this.formTop3.zpassword) {
                return callback(new Error('两次密码不一致'));
            } else {
                callback();
            }
        }
        const checkPhone =(rule,value,callback)=>{
               if (value === '') {
                  callback(new Error('请输入手机号'));
                  this.shouji = false;
                }else if(!/^[1]([3-9])[0-9]{9}$/.test(value)){
                    callback(new Error('手机号码错误'));
                    this.shouji = false;
                }else{
                   checkPhoneUsed({
                       phone:value
                   }).then(response=>{
                       if(response.data.success){
                           callback();
                           this.shouji = true;
                       }else{
                           callback(new Error('手机号码已存在'));
                           this.shouji = false;
                       }
                       console.log(response)
                   }).catch(error=>{
                       console.log(error)
                   })
                }
        }//验证手机号码是否存在
        const checkAccounts =(rule,value,callback)=>{
            if (value === '') {
                  callback(new Error('请输入用户名'));
            }else{
                console.log("准备检查")
                checkAccount({
                    Account:value
                }).then(response=>{
                    if(response.data.success){
                        callback()
                    }else{
                        callback(new Error('用户名已存在'))
                    }
                    console.log(response)
                }).catch(error=>{
                    console.log(error)
                })
            }
        }//验证用户名是否存在
        const checkPhoneD =(rule,value,callback)=>{
            if (value === '') {
                callback(new Error('请输入手机号'));
            }else if(!/^[1]([3-9])[0-9]{9}$/.test(value)){
                callback(new Error('手机号码格式错误'));
            }else{
                 callback()
            }
        }//检验手机号码格式
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
                  { validator:checkPhoneD,trigger: 'blur' },
              ],
              yanzhen:[
                  { validator:validatePass, trigger:'blur',message: '验证码不能为空'}
              ]
            },//手机验证码验证
            ruleValidate2:{
              zphone:[
                  { validator:checkPhone, trigger: 'change'},
              ],
              zyanzhen:[
                  {validator:validatePass,trigger:'blur',message: '验证码不能为空'}
              ],
              zaccunton:[
                  { validator:checkAccounts, trigger:'blur'}
              ],
              zpassword:[
                  { validator:validatePass, trigger:'blur',message: '密码不能为空'}
              ],
              zcpassword:[
                  { validator:validatePassCheck, trigger:'blur'}
              ]
            },//注册信息验证
            yanzhen:false, // 验证吗切换
            hidde:false,   // 高度大小切换
            btntxt:"获取验证码",
            disabled:false,
            time:0,
            btntxt2:"获取验证码",
            disabled2:false,
            time2:0,
            shouji:false
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
                var that = this
                this.$refs[name].validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        if(name =="formTop"){ 
                            console.log("账号密码登录")
                            loginAccount({
                                 account:this.formTop.auccont,
                                 password:this.formTop.password
                            }).then(response => {
                                console.log(response);
                                if(response.data.success){    
                                   Message.success('登录成功');
                                   store.setMessageAction(true);//控制是否可以登录
                                   Cookies.set('account', response.data.result)
                                   that.$router.push({
                                        path: `/product/report/${response.data.result}`,
                                   })
                                }else{
                                   Message.error('登录失败');
                                }
                            }).catch(error => {
                                console.log(error)
                            })
                        }else if(name =="formTop2"){//手机号码登录
                         console.log("手机号码登录")
                        loginPhone({
                            phone:this.formTop2.phone,
                            code:this.formTop2.yanzhen
                        }).then(response=>{
                           console.log(response)
                            if(response.data.success){    
                               Message.success('登录成功');
                               store.setMessageAction(true);//控制是否可以登录
                               Cookies.set('account', response.data.result)
                               that.$router.push({
                                        path: `/product/report/${response.data.result}`,
                               })
                            }else{
                                Message.error('登录失败');
                            }
                        }).catch(error=>{
                           console.log(error)
                        })}else if(name =="formTop3"){
                            console.log("用户注册")
                            registerAccount({
                                account:this.formTop3.zaccunton,
                                password:this.formTop3.zcpassword,
                                phone:this.formTop3.zphone,
                                code:this.formTop3.zyanzhen
                            }).then(response=>{
                                if(response.data.success){    
                                   Message.success('注册成功');
                                   store.setMessageAction(true);//控制是否可以登录
                                   Cookies.set('account', response.data.result)
                                   that.$router.push({
                                                path: `/product/report/${response.data.result}`,
                                   })
                                }else{
                                    Message.error('注册失败');
                                }
                                console.log(response)
                            }).catch(error=>{
                                console.log(error)
                            })
                        }
                    }else{
                       Message.error('验证信息失败'); 
                    }
                })
        },
        sendcode:function(){
            if(this.formTop2.phone==''){
                 Message.error('请输入手机号码');
                return;
            }
            getPhoneCode({
                phone:this.formTop2.phone
            }).then(response=>{
                    console.log(response)
                    if(response.status==200&&response.data.success){
                         Message.success('验证码发送成功');
                    }
                }).catch( error=>{
               console.log(error)
                })
            this.time=60;
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
         },//设置定时
         sendcode2:function(){
             if(this.formTop3.zphone==''){
                     Message.error('请输入手机号码');
                    return;
             }//防止手机号为空
             if (this.shouji){//拦截验证码,防止手机存在继续发送
                getPhoneCode({
                    phone:this.formTop3.zphone
                }).then(response=>{
                        console.log(response)
                        if(response.status==200&&response.data.success){
                             Message.success('验证码发送成功');
                        }
                    }).catch( error=>{
                   console.log(error)
                    })
                this.time2=35;
                this.disabled2=true;
                this.timer2();
             }else{
                 Message.error('手机号已存在，验证码发送失败');
             }
        },
        timer2:function () {
             if (this.time2 > 0) {
                 this.time2--;
//                 console.log(this.time);
                 this.btntxt2=this.time2+"s,后重新获取验证码";
                 setTimeout(this.timer2, 1000);
             } else{
                 this.time2=0;
                 this.btntxt2="获取验证码";
                 this.disabled2=false;
             }
         },
    }
}
</script>


