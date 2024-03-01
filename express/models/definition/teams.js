const {Model,DataTypes} = require("sequelize");
const sequelize =require("../../bin/dbConnection")
class Teams extends Model{}

Teams.init({
    teamId:{
        primaryKey:true,
        type:DataTypes.STRING(60),
    },
    leader:{
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    projectId:{
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    instructorId:{
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    team1:{
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    team2:{
        type:DataTypes.STRING(60),
    },
    team3:{
        type:DataTypes.STRING(60),
    },
    team4:{
        type:DataTypes.STRING(60),
    },
},{
    sequelize,
    timestamps:true,
    paranoid:true,
    modelName:"teams"
});

module.exports= Teams;