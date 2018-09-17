/**
 * Created by chelin on 2018/9/6
 */

const Koa = require('koa')
const db = require('./config')
const leftNavs = require('./router/menu/leftNavs')
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
app.use(leftNavs.routes()).use(leftNavs.allowedMethods())

app.listen(port)

