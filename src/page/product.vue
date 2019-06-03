<template>
    <div>
      <pro-nav background="background:#130737"></pro-nav>
      <router-view/>
      <my-bottom class="bottom" color="color:#ffffff"></my-bottom>
    </div>
</template>
<style scoped>
  .main{
      height: 1005px;
  }
  .bottom{
      background: #17375C !important;
  }
</style>

<script>
import nav from "@/components/productComponents/proNav"
import bottom from "@/components/bottom"
export default {
    components:{
        "pro-nav":nav,
        "my-bottom":bottom
    }
}
</script>

