const tableName = "user"
module.exports = {
  queryTable: (ctx, postData) => {
    // const { account, psd } = postData
    return ctx.execSql(
      `select * from ${tableName}`
      //   [account, psd]
    )
  },
}
