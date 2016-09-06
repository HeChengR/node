//计算程序的执行时间
// console.time('test');
// for (var index = 0; index < 10000; index++) {
// }
// console.timeEnd('test');


//断言
// var arr = [];
// console.assert(Array.isArray(arr),'不是一个数组');


//获取绝对路径
// console.log(__dirname);//D:\lianxi\node
// console.log(__filename);//D:\lianxi\node\demo.js


// console.log(process.version);//获取版本号
// console.log(process.platform)//当前系统平台
// process.stdout.write('abcd');//在控制台做标准的输出
// console.log(process.pid);//当前应用程序的进程号
// console.log(process.title)//默认值为node 可以自己设置
// console.log(process.argv);//当前进程的命令行参数列表
// process.execPath;
// process.stdin;
// process.stderr;


//在node中一个js文件就是一个模块，然后通过require引入定义好的模块，通过module.exports或者是exports来暴露信息。
module.exports = function(v1,v2){
     return v1 + v2;
}








