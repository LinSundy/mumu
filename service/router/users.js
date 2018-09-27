/**
 * Created by chelin on 2018/9/27
 */

const users = require('../controller/user')

module.exports = router => {
  // 验证用户登录
  router.post('/user/login', users.validateUser)
}