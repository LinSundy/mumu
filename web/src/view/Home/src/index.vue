<template>
  <div>
    <div class="container">
      <div class="news">
        <a href="">
          {{message}}
        </a>
      </div>
      <HomeNews></HomeNews>
      <Pagination class="pagination" background layout="prev, pager, next" :total="100"></Pagination>
    </div>
    <div class="rightColumn">
      <ArticleLists title="7天热门" :data="news"></ArticleLists>
      <ArticleLists title="最牛评论" :data="comment"></ArticleLists>
      <ArticleLists title="友情链接">
        <!--只是为了演示slot的使用-->
        <div slot="body">
          <ul class="links">
            <li v-for="(item, index) in links" :key="index">
              <a>{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </ArticleLists>
    </div>
    <MuFooter></MuFooter>
  </div>
</template>

<script>
import * as api from '../api/index.js'
import HomeNews from '../components/HomeNews'
import ArticleLists from '../components/ArticleLists/index'

if (process.env.NODE_ENV === 'development') {
  require('../mock')
}
export default {
  name: 'Home',
  data() {
    return {
      message: '',
      news: [],
      comment: [],
      links: []
    }
  },
  components: {
    HomeNews,
    ArticleLists
  },
  methods: {
    getData() {
      api.getMessage().then(res => {
        this.message = res.msg
      })
    },
    getHotNews() {
      api.getHot().then((res) => {
        this.news = res.data
      })
    },
    getHotComment() {
      api.getHotComment().then((res) => {
          this.comment = res.data
      })
    },
    getLinks() {
      api.getLinks().then((res) => {
        this.links = res.data
      })
    }
  },
  mounted() {
    this.getData()
    this.getHotNews()
    this.getHotComment()
    this.getLinks()
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
