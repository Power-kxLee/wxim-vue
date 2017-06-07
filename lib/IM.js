const mongoose = require('./mongo.js'),
    Schema = mongoose.Schema;

const IMSchema = new Schema({          
    number  : {type: String },                      //聊天室号码
    title   : {type: String},                       //聊天室标题
    creator : {type:String},                        //创建者
    date    : {type:String},                        //创建时间
    heat    : {type: Number},                       //聊天室热度
    roomnewmsg  : []                    			//房间最新的聊天信息
});

const IMRecordSchema = new Schema({
	number  : {type: String },                       //聊天室号码
	msgarry : [{
		date      : String,                        //时间
		useremail : String,                       //用户邮箱
		username  : String,                       //用户邮箱
		message   : String,                       //聊天信息
		identity  : String,                       //用户身份
		if_ready  : String
	}]         
	
});

const roomlength = new Schema({
	user_email : String, 
	room_array :[{	
		room_number : String,
		room_record_length : Number 
	}]
});


module.exports = {
	IM       : mongoose.model('IM',IMSchema),
	IMRecord : mongoose.model('IMRecord',IMRecordSchema),
	roomlength  : mongoose.model('roomlength',roomlength),
}