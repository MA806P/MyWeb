
const http = require('http');
// 创建一个 HTTP server
const server = new http.Server();

//这个模块能帮助我们解析 URL 地址，拿到 pathname query
const urlModule = require('url')

/**
 * request 事件，当客户端发起请求后会响应这个事件
 * req：请求对象
 * res：响应对象
 * */
server.on('request', function(req, res) {
          
          //let url = req.url;
          const { pathname: url, query } = urlModule.parse(req.url, true);
          if (url == '/getdata') {
            let data = { title: "data", des: "this is data" };
            res.end(JSON.stringify(data))
          } else {
            res.end('404')
          }
          
          /*
          res.writeHead(200, {"Content-type" : "application/json" });
          let data = { title: "data", des: "this is data" };
          // 最终数据需要转换成 json 字符串
          res.write(JSON.stringify(data));
          res.end();
           */
          
          });

// 监听端口
server.listen(3001, function() {
    console.log('Server run in: http://127.0.0.1:3001');
});


//nodemon server.js 启动服务器

