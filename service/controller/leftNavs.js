const db = require('../config')
const leftNavsSchema = require('../Schema/leftNavs')
const utils = require('../utils')
const mongoose = require('mongoose')
const LeftModel = db.model('leftNavs', leftNavsSchema)

mongoose.Promise = global.Promise

exports.addLeftNavs = async ctx => {
  // 对数据库的操作 添加菜单到数据库
  let data = ctx.request.body
  let name = data.name
  let icon = data.icon
  let sort = data.sort

  await utils.isExist(LeftModel, {name}, {name, icon, sort}).then(data => {
    if(data) {
      ctx.body = {
        status: 200,
        msg: '保存成功'
      }
    } else {
      ctx.body = {
        status: 200,
        msg: '菜单名称已经存在'
      }
    }
  }).catch( async err => {
    Promise.reject(err)
  } )

}

exports.getLeftNavs = async ctx => {
  // 读取数据库左侧菜单
  let data = await LeftModel.find({}, (err, res) => {
    return res
  })
  ctx.body = data
}