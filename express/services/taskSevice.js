const taskModel = require("../models/taskModel");
const { v4: uuidV4 } = require("uuid");
module.exports = {
    createTask:async(body) => {
        try {
            console.log("ser   ",body)
            const taskId=uuidV4();
      const task = await taskModel.createTask(body,taskId);
      if (task.error) {
        return {
          error:task.error,
        };
      }

    //   const login = await bcryptjs.compare(body.password,user.response.dataValues.password);
    //   if(!login){
    //     return{
    //       error:"Invalid Credentials"
    //     }
    //   }
    //   delete user.response.dataValues.password;
    //   const UserId =user.response.dataValues.userId;
      
    //   const sessionGet = await sessionModel.getSession(UserId);

    //   if(sessionGet.error){
    //     return{
    //       error:"invalid User get"
    //     }
    //   }

    //   const sessionDelete = await sessionModel.deleteSession(UserId);

    //   if(sessionDelete.error){
    //     return{
    //       error:error
    //     }
    //   }
    //   const token = jwt.sign(user.response.dataValues,config.jwt.secret,{
    //     expiresIn:"1h",
    //   })
// const sessionCreate = await sessionModel.createSession(sessionId,token,UserId);
// if(sessionCreate.error){
//   return{
//     error:error,
//   }
// }

// const SessionValue = sessionCreate;
// SessionValue.role = user.response.dataValues.role

return {
        response: task.response,
        // user:user.response.dataValues,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllTasks: async(query)=>{
    try {
        console.log("ser   ",query)
        const task = await taskModel.getAllTasks(query);
        if(task.error){
           return {
                error:task.error,
            };
        }
        return{
            response:task.response,
        };
    } catch (error) {
        return{
            error:error,
        }
    }
},
  signup: async (body) => {
    try {
      console.log("S1",body)
      delete body.repeat_password;
      console.log("S2",body)
     body.password = await bcryptjs.hash(body.password,10);
     console.log("S3",body)

      const   signupResponse =  authModel.signup(body);
      if (signupResponse.error) {
        return {
          error: signupResponse.error,
        };
      }
      return {
        res: signupResponse.res,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};