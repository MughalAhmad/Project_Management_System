const userModel = require("../models/userModel");
const { v4: uuidV4 } = require("uuid");
const bcryptjs=require("bcryptjs");

module.exports = {
    createUser: async (body)=>{
        try {
            const userId = uuidV4();
            const isUser = await userModel.getUserByEmail(body.email);
            if(isUser.response||isUser.error){
                return{
                    error:"user with email already exists", 
                }
            };

            delete body.confirmPassword;
            body.password=await bcryptjs.hash(body.password,10);
            const user = await userModel.createUser(body,userId);
            if(user.error){
                return{
                    error:user.error 
                }
            }
            delete user.response.dataValues.password;
            return{
                response:user.response 
            }
          
        } catch (error) {
          return{
            error:error
          }
        }
        },
  getAllUsers:async (query) => {
    try {
        const offset = (query.pageNo - 1) * query.limit;
      const users = await userModel.getAllUsers( offset,query);
      if(users.error){
        return{
            error:users.error,
        }
      }
      return{
        response:users.response
      }
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getInstructorTrainees:async (query) => {
    try {
      const users = await userModel.getInstructorTrainees(query);
      if(users.error){
        return{
            error:users.error,
        }
      }
      return{
        response:users.response
      }
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  createTrainee: async (body)=>{
    try {
      console.log("ser",body)
        const userId = uuidV4();
        const isUser = await userModel.getUserByEmail(body.email);
        if(isUser.response||isUser.error){
            return{
                error:"user with email already exists", 
            }
        };

        delete body.confirmPassword;
        body.password=await bcryptjs.hash(body.password,10);
        const user = await userModel.createTrainee(body,userId);
        if(user.error){
            return{
                error:user.error 
            }
        }
        delete user.response.dataValues.password;
        return{
            response:user.response 
        }
      
    } catch (error) {
      return{
        error:error
      }
    }
    },
  blockUser: () => {
    try {
      const blockUserResponse = userModel.blockUser();
      if (blockUserResponse.error) {
        return {
          error: blockUserResponse.error,
        };
      }
      return {
        res: blockUserResponse.res,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteUser: async (query) => {
    try {
        const user = await userModel.deleteUser(query.userId);
        if(user.error){
            return{
                error:user.error
            }
        };
        return{
            response:user.response
        }
     
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllInstructors: async () => {
    try {
      const user = await userModel.getAllInstructors();
      if (!user.response || user.error) {
        return {
          error: "user does not exist",
        };
      }

      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  onBoarding: async (body) => {
    try {
      const user = await userModel.onBoarding(body.userId, body.instructorId);
      if (!user.response || user.error) {
        return {
          error: "user does not exist",
        };
      }

      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  updataUser:async (body) => {
    try {
      const isUser = await userModel.getUserByEmail(body.email);
      if(!isUser.response||isUser.error){
          return{
              error:"user does not exist", 
          }
      };
     const user=await userModel.updataUser(body);
     if(user.error){
      return{
        error:user.error
      }
     };
     return{
      response:user.response
     }
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
