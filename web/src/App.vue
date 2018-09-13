<template>
  <div id="app">
    <MuMenu></MuMenu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
  @import "./assets/less/reset.less";
  @import "./assets/less/common/iconfont.less";
</style>
