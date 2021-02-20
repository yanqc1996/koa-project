const qr = require("qr-image")
import { CompHttp } from "am-util"

/**
 * 二维码生成接口
 * @param ctx
 * @returns {Promise<boolean>}
 * @constructor
 */
exports.query = async (ctx) => {
  // 动态判断是否增加http请求头
  const text = CompHttp(ctx.query.text)
  try {
    const img = qr.image(text, {
      size: 10,
    })

    ctx.type = "image/png"
    ctx.body = img
  } catch (e) {
    ctx.type = "text/html;charset=utf-8"
    ctx.body = "<h1>414 Request-URI Too Large</h1>"
  }
}
