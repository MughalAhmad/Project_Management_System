const taskModel = require("../models/taskModel");
const { v4: uuidV4 } = require("uuid");
module.exports = {
    createTask:async(body) => {
        try {
            // console.log("ser   ",body)
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
        // console.log("ser   ",query)
        const task = await taskModel.getAllTasks(query);
        if(task.error){
           return {
                error:task.error,
            };
        }
        // console.log("ser1   ",task.response.dataValuess)
  // const projectName= await taskModel.getProjectName(task.response.dataValues.projectId);
        // console.log("ser1   ",projectName.response)

  // if(projectName.error){
  //   return {
  //     error:projectName.error,
  // };
  // }

        return{
            response:task.response,
            // proName:projectName.response

        };
    } catch (error) {
        return{
            error:error,
        }
    }
},
  updateTask:async (body) => {
    try {
      // console.log("ser",body)
      // const isUser = await userModel.getUserById(body.userId);
      // if(!isUser.response||isUser.error){
      //     return{
      //         error:"user does not exist", 
      //     }
      // };
     const task=await taskModel.updateTask(body);
     if(task.error){
      return{
        error:task.error
      }
     };
     return{
      response:task.response
     }
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteProject: async(query)=>{
    try {
        // console.log("ser   ",query)
        const task = await taskModel.deleteProject(query);
        if(task.error){
           return {
                error:task.error,
            };
        }

        return{
            response:task.response,
            // proName:projectName.response

        };
    } catch (error) {
        return{
            error:error,
        }
    }
},
};