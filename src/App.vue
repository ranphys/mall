<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
    <main-tab-bar></main-tab-bar>

  </div>
</template>
<script>
  import MainTabBar from '@/components/content/MainTabBar'
export default {
  components: {
    MainTabBar
  }
  
}
</script>


<<<<<<< HEAD
<style scoped>
 @import "./assets/css/base.css"
</style>
 
=======
<style>
  @import "./assets/css/base.css"

</style>
>>>>>>> 1a0f987a73b6dc873102efe1e11d754e45854257
