<template>
  <div>
    <el-dialog :title="title" :visible="visible">
      <div class="panelBody">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="菜单名称" prop="name">
            <el-input v-model.trim="form.name"/>
          </el-form-item>
          <el-form-item label="图标名称" prop="icon">
            <el-input v-model.trim="form.icon"/>
          </el-form-item>
          <el-form-item label="排序">
            <el-row>
              <el-col :span="10">
                <el-input v-model.number="form.sort" placeholder="默认排序是 0"/>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="hideAddEidtPanel">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as api from '../api/index.js'

export default {
  name: 'AddEditPanel',
  props: {
    status: {
      type: String,
      default: 'add'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validatName = (rule, value, cb) => {
      const reg = /^[0-9]/
      if (reg.test(value)) {
        cb(new Error('菜单不能以数字开头'))
      } else {
        cb()
      }
    }
    const validatIcon = (rule, value, cb) => {
      const reg = /^[0-9]/
      if (reg.test(value)) {
        cb(new Error('icon命名不能以数字开头'))
      } else {
        cb()
      }
    }
    return {
      rules: {
        name: [
          {
            required: true,
            message: '请输入菜单名称',
            trigger: 'blur'
          }, {
            min: 2,
            max: 6,
            message: '长度在4-10个字符之间',
            trigger: 'blur'
          }, {
            validator: validatName,
            trigger: 'blur'
          }
        ],
        icon: [
          {
            required: true,
            message: '请输入icon的名称',
            trigger: 'blur'
          },
          {
            validator: validatIcon,
            trigger: 'blur'
          }
        ]
      },
      form: {
        name: '',
        icon: '',
        sort: ''
      }
    }
  },
  computed: {
    title() {
      return this.status === 'add' ? '新增菜单' : '编辑菜单'
    }
  },
  methods: {
    hideAddEidtPanel() {
      this.$emit('update:visible', false)
    },
    submitForm() {
      this.$refs['form'].validate(vaild => {
        if (this.form) {
          this.form.sort = 0
        }
        if (vaild) {
          api.add({ ...this.form }).then(res => {
            console.log('请求成功')
          }).catch(err => {
            if (err) {
              console.log('请求失败')
            }
          })
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
 .panelBody {
   width: 80%;
   margin: 0 auto
 }
</style>

