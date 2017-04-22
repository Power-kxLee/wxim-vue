const Myim = require("../models/myim");

module.exports = (app) =>{
	app.post("/createim", (req,res) => {
		const bodydata = req.body;
		let deploy = {
			code : 401
		}
		try {
			if(bodydata.title.length < 1){
				
				throw "房间号没填写";
				
			}
			if(!bodydata.creator){

				throw "非正常用户";
			}	
		}catch(err){
			deploy.code = 404;
			deploy.mark = err;
			return res.send(deploy);
		}
		let imdata = {
			number  : bodydata.number,
			title   : bodydata.title,
			creator : bodydata.creator,
			date    : bodydata.date,
			heat    : bodydata.heat
		}
		Myim.create(imdata,(data) =>{
			if(data.code != 401){
				deploy.code = 404;
			}
			deploy.roomdata = data;
			res.send(deploy);
		},(err) =>{
			deploy.code = 404;
			deploy.errdata = err;
			res.send(deploy);
		})

	});

	app.post("/getroomim", (req,res) =>{
		let deploy = {
			code : 401
		}
		Myim.queryAllRoom( data =>{
			if(data.length < 1){
				deploy.code = 403;
				deploy.mark = "数据库没有查到数据啦";
				return res.send(deploy);
			}
			deploy.imlistarry = data;
			res.send(deploy);
			//console.log(data)
		}, err =>{
			deploy.code = 404;
			deploy.mark = "直接报错啦";
			deploy.errdata = err;
			res.send(deploy);
		});
	});

	app.post("/im/sendmessage" , (req,res) =>{
		let number = req.body.number;
		let date = req.body.date;
		let useremail = req.body.date; 
		let message = req.body.message; 
		let identity = req.body.identity; 

		let immsg = {
			number,
			date,
			useremail,
			message,
			identity
		}

		Myim.createMsgLog(immsg, success =>{
			console.log("查询房间聊天记录结果")
		},error =>{

		});
	});
}