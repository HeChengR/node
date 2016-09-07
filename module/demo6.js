/**
 * Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'D:\\lianxi\\node\\module\\demo6.js',
  loaded: false,
  children:
   [ Module {
       id: 'D:\\lianxi\\node\\module\\node_modules\\add\\index.js',
       exports: [Function],
       parent: [Circular],
       filename: 'D:\\lianxi\\node\\module\\node_modules\\add\\index.js',
       loaded: true,
       children: [],
       paths: [Object] } ],
  paths:
   [ 'D:\\lianxi\\node\\module\\node_modules',
     'D:\\lianxi\\node\\node_modules',
     'D:\\lianxi\\node_modules',
     'D:\\node_modules' ] }
 */

//require会去加载node_modules下面我创建的add包。
var num = require('add');
console.log(num(1,2));