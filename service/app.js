/**
 * Created by chelin on 2018/9/6
 */

const Koa = require('koa')
const db = require('./router/config')
const publicRouter = require('./router/public')
const cors = require('koa2-cors')
const app = new Koa
const port = 3000

db.on('error', () => {
  console.log('连接错误')
})

db.on('open', () => {
  console.log('数据库启动成功, 端口为', port)
})

app.use(cors())
app.use(publicRouter.routes()).use(publicRouter.allowedMethods())

app.listen(port)
