const tableName = "user";
module.exports = {
  adminLogin: (ctx, postData) => {
    return ctx.execSql(
      `select * from ${tableName}`
      //   `select * from ${tableName} where phone = ? and password = ?`,
      //   [postData.phone, postData.psd]
    );
  },
};
