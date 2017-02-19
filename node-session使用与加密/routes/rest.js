var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send("请重新登陆")
		
});

module.exports = router;
