const loginDao = require("../dao/login");
const util = require("../utilitys");
/**
 * 后台账号登录接口业务逻辑
 * @param ctx
 * @returns {Promise<boolean>}
 * @constructor
 */
exports.adminLogin = async (ctx) => {
  let account = ctx.query.account || "";
  let psd = ctx.query.password || "";
  if (!account || !psd) {
    ctx.body = util.resultErrorJson(undefined, "请输入账户或密码信息", {});
    return false;
  }
  try {
    let result = await loginDao.adminLogin(ctx, { account, psd });
    if (result.length > 0) {
      ctx.body = util.resultSuccessJson(undefined, undefined, {});
    } else {
      ctx.body = util.resultSuccessJson(undefined, "账号或密码错误", {});
    }
  } catch (err) {
    ctx.body = util.resultErrorJson(undefined, err, {});
  }
};

/**
 * @description: 后台手机号登录接口业务逻辑
 * @param {*} ctx
 * @return {*} {Promise<boolean>}
 */
exports.phoneLogin = async (ctx) => {
  let phone = ctx.request.body.phone || "";
  let psd = ctx.request.body.password || "";
  if (!phone || !psd) {
    ctx.body = util.resultErrorJson(undefined, "请输入手机号或密码信息", {});
    return false;
  }
  try {
    let result = await loginDao.loginLogin(ctx, { phone, psd });
    if (result.length > 0) {
      ctx.body = util.resultSuccessJson(undefined, undefined, {});
    } else {
      ctx.body = util.resultSuccessJson(undefined, "手机号或密码错误", {});
    }
  } catch (err) {
    ctx.body = util.resultErrorJson(undefined, err, {});
  }
};

/**
 * @description: 用户信息注册接口
 * @param {*} ctx
 * @return {*} {Promise<boolean>}
 */
exports.register = async (ctx) => {
  const {
    realName: name,
    phoneNumber: phone,
    company,
    account,
    password,
  } = ctx.request.body;
  console.log(name, phone, company, account, password);
  if (!name || !phone || !company || !account || !password) {
    ctx.body = util.resultErrorJson(undefined, "请输入完善的注册信息", {});
    return false;
  }
  try {
    let result = await loginDao.register(ctx, {
      name,
      phone,
      company,
      account,
      password,
    });
    if (result.length > 0) {
      ctx.body = util.resultSuccessJson(undefined, undefined, {});
    } else {
      ctx.body = util.resultSuccessJson(undefined, "手机号或密码错误", {});
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
