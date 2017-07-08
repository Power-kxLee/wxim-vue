var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var socket = require('./socket/socket');
var app = express();

//设置'/www' 为存放视图(模版)文件目录,__dirname是全局变量, 存储当前执行脚本所在的目录
app.set('views', path.join(__dirname, '../dist'));
app.engine('.html', require('ejs').renderFile );
app.set("view engine", "html");

app.use(logger('dev'));//加载日志中间件
app.use(bodyParser.json());//加载解析json中间件
app.use(bodyParser.urlencoded({ extended: false }));//加载解析urlencoded请求体中间件
app.use(express.static(path.join(__dirname, '../dist')));//设置public文件夹存放静态文件目录

routes(app);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
