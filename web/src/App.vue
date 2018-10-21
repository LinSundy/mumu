<template>
  <div id="app">
    <MuMenu></MuMenu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style lang="less">
@import './assets/less/reset.less';
@import './assets/less/common/iconfont.less';

body {
  background-color: #eeeeee;
}

#app {
  position: relative;
  width: 1080px;
  margin: 0 auto;
  padding-left: 180px;
}
</style>
