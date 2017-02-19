var express = require('express');
var router = express.Router();
var multiparty=require("multiparty");
var path=require("path");


/* GET users listing. */
router.post('/', function(req, res, next) {
 var uploadPath=path.join(__dirname,"../public/images");
 //生成multiparty对象
 var form=new multiparty.Form({uploadDir:uploadPath});
 //上传完处理
 form.parse(req,function(err,fields,files){
 	if(err){
 		//throw err;
 		console.log(err);
 	}else{
 		console.log(fields);
 		console.log(files);
 	}
 })

});

module.exports = router;
