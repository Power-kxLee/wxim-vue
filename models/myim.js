const IM = require("../lib/IM.js").IM;
const IMRecord = require("../lib/IM.js").IMRecord;

module.exports = {
	create (data,success,error){
		let user = null;
		let sendObj = {
			code : 401
		}
		this.query ({"number":data.number}, (person) =>{
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
	 * [query 查询数据库]
	 * @param  {[Object]}   obj     [需要查询的对象]
	 * @param  {[function]} success [查询成功回调函数]
	 * @param  {[function]} error   [查询失败回调函数]
	 */
	query (obj,success,error){
		IM.findOne(obj,(err,person) => {
			if(err) { //失败
				return error(err);
			}
			success(person);
		});
	},
	queryAll (success,error){
		IM.find( (err,person) => {
			if(err) { //失败
				return error(err);
			}
			success(person);
		});
	}
} 