/*路由*/
const router = require("koa-router")()
/*接口服务*/
const loginService = require("../service/login.js")
/*配置属性*/
const config = require("../config.js")
const adminPrefix = config.API.ADMIN_INTERFACE_PREFIX
const mobilePrefix = config.API.MOBILE_INTERFACE_PREFIX

// 账号密码登录接口
router.get(`${adminPrefix}/login`, loginService.adminLogin)
// 手机号登录接口
router.post(`${adminPrefix}/phoneLogin`, loginService.phoneLogin)
// 账号注册接口
router.post(`${adminPrefix}/register`, loginService.register)

// 后台-使用登录控制器实现登出接口
router.post(`${adminPrefix}/login/out`, loginService.adminLoginOut)

// 移动端-使用登录控制器实现登录接口
router.post(`${mobilePrefix}/login`, loginService.mobileLogin)
// 移动端-使用登录控制器实现登出接口
router.post(`${mobilePrefix}/login/out`, loginService.mobileLoginOut)

module.exports = router
