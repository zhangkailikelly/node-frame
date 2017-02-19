var express = require('express');
var router = express.Router();
var util = require('util');
var formidable = require('formidable');
var fs = require("fs");

/* GET users listing. */
router.post('/:id', function (req, res, next) {

  if(req.body!=""){
      var form = new formidable.IncomingForm();
      //判断文件或文件夹是否存在

      form.uploadDir = "./uploads";    //设定上传路径
      form.parse(req, function (err, fields, files) {
          // console.log(files.hycx);
          //files图片信息
          // console.log(ustil.inspect({fields: fields, files: files}));
          fs.rename(files.hycx.path, "./uploads/" + files.hycx.name);//重命名
      });
  }
    res.send('success');
});

module.exports = router;
