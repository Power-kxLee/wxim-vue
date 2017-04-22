module.exports = (app) => {
	
	app.all("*",  (req, res, next) => {
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
	
	require("./userController")(app);
	require("./imController")(app);
	
	
};