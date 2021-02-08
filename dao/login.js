const tableName = "user";
module.exports = {
  adminLogin: (ctx, postData) => {
    const { account, psd } = postData;
    return ctx.execSql(
      `select * from ${tableName} where user_name='${account}' and pass_word=${psd}`
    );
  },
  loginLogin: (ctx, postData) => {
    const { phone, psd } = postData;
    return ctx.execSql(
      `select * from ${tableName} where phone='${phone}' and pass_word=${psd}`
    );
  },


  // 插入数据，需要:1.完善返回方式 2.账号重复校验
  register: (ctx, postData) => {
    const { name, phone, company, account, password } = postData;
    return ctx.execSql(
      `INSERT INTO ${tableName} (name, phone,company,user_name,pass_word) VALUES ('${name}','${phone}','${company}','${account}','${password}' )`
    );
  },
};
