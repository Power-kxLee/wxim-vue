const newim = require("../lib/IM.js");
const IM = newim.IM;
const imMsgLog = newim.IMRecord;
const Q = require("q");
module.exports = {
    create(data, success, error) {
        let user = null;
        let sendObj = {
            code: 401
        }
        this.queryRoom({ "number": data.number }, (person) => {
            //console.log("查询是否有冲突房间号",person)
            if (!!person) {
                sendObj.code = 404;
                sendObj.mark = "这个房号被人抢注了,赶紧换一个吧";
                return success(sendObj);
            }

            //成功 把数据写入数据库
            cIM = new IM(data);
            //执行回调
            cIM.save((err, res) => {
                if (err) {
                    return error(err);
                } else {
                    sendObj.mark = "房间创建成功";
                    sendObj.homedata = res;
                    return success(sendObj);
                }

            });

        }, (err) => {
            error(err);
        });

    },
    /**
     * [queryRoom 查询创建过的房间]
     * @param  {[Object]}   obj     [需要查询的对象]
     * @param  {[function]} success [查询成功回调函数]
     * @param  {[function]} error   [查询失败回调函数]
     */
    queryRoom(obj, success, error) {
        IM.findOne(obj, (err, person) => {
            if (err) { //失败
                return error(err);
            }
            success(person);
        });
    },
    /**
     * [queryAllRoom 查询所有房间]
     * @param  {[type]} success [description]
     * @param  {[type]} error   [description]
     * @return {[type]}         [description]
     */
    queryAllRoom(success, error) {
        let roomarry = [];
        let defer = Q.defer();
        IM.find((err, person) => {
            console.log("进来啦查询所有房间",person)
            if (err) {
                defer.reject(err, "查询第一步错误");
                return defer.promise;;
            }
            if(person.length < 1){
                defer.resolve([]);
                return defer.promise;
            }
            person.forEach((elem, i) => {
                this.queryRoomMsgLog({
                    "number": elem.number
                }).then(data => {

                    //如果查询到房间
                    if (data) {
                        let lastmsg = data.msgarry;
                        console.log("lastmsg",data   )
                        elem.roomnewmsg = [];
                        elem.roomnewmsg.push(lastmsg[lastmsg.length - 1]);
                        console.log("lastmsg.length",lastmsg.length)
                        elem.room_length = lastmsg.length;

                        elem.save((err, res) => {
                            if (err) {
                                defer.reject(err, "查询第二步错误");
                            }else{

                                let newobj = {}
                                for (let i = 0; i < person.length; i++) {
                                    person[i].room_length = person[i].room_length || 0;
                                    newobj[person[i].number] = person[i];
                                }
                                defer.resolve(newobj);
                            }
                        });
                    } else {
                        let newobj = {}
                        for (let i = 0; i < person.length; i++) {
                            person[i].room_length = person[i].room_length || 0;
                            newobj[person[i].number] = person[i];
                        }
                        defer.resolve(newobj);
                    }
                }).catch(err => {
                    defer.reject(err, "查询第三步错误");
                    return defer.promise;
                });
            });


            //console.log("所有房间",person)

        });
        return defer.promise;
    },
    /**
     * [queryRoomMsgLog 查询指定房间的聊天记录]
     * @param  {[type]} success [description]
     * @param  {[type]} error   [description]
     * @return {[type]}         [description]
     */
    queryRoomMsgLog(obj) {
        let defer = Q.defer();
        imMsgLog.findOne(obj, (err, person) => {
            if (err) { //失败
                defer.reject(err);
            }
            defer.resolve(person);

        });
        return defer.promise;
    },
    /**
     * [createMsgLog 创建房间,并保存聊天记录]
     * @param  {[type]} form    [数据data]
     * @param  {[type]} success [成功回调函数]
     * @param  {[type]} error   [失败回调函数]
     */
    createMsgLog(form, success, error) {
        //	console.log("form",form)
        let code = 401;
        let mark = "";
        if (!form.number) {
            code = 404;
            mark = "房号都没有,查个毛线啊"
            return error({ code, mark })
        }
        this.queryRoomMsgLog({
            "number": form.number
        }).then(data => {
            let
                form_post_obj = {
                    date: form.date,
                    useremail: form.useremail,
                    username: form.username,
                    message: form.message,
                    identity: form.identity
                },
                createdata = {
                    number: form.number,
                    msgarry: [form_post_obj]
                };


            //没有查询到就创建一个
            if (!data) {
                clog = new imMsgLog(createdata);
                clog.save((err, sus) => {
                    if (err) {
                        return error(err);
                    }
                    success({ code, successdata: sus })
                });

            } else {
                //存在房间,直接进行数据更新
                if (data.number == form.number) {
                    imMsgLog.findById(data._id, (err, user) => {
                        user.msgarry.push(form_post_obj);
                        user.save((err, res) => {
                            if (err) {
                                return error(err);
                            };
                            success({ code, res });

                        });
                    });

                }

            }

        }).catch(err => {
            error(err);
        });


    },
    /**
     * [queryAllMsg 查询当前房间的所有数据]
     * @return {[type]} [description]
     */
    queryAllMsg(form, success, error) {
        let code = 401;
        let mark = "";
        if (!form.number) {
            code = 404;
            mark = "房号都没有,查个毛线啊"
            return error({ code, mark })
        }
        this.queryRoomMsgLog({
            "number": form.number
        }).then(data => {
            success(data);
        }).catch(err => {
            error(err);
        })

    },
    recordLength(form) {
        let defer = Q.defer(),
            roomlength = newim.roomlength;
        //先查询这个表
        console.log({ user_email: form.useremail });
        roomlength.findOne({ user_email: form.useremail }, (err, person) => {
            let if_push = true;
            if (err) {
                defer.reject(err, "查询出错误");
                return defer.promise;
            }
            //不存在就创建
            if (!person) {
                let r_l = new roomlength({
                    user_email: form.useremail,
                    room_array: [{
                        room_number: form.number,
                        room_record_length: form.length
                    }]
                });
                r_l.save((err, sus) => {
                    if (err) {
                        defer.reject(err, "创建表失败");
                    }
                    defer.resolve(sus)
                });
            } else {
                let room_array = person.room_array;
                for (let i = 0; i < room_array.length; i++) {
                    if (room_array[i].room_number == form.number) {
                        room_array[i].room_record_length = form.length;
                        if_push = false;
                        break;
                    }

                }
                if (if_push) {

                    room_array.push({
                        room_number: form.number,
                        room_record_length: form.length
                    });
                }
                person.save((err, res) => {
                    if (err) {
                        defer.reject(err, "更新数据出错");
                    }

                    defer.resolve(res);
                });

            }

        });

        return defer.promise;
    },
    getroomlength(form) {
        let defer = Q.defer();
            roomlength = newim.roomlength;
        //console.log("form",form)
        roomlength.findOne({ user_email: form.useremail }, (err, person) => {
           // console.log("err, person",err, person )
            if (err) {
                console.log("出错啦")
                defer.reject(err, "查询出错");
            }
            if (!person) {
                let r_l = new roomlength({
                    user_email: form.useremail,
                    room_array: form.in_room_msg
                });
                r_l.save((err, sus) => {
                    if (err) {
                        defer.reject(err, "创建表失败");
                    }
                    defer.resolve(sus)
                });
            }else{

               // console.log("查询到用户", form.useremail, "的数据", person)
                defer.resolve(person);
            }
           
        });
        return defer.promise;

    }
}