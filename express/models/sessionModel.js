const { models } = require("./index");
module.exports = {
createSession: async (sessionId,token,userId)=>{
try {
  const session = await models.Sessions.create({
    sessionId,
    token,
    userId,
  });
  if(session.error){
    return {
        error:session.error,
    }
}
  return{
    response:session
  };
} catch (error) {
  return{
    error:error
  }
}
},
getSession: async (userId)=>{
  try {
    const session = await models.Sessions.findOne({
      where:{
        userId:userId
      }
  });
  // console.log("Get Session",session)
    return{
      response:session
    };
  } catch (error) {
    return{
      error:error
    }
  }
  },
  getSessionToken: async (userId,token)=>{
    try {
      const session = await models.Sessions.findOne({
        where:{
          userId:userId,
          token:token
        }
    });
    
    if(session.error){
      return { 
          error:session.error
      }
  }
      return{
        response:session
      };
    } catch (error) {
      return{
        error:error
      }
    }
    },
  deleteSession: async (userId) => {
    try {
     const session =await models.Sessions.destroy({
      where:{
        userId:userId
      }
     });
     if(session.error){
      return {
          error:error
      }
  }
     return{
      response:session
     }
    } catch (error) {
      return {
        error: error,
      };
    }
  }
};
