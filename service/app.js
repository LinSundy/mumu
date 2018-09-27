/**
 * Created by chelin on 2018/9/6
 */

const Koa = require('koa')
const app = new Koa
const Router = require('koa-router')
const router = new Router()
const logger = require('koa-logger')
const db = require('./config')
const cors = require('koa2-cors')
const body = require('koa-body')
const fs = require('fs')
const path = require('path')
const Schema = require('mongoose').Schema
const port = 3000

// 读取路由
const routerPath = 'router'
let arrRouter = fs.readdirSync(path.resolve(__dirname, routerPath))
arrRouter.map((item) => {
  require(path.resolve(__dirname, routerPath, item))(router)
})

// 读取Schema

// 数据库启动错误与成功提示
db.on('error', () => {
  console.log('连接错误')
})

db.on('open', () => {
  console.log('数据库启动成功, 端口为', port)
})

// 打印日志
app.use(logger())

// 拦截请求中携带的data信息
app.use(body())

// 解决跨域
app.use(cors())

// 加载路由
app.use(router.routes()).use(router.allowedMethods())

// 监听端口
app.listen(port)

