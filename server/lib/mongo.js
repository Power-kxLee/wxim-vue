import server from "../../server_data";

let mongoose = require('mongoose');
let DB_URL = 'mongodb://'+server.db_number+':'+server.db_password+"@"+server.db_url+'/'+server.db_name;

/**
 * 连接
 */
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL,{useMongoClient: true});

/**
 * 连接成功
 */
mongoose.connection.on('connected', function() {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;