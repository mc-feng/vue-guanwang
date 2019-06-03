<template>
    <div id="pcPagee">
      <my-nav></my-nav>
      <keep-alive include="pcHome">
        <router-view/>
      </keep-alive>
      <my-bottom></my-bottom>
    </div>
</template>
<script>
import nav from "@/components/nav"
import bottom from "@/components/bottom"
export default {
    components:{
        "my-nav":nav,
        "my-bottom":bottom
    },
}
</script>
<style scoped>

</style>

