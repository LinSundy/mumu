<template>
  <ul class="nav">
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
        this.lists = res
        console.log(this)
      })
    }
  },
  mounted() {
    this.getData()
    console.log(this.lists, '11')
  }
}
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
