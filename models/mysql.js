var Setting = require("./setting");
var Sequelize = require('sequelize');

var sequelize= new Sequelize(Setting.dataBase,Setting.user, Setting.password, {
    host: Setting.host,
    dialect: Setting.dialect,
    port:Setting.port
});

module.exports = sequelize;