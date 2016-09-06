var add = require('./demo.js');
console.log(add(1,2));

//如果不加var相当于在全局中定义了一个变量。全局中可以查看这个变量。如果加上var因为模块化形成了一个封闭的空间，
//所以添加不到全局对象中。
a = 123;
console.log(global);

