import Vue from 'vue'
import Router from 'vue-router'
import pcMain from "@/components/pcComponents/home"
import pcProject from "@/components/pcComponents/project"
import pcDown from "@/components/pcComponents/downLoad"
import pcPanter from "@/components/pcComponents/panter"
import pcContent from "@/components/pcComponents/Content"
import pcPage from "@/page/pcPage"
import mPage from "@/page/mPage"
import product from "@/page/product"
import loge from "@/components/productComponents/loge"
import report from "@/components/productComponents/report"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pcPage',
      component: pcPage,
      children:[
        {
          path:'home',
          name:"pcHome",
          component: pcMain,
        },
        {
          path:'project',
          name:"pcProject",
          component: pcProject
        },
        {
          path:'downLoad',
          name:"pcDownLoad",
          component: pcDown
        },
        {
          path:'panter',
          name:"pcPanter",
          component: pcPanter
        },
        {
          path:'content',
          name:"pcContent",
          component: pcContent
        },
        {
          path:'/', redirect: 'home'
        }
      ]
    },
    {
      path: '/mPage',
      name: 'mPage',
      component: mPage
    },
    {
      path: '/product',
      name: 'product',
      component: product,
      children:[
        {
          path:'loge',
          name:"loge",
          component: loge,
        },
        {
          path:'report/:name',
          name:"report",
          component: report,
        },
        {
          path:'/', redirect: 'loge'
        }
      ]
    }
  ]
})