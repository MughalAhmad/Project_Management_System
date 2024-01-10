const requestService = require("../services/requestSevice");
const joi = require("joi");

const approvedRequestSchema = joi
.object()
.keys({
  userId: joi.string().required(),
})
.unknown([false]);
module.exports = {
    getAllRequest: async(req,res)=>{
        try {
            console.log("cont   ",req.query)
            const request = await requestService.getAllRequest(req.query);
            if(request.error){
               return  res.send({
                    error:request.error,
                });
            }
            return res.send({
                response:request.response,
            });
        } catch (error) {
            return res.send({
                error:error,
            })
        }
    },
    approvedRequest: async (req, res) => {
        try {
            console.log("controller" ,req.body)
          const validate = await approvedRequestSchema.validateAsync(req.body);
          const request = await requestService.approvedRequest(validate);
          if (request.error) {
            return res.send({
              error: request.error,
            });
          }
          return res.send({
            response: request.response,
          });
        } catch (error) {
          return res.send({
            error: error,
          });
        }
      },
    
}