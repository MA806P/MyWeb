//nodemon serverApp.js 启动服务器
//导入 http 内置模块
const http = require('http')
    //这个模块能帮助我们解析 URL 地址，拿到 pathname query
const urlModule = require('url')

//创建一个 http 服务器
const server = http.createServer()

//监听 http 服务器的 Request 请求
server.on('request', function(req, res) {
    // const url = req.url
    const { pathname: url, query } = urlModule.parse(req.url, true)
    if (url === '/getscript') {
        //拼接一个合法的 js 脚本，这里拼接的是一个方法的调用
        // var scriptStr = 'show()' //发送给客户端，当成代码进行执行


        var data = {
            name: 'tony',
            age: 18,
            gender: 'boy'
        }

        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr)
    } else {
        res.end('404')
    }
})

server.listen(3000, function() {
    console.log('server listen')
})