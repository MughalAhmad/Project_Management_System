const {models} = require("./index")
const { Op } = require("sequelize");

module.exports={
    createTask: async(body,taskId)=>{
        try {
            // console.log("mod",body)
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
            console.log("model ++++++",query)
            const result=[];
            const task=await models.Tasks.findAll({
                where:{
                        instructorId:query.instructorId
                    },
                // attributes:["title"]
            });

            for (const item of task){
// console.log("Test",item.dataValues.projectId)
             const project=await models.Projects.findOne({
               where:{
                    projectId:item.dataValues.projectId
                   }
             })
            //  console.log("PROJECT",project.dataValues)
             result.push({
                task:item.dataValues,
                project:project.dataValues
             })
            }
console.log("RESULT",result)
            // const project=await models.Projects.findAll({
            //     where:[
            //         {
            //             instructorId:query.instructorId
            //         },
            //         // {
            //         //     projectId:task.dataValue.projectId
            //         // }
            //     ]
            // })


// console.log(task)
            return{
                response:result,
              
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
    updateTask: async(body) => {
        try {
        //   console.log("userId",body)
         const task = await models.Tasks.update({...body,},{
          where:{
            taskId:body.taskId,
          },
         });
         return{
          response:task
         }
        } catch (error) {
          return {
            error: error,
          };
        }
      },
      deleteProject: async(query)=>{
        try {
            console.log("MOd",query.taskId)
            const task=await models.Tasks.destroy({
                where:{
                    taskId:query.taskId
                },
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
}