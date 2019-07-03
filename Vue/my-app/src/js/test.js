export default {
    name: 'name1',
    age: 20
}


export var title1 = 'title1';

// 在 ES6 中使用 export default 和 export 想外暴露成员
// 在 Node 中使用 var name = require('模块标识符') module.exports 和 exports 来暴露成员 
// 在一个模块中， export default 只允许向外暴露1次，可以同时使用 export default 、export