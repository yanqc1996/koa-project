// dao层，用于存放数据库查询sql，提供给service层进行数据查询
const tableName = "user";
module.exports = {
    // 登录接口
  adminLogin: (ctx, postData) => {
    return ctx.execSql(
      `select * from ${tableName}` 
      //   `select * from ${tableName} where phone = ? and password = ?`,
      //   [postData.phone, postData.psd]
    );
  },
};
