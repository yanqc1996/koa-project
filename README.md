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
         |----  app.js
         |----  package.json