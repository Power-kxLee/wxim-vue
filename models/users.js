const User = require("../lib/user.js");

module.exports = {
	create (data,success,error){
		let user = null;
		let sendObj = {}
		this.query ({"email":data.email}, (person) =>{

			if(!!person && person.email == data.email ){
				sendObj.state = "error"
				sendObj.head = "该用户邮箱已经存在,所以不能创建了"
				return success(sendObj); //存在重复邮箱
			}else{
				//成功 把数据写入数据库
				user = new User(data);
				//执行回调
			    user.save( (err, res) =>{
			        if (err) {
			            return error(err);
			        }
			        else {
			        	sendObj.state = "success";
						sendObj.head = "注册成功";
						sendObj.data = res;
			            return success(sendObj);
			        }

			    });
			}

	
		},(err) =>{
			error(err);
		});

	},
	/**
	 * [query 查询数据库]
	 * @param  {[Object]}   obj     [需要查询的对象]
	 * @param  {[function]} success [查询成功回调函数]
	 * @param  {[function]} error   [查询失败回调函数]
	 */
	query (obj,success,error){
		User.findOne(obj,(err,person) => {
			if(err) { //失败
				return error(err);
			}
			success(person);
		});
	}
} 