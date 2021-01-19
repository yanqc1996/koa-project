// controller 控制器层，编写接口，通过service层获取数据供接口返回（对接service层，实现接口返回）

/*路由*/
const router = require('koa-router')();
/*接口服务*/
const loginService = require('../service/login.js');
/*配置属性*/
const config = require('../config.js');
const adminPrefix = config.API.ADMIN_INTERFACE_PREFIX;
const mobilePrefix = config.API.MOBILE_INTERFACE_PREFIX;
// 后台-使用登录控制器实现登录接口
router.get(`${adminPrefix}/login`, loginService.adminLogin);
// 后台-使用登录控制器实现登出接口
router.post(`${adminPrefix}/login/out`, loginService.adminLoginOut);
 
// 移动端-使用登录控制器实现登录接口
router.post(`${mobilePrefix}/login`, loginService.mobileLogin);
// 移动端-使用登录控制器实现登出接口
router.post(`${mobilePrefix}/login/out`, loginService.mobileLoginOut);
 
module.exports = router;