const requestModel = require("../models/requestModel");
const { v4: uuidV4 } = require("uuid");
module.exports = {
    getAllRequest: async(query)=>{
    try {
        console.log("ser   ",query)
        const request = await requestModel.getAllRequest(query);
        if(request.error){
           return {
                error:request.error,
            };
        }
        return{
            response:request.response,
        };
    } catch (error) {
        return{
            error:error,
        }
    }
},
approvedRequest: async (body) => {
    try {
      const request = await requestModel.approvedRequest(body);
      if (!request.response || request.error) {
        return {
          error: "user does not exist",
        };
      }

      return {
        response: request.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};