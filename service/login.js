// service层：业务服务层，执行业务逻辑并且通过dao层获取数据供controller层使用（业务层，对接dao层数据，完成业务逻辑）
const loginDao = require("../dao/login");
const util = require("../utilitys");
/**
 * 后台登录接口业务逻辑
 * @param ctx
 * @returns {Promise<boolean>}
 * @constructor
 */
exports.adminLogin = async (ctx) => {
  let phone = ctx.request.body.phone || "";
  let psd = ctx.request.body.password || "";
  if (!phone || !psd) {
    ctx.body = util.resultErrorJson(undefined, "手机号码或密码不能为空", {});
    return false;
  }
  try {
    let result = await loginDao.adminLogin(ctx, { phone, psd });
    if (result.length > 0) {
      ctx.body = util.resultSuccessJson(undefined, undefined, result);
    } else {
      ctx.body = util.resultSuccessJson(undefined, "账号或密码错误", {});
    }
  } catch (err) {
    ctx.body = util.resultErrorJson(undefined, err, {});
  }
};
/**
 * 后台登出接口业务逻辑
 * @param ctx
 * @returns {Promise<boolean>}
 * @constructor
 */
exports.adminLoginOut = async (ctx) => {
  let phone = ctx.request.body.phone || "";
  let psd = ctx.request.body.password || "";
  if (!phone || !psd) {
    ctx.body = {
      success: false,
      message: "手机号码或密码不能为空",
    };
    return false;
  }
  try {
    let result = await ctx.execSql(
      `select * from account where phone = ? and password = ?`,
      [phone, psd]
    );
    if (result.length > 0) {
      ctx.body = {
        success: true,
        userID: result[0].id,
        message: "",
      };
    } else {
      ctx.body = {
        success: false,
        userID: 0,
        message: "账号或密码错误",
      };
    }
  } catch (err) {
    ctx.body = {
      success: false,
      userID: 0,
      message: err,
    };
  }
};

/**
 * 移动端登录接口业务逻辑
 * @param ctx
 * @returns {Promise<boolean>}
 * @constructor
 */
exports.mobileLogin = async (ctx) => {
  let phone = ctx.request.body.phone || "";
  let psd = ctx.request.body.password || "";
  if (!phone || !psd) {
    ctx.body = {
      success: false,
      message: "手机号码或密码不能为空",
    };
    return false;
  }
  try {
    let result = await ctx.execSql(
      `select * from account where phone = ? and password = ?`,
      [phone, psd]
    );
    if (result.length > 0) {
      ctx.body = {
        success: true,
        userID: result[0].id,
        message: "",
      };
    } else {
      ctx.body = {
        success: false,
        userID: 0,
        message: "账号或密码错误",
      };
    }
  } catch (err) {
    ctx.body = {
      success: false,
      userID: 0,
      message: err,
    };
  }
};
/**
 * 移动端登出接口业务逻辑
 * @param ctx
 * @returns {Promise<boolean>}
 * @constructor
 */
exports.mobileLoginOut = async (ctx) => {
  let phone = ctx.request.body.phone || "";
  let psd = ctx.request.body.password || "";
  if (!phone || !psd) {
    ctx.body = {
      success: false,
      message: "手机号码或密码不能为空",
    };
    return false;
  }
  try {
    let result = await ctx.execSql(
      `select * from account where phone = ? and password = ?`,
      [phone, psd]
    );
    if (result.length > 0) {
      ctx.body = {
        success: true,
        userID: result[0].id,
        message: "",
      };
    } else {
      ctx.body = {
        success: false,
        userID: 0,
        message: "账号或密码错误",
      };
    }
  } catch (err) {
    ctx.body = {
      success: false,
      userID: 0,
      message: err,
    };
  }
};
