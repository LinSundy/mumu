<template>
  <div>
    <div class="container">
      <div class="news">
        <a href="">
          {{message}}
        </a>
      </div>
    </div>
    <div class="rightColumn">

    </div>
  </div>
</template>

<script>
import * as api from '../api/index.js';
if (process.env.NODE_ENV === 'development') {
  require('../mock')
}
export default {
  name: 'Home',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    getData() {
      api.getMessage().then((res) => {
        this.message = res.msg
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
