const Users = require("../models/users");
const sha1 = require("sha1");
//Users.create();
module.exports = function(app) {
  	/**
	 * 插入
	 */
	
	const emailreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	
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
		
		let sendData = {}


		try {
			//console.log("!emailreg.test(email)",!emailreg.test(email),email)
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
	  		res.send(data);
  		}, (err) => {
  			sendData.state = "error"
  			sendData.head = err;
  			res.send(sendData);
  		});
	});

	app.post("/login" , ( req , res ) =>{
		let email = req.body.email;
		let password = req.body.password;
		let returnObj = {};
		if (!emailreg.test(email)) {
			returnObj.state = "error";
			returnObj.head = "登录的邮箱格式还是错的,还登录个毛线";
			return res.send(returnObj);

		} 
		
		Users.query({email},(data) =>{

			if(!data){
				returnObj.state = "error";
				returnObj.head = "账号不存在,登录失败";
				return res.send(returnObj)
			}
			console.log(sha1(password) !== data.password , sha1(password) , data.password)
			if( sha1(password) !== data.password){
				returnObj.state = "error";
				returnObj.head = "用户名或密码错误";
				return res.send(returnObj);
			}
			returnObj.state = "success";
			returnObj.head = "登录成功";
			returnObj.data = data;
			res.send(returnObj);
			console.log("查询成功",data)
		},(error) => {
			returnObj.state = "error";
			returnObj.data = error;
			res.send(returnObj);
			console.log("查询失败",error)
		});
	});

};