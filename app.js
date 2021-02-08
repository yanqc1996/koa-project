/*项目依赖*/
const Koa = require("koa")
const koaJson = require("koa-json") // get提交数据的中间件
const bodyParser = require("koa-bodyparser") // post提交数据中间件
// const koaBody = require('koa-body');   // 文件上传
const http = require("http")
const routes = require("./routes")
/*工具方法*/
const util = require("./utilitys.js")
/*配置文件*/
const config = require("./config.js")
/*应用实例*/
const app = new Koa()

app.use(bodyParser())
app.use(koaJson())
// app.use(koaBody({
//     multipart: true,
//     formidable: {
//         maxFileSize: config.LIMIT.UPLOAD_IMG_SIZE    // 设置上传文件大小最大限制，默认2M
//     }
// }));
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  )
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE")
  ctx.execSql = util.query
  if (ctx.method == "OPTIONS") {
    ctx.body = 200
  } else {
    await next()
  }
})
/*配置属性*/
const { SERVICE } = config
/*路由配置*/
app.use(routes.routes())
/*web服务*/
http
  .createServer(app.callback())
  .listen(SERVICE.PORT)
  .on("listening", function () {
    console.log(`服务已开启，端口：${SERVICE.PORT}`)
  })
