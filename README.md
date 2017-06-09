# 从零构建vue2开发环境到入门,实现cordov打包APP

[![npm](https://img.shields.io/badge/npm-3.10.9-blue.svg)]() [![node](https://img.shields.io/badge/node-6.9.2-lightgrey.svg)]() [![vue](https://img.shields.io/badge/vue-2.0-brightgreen.svg)]() [![cordova](https://img.shields.io/badge/cordova-6.5.0-brightgreen.svg)]() 


[![事例图片](https://github.com/Power-kxLee/vue2-cordova-demo/blob/master/demo.gif)]()
[![仿照微信的IM](https://github.com/Power-kxLee/vue2-cordova-demo/blob/master/weixindemo.gif)]()

## 安装
``` 
git clone git@github.com:Power-kxLee/vue2-cordova-demo.git

cd vue2-cordova-demo

# 百度下淘宝镜像,把cnpm装下.如果没有就用npm
cnpm install
```
 

## 使用

```
# 开发模式
npm run dev 

# 客户端运行
http://localhost:8080/#/

# 编译
npm run build
```

## 服务器
```
# 运行node
cnpm install -g supervisor

npm run start
```

## 数据库

使用mongodb,[下载地址](https://www.mongodb.com/download-center?jmp=nav#community) , 选择计算机类型进行下载安装

在项目根目录(?随便在哪路径,最后能正确获取到就可以)下创建一个文件夹`data`,作为数据的存放.

进入mongodb的根目录, 比如我的mongodb目录是: `D:\bin` , data目录是:`C:\Users\lee\OneDrive\appCordova\testapp\data`

运行数据库
```
d: D:\bin

mongod.exe --dbpath C:\Users\lee\OneDrive\appCordova\testapp\data
```
这样数据库就运行了. 项目已经用`mongoose`,配置好连接, 具体的操作,可以查询[API](http://www.nodeclass.com/api/mongoose.html)


## 源码说明
### 目录说明
```
.
|-- bin                              // 启动node服务器配置
|-- hooks                            // Cordova执行命令时运行的特殊脚本
|-- lib                              // 数据库类型设计
|-- models                           // 数据库模块
|-- platforms                        // Cordova构建平台
|-- plugins                          // Cordova插件
|-- public                           // node静态文件目录
|-- routes                           // node路由文件	
|-- src                              // 项目源文件	
|   |-- assets                       // 源文件静态资源
|   |-- socket-client                // socket.io配置文件
|   |-- vuex                         // vuex配置
|   |-- App.vue                      // 模版载体
|   |-- main.js                      // 入口文件
|   |-- route.js                     // vue-router路由文件
|-- unpackage                        // 解压包	
|-- views                            // node视图文件	
|-- wwww                             // webpack编译源文件后存放位置	
|-- .babelrc                         // ES6语法编译配置
|-- .gitattributes                   // 设置项目主语言
|-- .gitignore                       // git忽略提交
|-- .project                         // java工程文件
|-- README.md                        // 项目说明
|-- app.js                           // node入口文件
|-- config.xml                       // cordova配置文件
|-- index.html                       // vue开发模式运行主页面
|-- info.txt                         // cordovr配置
|-- manifest.json                    // cordovr配置
|-- package.json                     // 配置项目相关信息
|-- postcss.config.js                // postcss配置
|-- webpack.config.js                // webpack打包配置
.

```

## 打包androidAPP

首先你得配置下,一步一步按流程走咯


- 下载安装[java开发工具包(JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

- 下载安装 Android SDK , 这里有2个选择, 你可以安装[Android ADT](http://adt.android-studio.org/) 和 [Android Studio](https://developer.android.com/studio/index.html), 我这里选择第一个,下载解压后进入目录 有个叫`SDK Manager.exe`的运行文件,就是用来安装SDK的, `sdk`目录就是存放下载的sdk包,`eclipse`就是调试工具了。

- 配置环境变量
	- 新增一个环境变量, 变量名`JAVA_HOME`,变量值指定JDK安装路径.
	- 新增一个环境变量, 变量名`ANDROID_HOME`,变量值指定SDK安装路径.
	- 修改环境变量`path`, 在`path`环境变量下新增 android SDK的 `tools` 和 `platform-tools`目录路径

- 解决墙 , 打开`SDK Manager.exe`运行文件,打开后会检查更新.但是因为墙的威力,迟迟不会成功的. 这里我们先解决墙的问题.
	- 点击 `Tool`
	- 选择 `Options`
	- 在HTTP Proxy Server , 输入 `mirrors.neusoft.edu.cn`
	- 在HTTP Proxy Port , 输入 `80`
	- 选中 `Force https:` 什么什么的
	- 点击close关闭 , 在选择 `Packages`,`Reload`
	- 完事,没毛病

- 添加SDK包, 有3个包是必须要安装的 `Android Platform SDK` 、`Android SDK build-tools` 、 `Android Support Repository`(这个在'Extras'查找),前面2个下载最新的版本就可以了. 这里就等着安装吧.

- 下载安装cordov
	- `npm install -g cordova`
	- `cordova platform add android --save` 添加安卓平台 `cordova platform ls`查看当前平台的情况
	- `cordova build android` 构建安卓平台
	- `cordova plugin update` 更新平台插件

好了.完事准备,直接执行下面 编译同步打包(记得连接数据线 和打开手机的usb调试)

```
npm run cordova 
```

## 启动服务器

运行 
```
npm run start
```

写了测试的接口,除非你的手机修改了host文件能访问本机,不然启动之后还需要映射外网,这里推荐个工具[花生壳](http://hsk.oray.com/download/),测试流量有1024m/月。