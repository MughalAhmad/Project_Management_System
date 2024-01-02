const {Model,DataTypes} = require("sequelize");
const sequelize =require("../../bin/dbConnection")
class Projects extends Model{}

Projects.init({
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
    modelName:"projects"
});

module.exports= Projects;