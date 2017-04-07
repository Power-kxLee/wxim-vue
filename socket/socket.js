module.exports = function(io){
	io.on('connection', function(client){
		console.log("io加载完毕")
	  client.on('event', function(data){});
	  client.on('disconnect', function(){});
	});
}