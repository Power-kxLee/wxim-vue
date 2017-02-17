var User = require("../models/userModels");

module.exports = function(app){

	app.all("*", function (req, res, next) {
	  res.header('Access-Control-Allow-Origin', '*');
	  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	  if (req.method == 'OPTIONS') {
	    res.send(200);
	  } else {
	    next();
	  }
	});

	app.post('/user/orderlist', function (req, res) {
	  	res.send({errcode:0,errmsg:"ok"});
	});

	app.post("/user/login",function (req,res){

		var newuser = new User({
			username:req.body.username,
			password:req.body.password
		});
		newuser.login()


		res.send(req.body)
	});
}	