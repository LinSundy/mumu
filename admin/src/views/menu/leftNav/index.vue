<template>
  <div>
    <el-button class="add" type="primary" @click="showAddEditPanel">添加菜单</el-button>
    <AddEditPanel :visible.sync="addEditPanelVisible" :status="status"/>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  components: {
    AddEditPanel: () => import('./components/AddEditPanel.vue')
  },
  data() {
    return {
      status: 'add',
      addEditPanelVisible: false
    }
  },
  methods: {
    showAddEditPanel() {
      this.addEditPanelVisible = true
    },
    hideAddEidtPanel(v) {
      this.addEditPanelVisible = v
    }
  }
}
</script>

<style lang="scss" scoped>
.add {
  margin-top: 10px;
  margin-left: 10px;
}
</style>

