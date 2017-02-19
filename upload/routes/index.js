var express = require('express');
var router = express.Router();
var fs = require("fs");
var b=100;
/* GET home page. */
router.get('/', function(req, res, next) {
  b++;
  // fs.access("./a",function(exists){
  //   console.log(exists);
  //   if(exists){
  //     console.log("存在");
  //     fs.rmdir("./a",function(err){
  //       if(err){
  //         console.log(err);
  //       }
  //     })
  //
  //   }else{
  //     console.log("不存在");
  //     fs.mkdir("./a",function(err){
  //       if(err){
  //         console.log(err);
  //       }
  //     })
  //   }
  //
  // })
  res.send(b.toString())
  //res.render('index', { title: 'Express' });
});

module.exports = router;
