/**
 * Created by chelin on 2018/9/12
 */

const Router = require('koa-router')
const router = new Router
const {addLeftNavs, getLeftNavs} = require('../control/leftNavs')

router.get('/leftNavs', getLeftNavs)

router.post('/leftNavs', addLeftNavs)

module.exports =  router

