<template>
  <ul class="nav" :style="{height: ulHeight + 'px'}">
    <li v-for="(item, index) of lists" :key="index">
      <a :href="item.path">
        <i :class="`iconfont icon-${item.icon}`"></i>
        {{item.name}}
      </a>
    </li>
  </ul>
</template>

<script>
import * as api from '../api/index'
//  引入mock
if (process.env.NODE_ENV === 'development') {
  require('../mock')
}
export default {
  name: 'MuMenu',
  data() {
    return {
      lists: [] // 菜单数据
    }
  },
  methods: {
    getData() {
      api.leftNavs().then(res => {
        this.lists = res.data
      })
    }
  },
  updated() {
    console.log(this.ulHeight)
  },
  computed: {
    ulHeight() {
      let height = window.innerHeight
      return height
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
