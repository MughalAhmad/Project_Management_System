const {models} = require("./index")

module.exports={
    login: async(body)=>{
        try {
            // console.log("mod",body)

            const user=await models.Users.findOne({
                where:{
                    email:body.email
                },
                attributes:{
                    exclude:["createdAt","updatedAt","deletedAt"]
                }
            })
            // console.log("mod res",body)
            return{
                response:user,
              
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
    logout:()=>{
        try {
            return{
                res:"your logged out",
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
    signup:(body)=>{
        try {
            console.log("m1",body)
            return{
                res: body,
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
    resetPass:()=>{
        try {
            return{
                res:"your Reset pass",
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
    forgetPass:()=>{
        try {
            return{
                res:"your forget pass",
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
}