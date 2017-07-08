module.exports = function(io) {

    let romInfo = {};
    io.on('connection', function(socket) {
        //console.log("链接socket________________________")
        let myEmail = "";
        let myName = "";
        let _id = "";
        socket.on("join", (msg) => {
            _id = msg.number;
            let jsonclose = true;

            //console.log("有房间新链接",msg.number)
            //当前房间不存在
            if (!romInfo[_id]) {
                romInfo[_id] = [];
            }

            //当前房间人数大于或等于1个的时候 
            if (romInfo[_id].length > 0) {
                //循环房间内人,匹配是否已经重复加入
                for (let i = 0; i < romInfo[_id].length; i++) {

                    if (romInfo[_id][i].useremail == msg.useremail) {
                        jsonclose = false;
                        break;
                    }
                }
            }


            //如果是新的用户
            if (jsonclose) {
                //添加用户数据到集合里面
                romInfo[_id].push({
                    useremail: myEmail = msg.useremail,
                    username: myName = msg.username
                });
            }

            ////console.log("创建连接房间",_id)

            //创建room链接
            socket.join(_id);

            //发送事件到客户端,通知用户
            io.to(_id).emit("newJoinUser", {
                username: msg.username,
                headcount: romInfo[_id].length
            });
        });

        //断开连接
        socket.on("leave", (data) => {
            socket.emit("disconnect", data);
        });
        //断开客户端做操作
        socket.on('disconnect', (d) => {

            let index = -1;
            let _id = d.number;

            //console.log("romInfo_id", _id);
            if (!romInfo[_id]) {
                return false;
            }
            //获得在数组内的索引
            if (romInfo[_id].length < 1) {
                return false;
            }
            romInfo[_id].forEach((elem, i) => {
                if (elem.useremail == d.useremail) {
                    index = i;
                    return false;
                }
            });

            //删掉房间退出用户的名单,更新集合
            if (index >= 0) {
                romInfo[_id].splice(index, 1);
            }

            console.log("退出房间是 ", _id)

            //退出了哪个房间
            socket.leave(_id);

            io.to(_id).emit('user_leave', {
                username: d.username,
                room_id: _id,
                length: romInfo[_id].length
            });
        });

        socket.on("sendmsg", (d) => {

            //console.log("向房间", d.number, "发送信息")
            io.to(d.number).emit('roomgetmsg', d.form);

        });
        socket.on("get_room", (d) => {
            //console.log("有新的房间创建",d)
            socket.emit("emit_room", d)
        });

        socket.on("newRoom" , (d) =>{
            //console.log("收到新房间信息",d)
            //console.log("socket",socket)
            io.emit("newRoom",d);
        });


    });

}