const db = require('../config')
const leftNavsSchema = require('../Schema/leftNavs')

const LeftModel = db.model('leftNavs', leftNavsSchema)

exports.addLeftNavs = async ctx => {
	// 对数据库的操作
}

exports.getLeftNavs = async ctx => {
	// 读取数据库左侧菜单
	let data = await LeftModel.find({}, (err, res) => {
		return res
	})
	ctx.body = data
}