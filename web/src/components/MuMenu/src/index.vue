<template>
  <ul class="nav">
    <li v-for="(item, index) of lists" :key="index">
      <a :href="item.path">
        <i :class="`iconfont icon-${item.icon}`"></i>
        {{item.title}}
      </a>
    </li>
  </ul>
</template>

<script>
import * as api from '../api/index'
let data = [
  {
    title: '首页',
    icon: 'home',
    path: 'index'
  },
  {
    title: '站长新闻',
    icon: 'news',
    path: 'news'
  },
  {
    title: '好文分享',
    icon: 'book',
    path: 'share'
  },
  {
    title: '段子来了',
    icon: 'menu',
    path: 'cross-talk'
  },
  {
    title: '科技资讯',
    icon: 'fire',
    path: 'science'
  },
  {
    title: '博客大全',
    icon: 'blog',
    path: 'blog'
  },
  {
    title: '站长交流',
    icon: 'pen',
    path: 'website'
  },
  {
    title: '投稿中心',
    icon: 'person',
    path: 'contribute'
  }
]

export default {
  name: 'MuMenu',
  data() {
    return {
      lists: data // 菜单数据
    }
  },
  methods: {
    getData() {
      api.leftNavs().then(res => {
        console.log('111')
        console.log(res, 'res')
      })
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
