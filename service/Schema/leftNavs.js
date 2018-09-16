const Schema = require('mongoose').Schema

const leftNavsSchema = new Schema({
	name: String,
	icon: String,
	sort: Number
})

module.exports = leftNavsSchema