const User = require("../lib/user.js");

module.exports = {
	create (data,success,error){
		let user = null;
		User.findOne({"email":data.email},function(err,person){
			if(err) { //失败
				return error(err);
			}
			
			if(!!person && person.email == data.email ){
				return error("该用户邮箱已经存在"); //存在重复邮箱

			}else{
				//成功 把数据写入数据库
				user = new User(data);
				//执行回调
			    user.save(function (err, res) {
			        if (err) {
			            return error(err);
			        }
			        else {
			            return success(res);
			        }

			    });
			}
		});


	}
} 