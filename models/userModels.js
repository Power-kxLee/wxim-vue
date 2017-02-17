var mysql = require("./mysql");
var Sequelize = require('sequelize');
var request = require('request');
var Q = require('q');

var User = function(user){
	this.username  = user.username;
	this.password  = user.password;
}

module.exports  = User;

User.orderlist = function(){
	
}

User.prototype.login = function(callback){
	var username = this.username;
	var members =  mysql.define("zcshop_members",{
		username:Sequelize.STRING
	},{
		timestamps:false, //是否添加 createdAt 和 updatedAt 两个时间戳字段 默认为true
		freezeTableName:true //Model 对应的表名将与model名相同
	});
	members.findAll({
		where:{
			username: username
		}
	}).then(function(data){
		console.log(data)
	})
}
