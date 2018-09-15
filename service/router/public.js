/**
 * Created by chelin on 2018/9/12
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Router = require('koa-router')
const router = new Router
const db = require('./config')

// leftNav
const LeftNavSchema = new Schema({
  title: String,
  icon: String,
  path: String
})

let LeftNavs = db.model('leftNavs', LeftNavSchema);

router.get('/leftNavs', async ctx => {
   let res = await LeftNavs.find({}, (err, res) => {
    return res
  })
  ctx.body = res
})

router.post('/leftNavs', async ctx => {
  console.log(ctx.request.body, 'ctx');
})

module.exports =  router

