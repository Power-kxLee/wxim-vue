# vue2.0的入门项目,使用了cordova打包成androidAPP

ui框架使用了mint
Express提供服务器支持


## 安装
```
git clone git@github.com:Power-kxLee/Lee-s-app.git

cd Lee-s-app

cnpm install
```


## 使用

```
# 开发模式
npm run dev

# 编译

npm run build
```

## 打包androidAPP

首先你得配置下,一步一步按流程走咯


- 下载安装[java开发工具包(JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

- 下载安装 Android SDK , 这里有2个选择, 你可以安装[Android ADT](http://adt.android-studio.org/) 和 [Android Studio](https://developer.android.com/studio/index.html), 我这里选择第一个,下载解压后进入目录 有个叫`SDK Manager.exe`的运行文件,就是用来安装SDK的, `sdk`目录就是存放下载的sdk包,`eclipse`就是调试工具了。

- 配置环境变量
	1. 新增一个环境变量, 变量名`JAVA_HOME`,变量值指定JDK安装路径.
	2. 新增一个环境变量, 变量名`ANDROID_HOME`,变量值指定SDK安装路径.
	3. 修改环境变量`path`, 在`path`环境变量下新增 android SDK的 `tools` 和 `platform-tools`目录路径

- 解决墙 , 打开`SDK Manager.exe`运行文件,打开后会检查更新.但是因为墙的威力,迟迟不会成功的. 这里我们先解决墙的问题.
	1.点击 `Tool`
	2.选择 `Options`
	3.在HTTP Proxy Server , 输入 `mirrors.neusoft.edu.cn`
	4.在HTTP Proxy Port , 输入 `80`
	5.选中 `Force https:` 什么什么的
	6.点击close关闭 , 在选择 `Packages`,`Reload`
	7.完事,没毛病

- 添加SDK包, 有3个包是必须要安装的 `Android Platform SDK` 、`Android SDK build-tools` 、 `Android Support Repository`(这个在'Extras'查找),前面2个下载最新的版本就可以了. 这里就等着安装吧.

- 下载安装cordov
	1. `npm install -g cordova`
	2. `cordova platform add android --save` 添加安卓平台 `cordova platform ls`查看当前平台的情况
	3. `cordova build android` 构建安卓平台
	4. `cordova plugin update` 更新平台插件

好了.完事准备,直接执行下面 编译同步打包(记得连接数据线 和打开手机的usb调试)

```
npm run cordova 
```

