const {models} = require("./index")

module.exports={
    createProject: async(body,projectId)=>{
        try {
            console.log("mod",body)
            const project=await models.Projects.create({
                projectId,
                ...body
            });
            return{
                response:project,
              
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
    getAllProjects: async(query)=>{
        try {
             const project=await models.Projects.findAll({
                where:{
                    instructorId:query.instructorId
                }
             });
            return{
                response:project,
              
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