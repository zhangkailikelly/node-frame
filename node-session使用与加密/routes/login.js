var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	if(req.body.username=="qq"&&req.body.password=="123"){
		req.session.username=req.body.username;
		req.session.password=req.body.password;
		res.send("登陆成功")

	}else{
		res.send("登陆失败")
	}
	

});

module.exports = router;
