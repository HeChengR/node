//fs核心模块，读取另一个文件的内容readFile
var fs = require('fs');
//路径   编码   回调函数
fs.readFile('./fs_read.js','utf-8',function(err,data){
        console.log(data);
});



