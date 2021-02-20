const qr = require("qr-image")

/**
 * 二维码生成接口
 * @param ctx
 * @returns {Promise<boolean>}
 * @constructor
 */
exports.query = async (ctx) => {
  const text = ctx.query.text
  try {
    const img = qr.image("http://" + text, {
      size: 10,
    })

    ctx.type = "image/png"
    ctx.body = img
  } catch (e) {
    ctx.type = "text/html;charset=utf-8"
    ctx.body = "<h1>414 Request-URI Too Large</h1>"
  }
}
