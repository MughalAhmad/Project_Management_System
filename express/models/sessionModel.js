const { models } = require("./index");
module.exports = {
createSession: async (sessionId,token,UserId)=>{
try {
  const session = await models.Sessions.create({
    sessionId,
    token,
    UserId,
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
getSession: async (UserId)=>{
  try {
    const session = await models.Sessions.findOne({
      where:{
        UserId:UserId
      }
  });
  console.log("Get Session",session)
    return{
      response:session
    };
  } catch (error) {
    return{
      error:error
    }
  }
  },
  getSessionToken: async (UserId,token)=>{
    try {
      const session = await models.Sessions.findOne({
        where:{
          UserId:UserId,
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
  deleteSession: async (UserId) => {
    try {
     const session =await models.Sessions.destroy({
      where:{
        UserId:UserId
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
