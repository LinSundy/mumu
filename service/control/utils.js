// 公用工具
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

exports.isExist = function (model, params, obj) {
	let promise = new Promise((resolve, reject) => {
		model.find(params, (err, data) => {
			if(err) return reject(err)
			if(data.length !== 0) {
				return resolve('')
			} else {
				new model(obj).save((err, data) => {
					if (err) {
						reject(err)
					} else {
						resolve(data)
					}
				})
			}
		})
	})
	return promise
}