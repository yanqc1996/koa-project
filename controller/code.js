/*路由*/
const router = require("koa-router")()
/*接口服务*/
const codeService = require("../service/code.js")
/*配置属性*/
const config = require("../config.js")
const codePrefix = config.API.CODE_PREFIX

// 数据表查询
router.get(`${codePrefix}/query`, codeService.query)

module.exports = router
