# wxim - 一款运行到web上的聊天工具

演示:[www.jsobject.cc](http://www.jsobject.cc)

>手机扫一扫

![二维码](https://github.com/Power-kxLee/wxim-vue/blob/master/server/erweima.png)

## 技术栈
前端 : `vue` + `vue-router` + `vuex` + `vue-cil` + `axios` + `mint-ui` + `socket.io` + `webpack`

后端 : `nodeJS` + `express` + `compression`  + `mongoose`

数据库 :`mongodb`


## 构建程序
``` bash
## 安装依赖
npm install

## 开发环境
npm run dev

## 打包
npm run build

```

## 服务器
服务器和数据库在ECS中部署了. 所以运行项目后你会看到同步的数据.
当然. 你也可以在项目中使用本地服务器
```bash
## 安装进程管理器 
npm install -g supervisor
## 当然你也可以用pm2

## 运行服务器
npm run server
```
> 端口冲突? 请修改`wxim-vue\server\bin\www` 15行的`var port = normalizePort(process.env.PORT || '80');`  把80换成你想要的端口就可以

项目用的地址是ECS部署的地址. 所以要重新修改下配置
修改`\src\server_data.js`, `url`修改成`127.0.0.1:prot`; 
> `prot`是本地运行的端口名

## 帮助/共同进步
初衷,当时玩cordva 音频(语音)的功能.完全觉得可以写一套聊天的IM出来.微信是最理想的模仿对象.并实际工作中用不上很多新的知识.这过程也是为了巩固学到知识点. 毕竟多敲才能更好的理解轮子.创造轮子.希望能够与您一起进步

既然开起了头.就要一直完成下去.最终成为web上运行的`'微信'`.但知个人在业余的时间内开发 去完成这件事.根本不切实际.需要做的地方实在太多太多太多...(省略了1E个太多). 所以 希望能够得到您的帮助.

如果你有这个需求/兴趣/甚至大神带飞的情怀/ 请参与我们一起开发.感谢

