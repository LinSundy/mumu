/**
 * Created by chelin on 2018/9/27
 */
const db = require('./config')

const UsersSchema = require('./Schema/users')

exports.UserModel = db.model('users', UsersSchema)
