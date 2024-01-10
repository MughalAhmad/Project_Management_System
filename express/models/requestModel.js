const {models} = require("./index")

module.exports={
    getAllRequest: async(query)=>{
        try {
             const request=await models.Users.findAll({
                where:[
                    {
                        instructorId:query.instructorId,
                    },
                    {
                        isApproved:false,
                    }
                ]
             });
            return{
                response:request,
              
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
    approvedRequest: async (body) => {
        try {
          const request = await models.Users.update(
            {
              isApproved: true,
            },
            {
              where: {
                userId: body.userId,
              },
            }
          );
    
          return {
            response: request,
          };
        } catch (error) {
          return {
            error: error,
          };
        }
      },
    
}