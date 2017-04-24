const IM = require("../lib/IM.js").IM;
const imMsgLog = require("../lib/IM.js").IMRecord;

module.exports = {
	create (data,success,error){
		let user = null;
		let sendObj = {
			code : 401
		}
		this.queryRoom ({"number":data.number}, (person) =>{
				console.log("查询是否有冲突房间号",person)
				if(!!person ){
					sendObj.code = 404;
					sendObj.mark = "这个房号被人抢注了,赶紧换一个吧";
					return success(sendObj);
				}

				//成功 把数据写入数据库
				cIM = new IM(data);
				//执行回调
			    cIM.save( (err, res) =>{
			        if (err) {
			            return error(err);
			        }
			        else {
						sendObj.mark = "房间创建成功";
						sendObj.homedata = res;
			            return success(sendObj);
			        }

			    });
	
		},(err) =>{
			error(err);
		});

	},
	/**
	 * [queryRoom 查询创建过的房间]
	 * @param  {[Object]}   obj     [需要查询的对象]
	 * @param  {[function]} success [查询成功回调函数]
	 * @param  {[function]} error   [查询失败回调函数]
	 */
	queryRoom (obj,success,error){
		IM.findOne(obj,(err,person) => {
			if(err) { //失败
				return error(err);
			}
			success(person);
		});
	},
	/**
	 * [queryAllRoom 查询所有房间]
	 * @param  {[type]} success [description]
	 * @param  {[type]} error   [description]
	 * @return {[type]}         [description]
	 */
	queryAllRoom (success,error ){
		IM.find( (err,person) => {
			if(err) { //失败
				return error(err);
			}
			success(person);
		});
	},
	/**
	 * [queryRoomMsgLog 查询指定房间的聊天记录]
	 * @param  {[type]} success [description]
	 * @param  {[type]} error   [description]
	 * @return {[type]}         [description]
	 */
	queryRoomMsgLog (obj,success,error){
		imMsgLog.findOne(obj, (err,person) => {
			if(err) { //失败
				return error(err);
			}
			success(person);
		});
	},
	/**
	 * [createMsgLog 创建房间的聊天记录]
	 * @param  {[type]} form    [数据data]
	 * @param  {[type]} success [成功回调函数]
	 * @param  {[type]} error   [失败回调函数]
	 */
	createMsgLog (form,success,error){
		let code = 401;
		let mark = "";
		if(!form.number){
			code = 404;
			mark = "房号都没有,查个毛线啊"
			return error({code,mark})
		}
		this.queryRoomMsgLog({
			"number":form.number	
		}, data =>{
			let createdata = {
				number : form.number,
				msgarry : [{
					date : form.date,
					useremail : form.useremail,
					message : form.message,
					identity : form.identity
				}]
			}
			
			//没有查询到就创建一个
			if(!data){
				clog = new imMsgLog(createdata);
				clog.save( (err,sus) =>{
					if(err){
						return error(err);
					}
					success({code,successdata:sus})
				});

			}else{
				//存在房间,直接进行数据更新
				if(data.number == form.number){
					imMsgLog.findById(data._id, (err,user) =>{
						user.msgarry.push({
							date : form.date,
							useremail : form.useremail,
							username : form.username,
							message : form.message,
							identity : form.identity
						});

						user.save( (err,res) =>{
							if(err){
								return error(err);
							};
							console.log("res",res)
							success({code,res});

						});
					});
					
				}
				
			}

		}, err =>{
			error(err);
		});

	},
	/**
	 * [queryAllMsg 查询当前房间的所有数据]
	 * @return {[type]} [description]
	 */
	queryAllMsg (form,success,error){
		let code = 401;
		let mark = "";
		if(!form.number){
			code = 404;
			mark = "房号都没有,查个毛线啊"
			return error({code,mark})
		}
		this.queryRoomMsgLog({
			"number":form.number	
		}, data =>{
			success(data);

		}, err =>{
			error(err);
		});

	}
} 