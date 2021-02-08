/*路由*/
const router = require("koa-router")()
/*接口服务*/
const managerService = require("../service/manager.js")
/*配置属性*/
const config = require("../config.js")
const managerPrefix = config.API.USER_MANAGER_PREFIX

// 数据表查询
router.get(`${managerPrefix}/query`, managerService.queryTable)

module.exports = router
