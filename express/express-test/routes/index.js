var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send({"key":"value"});//可返回json数据
  // res.send("<h1>hello</h1>");//可渲染页面
  res.render('index', { title: 'Express' });//render(模板名字,参数)
});

module.exports = router;
