const managerDao = require("../dao/manager")
const util = require("../utilitys")
/**
 * 用户管理表格查询 TODO:此处考虑下划线转驼峰 mysql建表不能驼峰
 * @param ctx
 * @returns {Promise<boolean>}
 * @constructor
 */
exports.queryTable = async (ctx) => {
  //   let account = ctx.query.account || ""
  //   let psd = ctx.query.password || ""
  //   if (!account || !psd) {
  //     ctx.body = util.resultErrorJson(undefined, "请输入账户或密码信息", {})
  //     return false
  //   }
  try {
    let result = await managerDao.queryTable(ctx)
    // if (result.length > 0) {
    ctx.body = util.resultSuccessJson(undefined, undefined, result)
    // } else {
    //   ctx.body = util.resultSuccessJson(undefined, undefined, {})
    // }
  } catch (err) {
    ctx.body = util.resultErrorJson(undefined, err, {})
  }
}
