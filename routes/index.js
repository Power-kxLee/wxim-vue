const Users = require("../models/users");
const sha1 = require("sha1");
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
		res.header('Access-Control-Allow-Origin', '*'); //允许的域名
		res.header("Access-Control-Allow-Headers","Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"); //允许的header类型
		res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		res.header("X-Powered-By",' 3.2.1')  
		res.header("Content-Type", "application/json;charset=utf-8");  
		if (req.method == 'OPTIONS') {
			res.send(200);
		} else {
			next();
		}
	});


	
	app.post('/reg',  (req, res) => {
		let email = req.body.email;
		let username = req.body.username;
		let password = req.body.password;
		let repassword = req.body.password1;
		const emailreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
		let sendData = {}


		try {
			console.log("!emailreg.test(email)",!emailreg.test(email),email)
			if (!emailreg.test(email)) {

			  throw  '邮箱不正确啊';

			} 
			if (!(username.length >= 1 && username.length <= 10)) {

		      throw  '名字请限制在 1-10 个字符';

		    }
		    if (password.length < 6) {

		      throw '密码至少 6 个字符';

		    }
		    if (password !== repassword) {

		      throw  '两次输入密码不一致';
		    }
		}catch(err){
			//console.log("new Date()",new Date())
			//console.log("转换时间戳(毫秒)",new Date().getTime())
			//console.log("转换标准时间(毫秒)",new Date().toLocaleString())
			sendData.state = "error";
			sendData.head = err;
			return res.send(sendData)
		}
		


	    // 明文密码加密
  		password = sha1(password);
		let regdata = new Date().toLocaleString();
  		let user = {
  			email,
  			username,
  			password,
  			regdata
  		};

  		Users.create(user,(data) => {
  			sendData.state = "success";
  			sendData.data = data;
  			res.send(sendData);

  		}, (err) => {
  			sendData.state = "error"
  			sendData.head = err;
  			res.send(sendData);
  		});
	});

};