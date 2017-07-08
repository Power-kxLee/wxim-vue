var mongoose = require('./mongo.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({          
    email : { type: String },                       //邮箱
    username: {type: String},                        //用户名
    password: {type: String},                        //密码
    regdata : { type: String}                       //注册时间
});

module.exports = mongoose.model('User',UserSchema);