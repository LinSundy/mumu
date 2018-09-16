/**
 * Created by chelin on 2018/9/6
 */

const Koa = require('koa')
const db = require('./config')
const router = require('./router/router')
const cors = require('koa2-cors')
const logger = require('koa-logger')
const body = require('koa-body')
const app = new Koa
const port = 3000

db.on('error', () => {
  console.log('连接错误')
})

db.on('open', () => {
  console.log('数据库启动成功, 端口为', port)
})

app.use(logger())
app.use(body())
app.use(cors())
app.use(router.routes()).use(router.allowedMethods())

app.listen(port)

