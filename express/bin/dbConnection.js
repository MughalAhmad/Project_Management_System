const config = require("../config.json");
const {Sequelize} = require("sequelize");


const dataBase = new Sequelize(config.db);

dataBase.authenticate().then(()=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log("Database Connection.js error", error);

});


module.exports = dataBase;