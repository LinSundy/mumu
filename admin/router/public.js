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

let LeftNavs = db.model('leftNavs', LeftNavSchema, 'menu');

router.get('/leftNavs', async ctx => {
   let res = await LeftNavs.find({}, (err, res) => {
    return res
  })
  ctx.header = {
     'Access-Control-Allow-Origin': "*"
  }
  ctx.body = res
})

module.exports =  router

