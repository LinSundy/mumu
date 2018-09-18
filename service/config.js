/**
 * Created by chelin on 2018/9/12
 */

const mongoose = require('mongoose')
const dbPath = 'mongodb://localhost:27017/mumudb'

let db = mongoose.createConnection(dbPath, {useNewUrlParser: true})

module.exports = db;