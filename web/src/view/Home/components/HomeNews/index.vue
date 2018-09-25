<template>
	<ul class="homeNews">
		<li v-for="(item, index) in lists" :key="index">
			<a href="">
				<p class="title">{{item.title}}</p>
				<p class="desc">{{item.desc}}</p>
			</a>
			<dl>
				<dd>{{item.date}}</dd>
				<dd>作者：{{item.author}}</dd>
				<dd>浏览：{{item.scan}}</dd>
				<dd>评论：{{item.comment}}人</dd>
			</dl>
		</li>
	</ul>
</template>
<script>
import * as api from '../../api';
if (process.env.NODE_ENV === 'development') {
  require('../../mock');
}
export default {
  name: 'HomeNews',
  data() {
    return {
      lists: []
    };
  },
  methods: {
    getData() {
      api.getHomeNews().then(res => {
        this.lists = res.data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="less" scoped>
@import './index.less';
</style>