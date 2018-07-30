var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(res.protocol, "---------")
	// if (req.protocol === 'https') {
	// 	res.status(200).send('Welcome to Safety Land!');
	// } else {
	// 	res.status(200).send('Welcome!');
	// }
	res.render('index', {
		title: 'Express'
	});
});

module.exports = router;