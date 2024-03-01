const {Model,DataTypes} = require("sequelize");
const sequelize =require("../../bin/dbConnection")
class Tasks extends Model{}

Tasks.init({
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
instructorId:{
    allowNull:false,
    type:DataTypes.STRING(60),
}, 
states:{
    allowNull:false,
    type:DataTypes.STRING(60),
defaultValue:"pending"
}
},
{
    sequelize,
    timestamps:true,
    paranoid:false, 
    modelName:"tasks"
});

module.exports= Tasks;