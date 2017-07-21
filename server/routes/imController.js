const Myim = require("../models/myim");

module.exports = (app) => {
    /**
     * [创建房间号]
     * @param  {[type]} "/createim" [请求接口]
     * @return {[type]}             [创建成功后返回当前房间的数据]
     */
    app.post("/createim", (req, res) => {
        const bodydata = req.body;
        let deploy = {
            code: 401
        }
        ////console.log("bodydata", bodydata)
        try {
            if (bodydata.title.length < 1) {

                throw "房间号没填写";

            }
            if (!bodydata.creator) {

                throw "非正常用户";
            }
        } catch (err) {
            deploy.code = 404;
            deploy.mark = err;
            return res.send(deploy);
        }
        let imdata = {
            number: bodydata.number,
            title: bodydata.title,
            creator: bodydata.creator,
            date: bodydata.date,
            heat: bodydata.heat
        }
        Myim.create(imdata, (data) => {
            if (data.code != 401) {
                deploy.code = 404;
            }
            deploy.roomdata = data;
            res.send(deploy);
        }, (err) => {
            sendmessage
            deploy.code = 404;
            deploy.errdata = err;
            res.send(deploy);
        })

    });
    /**
     * [查找所有房间数据]
     * @param  {[type]} "/getroomim" [请求的接口]
     * @return {[type]}              [返回房间列表数据]
     */
    app.post("/getroomim", (req, res) => {
        let deploy = {
            code: 401
        }

        Myim.queryAllRoom().then(data => {
            //////console.log("最后返回的数据",data)
            if (data.length < 1) {
                deploy.code = 403;
                deploy.mark = "数据库没有查到数据啦";
                return res.send(deploy);
            }
            deploy.imlistarry = data;
            res.send(deploy);

        }).catch(err => {
            ////console.log("查询所有房间出错了", err);
            deploy.code = 404;
            deploy.mark = "直接报错啦";
            deploy.errdata = err;
            res.send(deploy);
        });
    });
    /**
     * [获取房间的聊天信息,并存入数据库]
     * @param  {[type]} "/im/sendmessage" [请求接口]
     * @return {[type]}                   [返回所有聊天信息]
     */
    app.post("/im/sendmessage", (req, res) => {
        //////console.log("req.body",req.body)
        let
            number = req.body.number,
            date = req.body.date,
            useremail = req.body.useremail,
            username = req.body.username,
            message = req.body.message,
            identity = req.body.identity,
            if_ready = req.body.if_ready,
            immsg = {
                number,
                date,
                useremail,
                username,
                message,
                if_ready
            };
        Myim.createMsgLog(immsg, sus => {
            res.send(sus);
        }, error => {
            res.send(error)
        });
    });
    app.post("/im/queryallmsg", (req, res) => {


        Myim.queryAllMsg({ number: req.body.number }, sus => {
            res.send(sus);
        }, err => {
            res.send(err)
        });
    });

    app.post("/im/recordlength", (req, res) => {
        Myim.recordLength(req.body).then(data => {
            res.send(data);
        }).catch(err => {

            res.send(err);
        });
    });
    

    app.post("/im/getroomlength", (req, res) => {
        Myim.getroomlength(req.body).then(data => {
            ////console.log("请求成功", data)
            res.send(data);
        }).catch(err => {
            ////console.log(err, "出错了")
            res.send(err);
        });
    });



}