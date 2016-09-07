//module.exports 和 exports
//如果直接给module.exports赋值，exports是无效的。如果直接以属性的方式赋值，两个都是有效的。


// module.exports = {a:'hello',b:'world'};
// exports.c = '!';
// console.log(module.exports);
// console.log(exports);


module.exports.a = 'hello';
module.exports.b = 'world';
exports.c = '!';
console.log(module.exports);
console.log(exports);