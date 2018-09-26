<template>
  <div>
    <p class="title">{{title}}</p>
    <slot name="body">
      <ul class="newsLists">
        <li v-for="item in data" :key="item.id">
          <a>{{ item.title }}</a>
        </li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ArticleLists',
  props: {
    title: {
      required: true,
      type: String
    },
    data: {
      type: Array
    }
  }
}
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
