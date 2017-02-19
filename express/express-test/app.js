var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');//用来解析请求的body

var index = require('./routes/index');
var users = require('./routes/users');
var upload = require('./routes/upload');

var app = express();

// view engine setup  设置模板
//path.join(__dirname,"新路径"),不管新路径是否存在,都会返回新的路径;
// app.set('views', path.join(__dirname, 'views'));////设置模板引擎文件夹
// app.set('view engine', 'ejs');//设置模板引擎




app.set('views',path.join(__dirname, "views"));//设置模板的位置
app.set('view engine', 'html');//设置模板的后缀名
app.engine('.html', require('ejs').__express);//如果没有加上后缀名，则自动补全后缀名





// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());// for parsing application/json解析json
app.use(bodyParser.urlencoded({ extended: true ,limit:"10000kb"})); //limit 图片上传大小限制/ for parsing application/x-www-form-urlencoded解析urlencoded
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));//设置公共文件夹暴露给客户端

app.use('/', index);
app.use('/users', users);
app.use('/upload', upload);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
