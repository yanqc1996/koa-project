


原koa项目结构
koa-project/（项目名称）
         |----  bin  
                     |---- www （启动文件）
         |----  node_modules
                     |---- 安装的各种依赖
         |----  public
                     |---- image
                     |---- style
                     |---- javascript
         |----  router
                     |---- index.js （路由）
                     |---- users.js
         |----  view  
                     |---- layout.pug（.pug 源于 Node.js 的 HTML 模板引擎，类似于.ejs模板 )
                     |---- index.pug
                     |---- error.pug
         |----  app.js
         |----  package.json


改造后项目结构（还未改造完成）
koa-project/（项目名称）
         |----  bin  
                     |---- www （启动文件）
         |----  dal  
                     |---- logger.js （打印logger）
         |----  logs  
                     |---- xxx （logger输出地址）
         |----  mysql  
                     |---- config.js （连接的数据库配置）
                     |---- mysql.js （sql查询等方法封装）
                     |---- pool.js （创建链接数据库）
         |----  node_modules
                     |---- 安装的各种依赖
         |----  public
                     |---- image
                     |---- style
                     |---- javascript
         |----  router
                     |---- index.js （接口路由）
                     |---- users.js
         |----  server
                     |---- index.js （sql语句）
         |----  view  
                     |---- layout.html
         |----  dao 数据访问层，用来连接数据库，通过sql语句返回数据供service层使用
         |----  service  业务服务层，执行业务逻辑并且通过dao层获取数据供controller层使用
         |----  controller 控制器层，编写接口，通过service层获取数据供接口返回
         |----  app.js
         |----  package.json