const {models} = require("./index")
const { Op } = require("sequelize");

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
            console.log("mod",query)
             const project=await models.Projects.findAll({
                where:[
                    {
                        instructorId:query.instructorId
                      },{
                        ...(query.title ? {title:{[Op.substring]:query.title}}:true),
                      },{
                        ...(query.status ? {status:{[Op.substring]:query.status}}:true),
                      }

                ]
             });
            //  console.log("h1",project.dataValues)

            return{
                response:project,
              
            }
            console.log("h2")

        } catch (error) {
            return{
                error:error
            };
        }
    },
    updateProject: async(body) => {
        try {
          console.log("userId",body)
         const project = await models.Projects.update({...body,},{
          where:{
            projectId:body.projectId,
          },
         });
         return{
          response:project
         }
        } catch (error) {
          return {
            error: error,
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
    deleteProject: async(query)=>{
        try {
            // console.log("mod",query)
             const project=await models.Projects.destroy({
                where:{
                    projectId:query.projectId
                }
             });
            //  console.log("h1",project.dataValues)

            return{
                response:project,
              
            }
            console.log("h2")

        } catch (error) {
            return{
                error:error
            };
        }
    },
    getProject: async(query)=>{
        try {
            console.log("mod",query)
             const project=await models.Projects.findOne({
                where:[
                    {
                        instructorId:query.instructorId
                      },
                      {
                        projectId:query.projectId
                      },
                ]
             });
            //  console.log("h1",project.dataValues)

            return{
                response:project,
              
            }
            console.log("h2")

        } catch (error) {
            return{
                error:error
            };
        }
    },
    getProjectWithNoInstructorId: async(query)=>{
        try {
            console.log("mod",query)
             const project=await models.Projects.findOne({
                where:{
                        projectId:query.projectId
                      },
             });
            //  console.log("h1",project.dataValues)

            return{
                response:project,
              
            }
            console.log("h2")

        } catch (error) {
            return{
                error:error
            };
        }
    },
    getUpdatedProjects: async(query)=>{
        try {
            console.log("mod",query)
             const project=await models.Projects.findAll({
                
                where:[
                    {
                        instructorId:query.instructorId
                      }
                ]
             });
            //  console.log("h1",project.dataValues)

            return{
                response:project,
              
            }
            console.log("h2")

        } catch (error) {
            return{
                error:error
            };
        }
    },
}