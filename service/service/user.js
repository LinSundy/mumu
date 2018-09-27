/**
 * Created by chelin on 2018/9/27
 */

const userService = require('../connentSchema')

exports.users = function (obj) {
  userService.UserModel.find(obj, (err, res) => {
      return res
  })
}

