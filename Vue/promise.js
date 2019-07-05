// 形式上的异步操作，具体异步什么事，目前不清楚
//var promise1 = new Promise();


// const fs = require('fs');
// // 具体的异步操作，function 指定一个具体的异步操作
// var promise2 = new Promise(function() {
//     fs.readFile('vue_test.html', 'utf-8', (err, dataStr) => {
//         if (err) throw err;
//         console.log(dataStr);
//     })
// });
//上面的创建后会立即执行，想调用在执行，用函数包裹一下，如下代码

function getFileByPath(fpath) {
    const fs = require('fs');
    // 具体的异步操作，function 指定一个具体的异步操作
    return new Promise(function(resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            //if (err) throw err;
            //console.log(dataStr);

            if (err) {
                reject(err);
            } else {
                resolve(dataStr);
            }
        })
    });
}

// var p = getFileByPath('vue_test.html');
// p.then(function(data) {
//     console.log(data);
// }, function(err) {
//     console.log(err.message);
// });

// getFileByPath('vue_test.html').then(function(data) {
//     console.log(data);
// }, function(err) {
//     //失败的回调可以省略不写
//     console.log(err.message);
// });

//嵌套顺序执行
/*
getFileByPath('notes/test1.txt')
    .then(function(data) {
        console.log(data);
        return getFileByPath('notes/test2.txt');
    }, function(err) {
        console.log('111--- error');
        //防止前面的执行失败，影响后面的。这个根据需求来
        return getFileByPath('notes/test2.txt');
    })
    .then(function(data) {
        console.log(data);
    });
    */
getFileByPath('notes/test1.txt')
    .then(function(data) {
        console.log(data);
        return getFileByPath('notes/test2.txt');
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        //前面的任意一个执行失败了，都会调用这个函数
        //第一个调用失败，第二个也不会执行
        console.log(err.message);
    });

console.log(' after log '); //这个先执行


//执行命令： node promise.js