const Users = require("../models/users");
//Users.create();
module.exports = function(app) {
  	/**
	 * 插入
	 */
	
	function update(){
	    var wherestr = {'username' : 'Tracy McGrady'};
	    var updatestr = {'userpwd': 'zzzz'};
	    console.log("更新")
	    User.update(wherestr, updatestr, function(err, res){
	        if (err) {
	            console.log("Error:" + err);
	        }
	        else {
	            console.log("Res:" + res);
	        }
	    });
	}

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

	app.get('/', function (req, res) {

		res.render('index', { 
	    	title: 'Express111122211'

	    });
	});
	
	app.post('/reg',  (req, res) => {
		//console.log(11111111111111)
		//console.log(req.fields)
		//console.log(req.files)
		console.log(req.body)
		res.send({version:"成功"});

	});

};