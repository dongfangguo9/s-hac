/*
  index.js: webpack入口起点文件
  0.安装： npm i webpack webpack-cli -g
          npm i webpack webpack-cli -D //开发依赖，生产不依赖，生产直接是打好的bundle.js包。
          以上两个命令都要安装

  1. 运行指令：
    开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
      webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
      整体打包环境，是开发环境
    生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
      webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
      整体打包环境，是生产环境
      如果不带参数直接运行webpack会打到dist main.js中，打的是压缩包，即生产包

   2. 结论：
    1. webpack能处理js/json资源，不能处理css/img等其他资源
    2. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化~
    3. 生产环境比开发环境多一个压缩js代码。

    3.验证打好的包是否可用,直接引入即可
    */

// import './index.css';

import data from './data.json';
console.log(data);

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));
