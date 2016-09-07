//模块加载机制
/**
 * 加载模块的时候会首先判断是否在文件模块的缓存区中，如果不在判断是否是原生模块，如果不是查找文件模块。
 * 然后根据扩展名载入文件模块，最后缓存文件模块。返回module.exports
 */

//  .js 可以省略    .node和.json不要省略


var demo5 = require('./demo5.js');//123
var demo51 = require('./demo5.js'); 
console.log(demo51);//456
var demo52 = require('./demo5.js');
console.log(demo52);//456
