module.exports = function(io){

	let romInfo = {};
	io.on('connection', function(socket){
		let myEmail = "";
		let myName = "";
		let _id = "";
		socket.on("join" , (msg) =>{
			//console.log(msg)
			_id = msg.number;
			let jsonclose = true;
			//当前房间不存在
			if(!romInfo[_id]){
				romInfo[_id] = [];
			}
			console.log("romInfo[_id]",romInfo[_id])
			romInfo[_id].forEach( (elem,i) =>{
				if(elem.useremail == msg.useremail){
					jsonclose = false;
					return false;
				}
			});
			if(!jsonclose){
				return false;
			}

			romInfo[_id].push({
				useremail : myEmail = msg.useremail,
				username  : myName  = msg.username
			});

			socket.join(_id);
			io.to(_id).emit("newJoinUser",{
				username  : msg.username,
				headcount : romInfo[_id].length
			});
		});
		socket.on("leave", () =>{
			socket.emit("disconnect");
		})
		socket.on('disconnect', function(msg){
			let index = -1;
			romInfo[_id].forEach( (elem,i) =>{
				if(elem.useremail == myEmail){
					index = i;
					return false;
				}
			}); 
			if(index != -1){
				romInfo[_id].splice(index, 1);
			}
			socket.leave(_id);
			console.log(myName)
			io.to(_id).emit('msg', myName,romInfo[_id].length);
		});


	});
	
}