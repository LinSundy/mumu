/**
 * Created by chelin on 2018/9/12
 */

const leftNavs = require('../controller/leftNavs')

module.exports = router => {
  router.get('/letNavs', leftNavs.getLeftNavs)
  router.post('/letNavs', leftNavs.addLeftNavs)
}

