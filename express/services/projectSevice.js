const projectModel = require("../models/projectModel");
const { v4: uuidV4 } = require("uuid");
module.exports = {
    createProject:async(body) => {
        try {
            console.log("ser   ",body)
            const projectId=uuidV4();
      const project = await projectModel.createProject(body,projectId);
      if (project.error) {
        return {
          error:project.error,
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
        response: project.response,
        // user:user.response.dataValues,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllProjects: async(query)=>{
    try {
        console.log("ser   ",query)
        const project = await projectModel.getAllProjects(query);
        if(project.error){
           return {
                error:project.error,
            }
        }
        console.log("ser++=2",project.response.dataValues)
       
        return{
            response:project.response
        }
    } catch (error) {
        return{
            error:error,
        }
    }
},
updateProject:async (body) => {
  try {
    console.log("ser",body)
    // const isUser = await userModel.getUserById(body.userId);
    // if(!isUser.response||isUser.error){
    //     return{
    //         error:"user does not exist", 
    //     }
    // };
   const project=await projectModel.updateProject(body);
   if(project.error){
    return{
      error:project.error
    }
   };
   return{
    response:project.response
   }
  } catch (error) {
    return {
      error: error,
    };
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
  deleteProject: async(query)=>{
    try {
        // console.log("ser   ",query)
        const project = await projectModel.deleteProject(query);
        if(project.error){
           return {
                error:project.error,
            }
        }
        // console.log("ser++=2",project.response)
       
        return{
            response:project.response
        }
    } catch (error) {
        return{
            error:error,
        }
    }
},
getProject: async(query)=>{
  try {
      console.log("ser   ",query)
      const project = await projectModel.getProject(query);
      if(project.error){
         return {
              error:project.error,
          }
      }
      console.log("ser++=2",project.response.dataValues)
     
      return{
          response:project.response
      }
  } catch (error) {
      return{
          error:error,
      }
  }
},
getProjectWithNoInstructorId: async(query)=>{
  try {
      console.log("ser   ",query)
      const project = await projectModel.getProjectWithNoInstructorId(query);
      if(project.error){
         return {
              error:project.error,
          }
      }
      console.log("ser++=2",project.response.dataValues)
     
      return{
          response:project.response
      }
  } catch (error) {
      return{
          error:error,
      }
  }
},
getUpdatedProjects: async(query)=>{
  try {
      console.log("ser   ",query)
      const project = await projectModel.getUpdatedProjects(query);
      if(project.error){
         return {
              error:project.error,
          }
      }
      console.log("ser++=2",project.response.dataValues)
     
      return{
          response:project.response
      }
  } catch (error) {
      return{
          error:error,
      }
  }
},
};