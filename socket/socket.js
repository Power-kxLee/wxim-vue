module.exports = function(io){
	io.on('connection', function(client){
		console.log("有人链接io啦")
		client.on('event', function(msg){
			io.emit("event",msg);
			console.log("有人发送东西过来啦",msg)
		});
		client.on('disconnect', function(msg){
			console.log("执行disconnect时间")
		});
	});
}