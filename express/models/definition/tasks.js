const {Model,DataTypes} = require("sequelize");
const sequelize =require("../../bin/dbConnection")
class Teasks extends Model{}

Teasks.init({
    taskId:{
        primaryKey:true,
        type:DataTypes.STRING(60),
    },
    title:{
        allowNull:false,
        unique:true,
        type:DataTypes.STRING(60),  
    },
    description:{
        allowNull:false,
        type:DataTypes.STRING(60), 
        
},
},
{
    sequelize,
    timestamps:true,
    paranoid:true, 
    modelName:"teasks"
});

module.exports= Teasks;