const Schema = require('mongoose').Schema

const leftNavsSchema = new Schema({
	name: String,
	icon: String,
	sort: Number
}, { versionKey: false})

module.exports = leftNavsSchema