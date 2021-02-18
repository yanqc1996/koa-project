const managerDao = require("../dao/manager")
const util = require("../utilitys")
import { jsonToHump } from "am-util"
/**
 * 用户管理表格查询
 * @param ctx
 * @returns {Promise<boolean>}
 * @constructor
 */
exports.queryTable = async (ctx) => {
  try {
    // 此处将sql的查询转换为驼峰形式 TODO：将此方法提取到Dao层
    let result = jsonToHump(await managerDao.queryTable(ctx))
    ctx.body = util.resultSuccessJson(undefined, undefined, result)
  } catch (err) {
    ctx.body = util.resultErrorJson(undefined, err, {})
  }
}
