const {Model,DataTypes} = require("sequelize");
const sequelize =require("../../bin/dbConnection")
class Users extends Model{}

Users.init({
    userId:{
        primaryKey:true,
        type:DataTypes.STRING(60),
    },
    firstName:{
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING(60),
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    role: {
        type: DataTypes.STRING(),
        allowNull: false,
        defaultValue: "trainee",
      },
      isRequested: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isApproved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isBlocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
},{
    sequelize,
    timestamps:true,
    paranoid:true,
    modelName:"users"
});

module.exports= Users;