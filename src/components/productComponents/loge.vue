<template>
    <div class="loge">
          <img src="../../assets/product/background.png" alt="" class="loge-image">
          <div class="warp">
              <Tabs value="name1">
                <Tab-pane label="登录" name="name1">
                    <div class="label-warp">
                        <Form :model="formTop" label-position="top">
                            <Form-item label="手机号码">
                                <Input v-model="formTop.input1"></Input>
                            </Form-item>
                            <Form-item>
                                <Input v-model="formTop.input2" placeholder="请输入验证码"></Input>
                            </Form-item>
                            <Form-item>
                                <Button type="primary" long>登录</Button>
                            </Form-item>
                        </Form>
                    </div>
                </Tab-pane>
                <Tab-pane label="注册" name="name2">注册的内容</Tab-pane>
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
     height: 444px;
     background: #FFFFFF;
     box-shadow: 0 7px 11px 0 rgba(224,224,224,0.50);
     border-radius: 8px;
     position: absolute;
     top: 259px;
     left: 1077px;
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
  div>>>.ivu-form-item{
      margin-bottom: 26px
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
  .label-warp{
    width: 330px;
    margin: 38px auto 0;
  }
</style>
<script>
import { TabPane,Tabs,Form,FormItem,Input,Button} from 'iview';
export default {
    data(){
        return{
            formTop: {
                input1: '',
                input2: '',
                input3: ''
            }
        }
    },
    components:{
        Tabs,
        TabPane,
        Form,
        FormItem,
        Input,
        Button
    }
}
</script>


