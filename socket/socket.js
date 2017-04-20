module.exports = function(io){
	io.on('connection', function(socket){
		console.log(socket.request.headers)
		socket.on('event', function(msg){
			io.emit("event",msg);
			console.log("有人发送东西过来啦",msg)
		});
		socket.on('disconnect', function(msg){
			console.log("执行disconnect时间")
		});

	});
	
}