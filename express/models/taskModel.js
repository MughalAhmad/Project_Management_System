const {models} = require("./index")

module.exports={
    createTask: async(body,taskId)=>{
        try {
            console.log("mod",body)
            const task=await models.Tasks.create({
                taskId,
                ...body
            });
            return{
                response:task,
              
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
    getAllTasks: async(query)=>{
        try {
             const task=await models.Tasks.findAll({
                where:{
                    instructorId:query.instructorId
                }
             });
            return{
                response:task,
              
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
    
}