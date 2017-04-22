const mongoose = require('./mongo.js'),
    Schema = mongoose.Schema;

const IMSchema = new Schema({          
    number  : {type: String },                       //聊天室号码
    title   : {type: String},                        //聊天室标题
    creator : {type:String},                        //创建者
    date    : {type:String},                        //创建时间
    heat    : {type: Number}                         //聊天室热度
});

const IMRecordSchema = new Schema({
	number  : {type: String },                       //聊天室号码
	msgarry : [{
		date      : {type:String},                        //时间
		useremail : {type:String},                       //用户邮箱
		message   : {type: String},                       //聊天信息
		identity  : {type : String}                       //用户身份
	}]         
	
});

module.exports = {
	IM       : mongoose.model('IM',IMSchema),
	IMRecord : mongoose.model('IMRecord',IMRecordSchema)
}