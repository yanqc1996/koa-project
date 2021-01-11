module.exports = {
  // 服务器配置
  SERVICE: {
    HOST: "",
    PORT: "3000",
  },
  // 数据库连接配置
  DATABASE: {
    HOST: "localhost", // 连接的本地mysql
    USER: "root", // 用户名
    PASSWORD: "123456", // 密码
    PORT: "3306", // 端口号
    DATABASE: "amao", // 数据库名
    CONNECTION_LIMIT: 10,
  },
  // 接口地址配置
  API: {
    // 项目接口前缀
    PROJECT_INTERFACE_PREFIX: "/testApi",
    // 后台接口前缀
    ADMIN_INTERFACE_PREFIX: "/adminApi",
    // 移动端接口前缀
    MOBILE_INTERFACE_PREFIX: "/mobileApi",
  },
  // 路径配置
  PATH: {
    UPLOAD_PATH: "public/upload",
  },
  // 限制条件配置
  LIMIT: {
    UPLOAD_IMG_SIZE: 200 * 1024 * 1024,
  },
};
