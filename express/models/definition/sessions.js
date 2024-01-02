const {Model,DataTypes} = require("sequelize");
const sequelize =require("../../bin/dbConnection")
class Sessions extends Model{}

Sessions.init({
    sessionId:{
        primaryKey:true,
        type:DataTypes.STRING(60),
    },
    token:{
        allowNull:false,
        type:DataTypes.STRING(1000),  
    },
},
{
    sequelize,
    modelName:"sessions"
});

module.exports= Sessions;