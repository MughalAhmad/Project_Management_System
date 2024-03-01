const taskService = require("../services/taskSevice");
const joi =require("joi");

const createTaskSchema = joi.object().keys({
    title: joi.string().required(),
    description: joi.string().required(),
    projectId: joi.string().required(),
    instructorId: joi.string().required(),
});
const updateTaskSchema = joi.object().keys({
    taskId: joi.string().required(),
    title: joi.string().required(),
    instructorId: joi.string().required(),
    description: joi.string().required(),
    projectId: joi.string().required(),
  });
module.exports = {
    createTask: async (req,res)=>{
        try {
            // console.log("controller ",req.body)
            const createTaskValidate = await createTaskSchema.validateAsync(req.body);
            const task = await taskService.createTask(createTaskValidate);
            if(task.error){
               return  res.send({
                    error:task.error,
                });
            }
            // res.cookie("auth",user.response , {
            //     maxAge: 60 * 60 * 1000,
            //   })
            //   res.cookie("userId",user.user.userId , {
            //     maxAge: 60 * 60 * 1000,
            //   })
            return res.send({
                response:task.response,
                // userData:user.user,
            });
        } catch (error) {
            return res.send({
                error:error,
            })
        }
    },
    getAllTasks: async(req,res)=>{
        try {
            // console.log("cont   ",req.query)
            const task = await taskService.getAllTasks(req.query);
            if(task.error){
               return  res.send({
                    error:task.error,
                });
            }
            // console.log("colllllllllllllllllllllllllllllllll",task.response)
            // console.log("colllllllllllllcccccccccccc",task.proName)

            return res.send({
                response:task.response,
            });
        } catch (error) {
            return res.send({
                error:error,
            })
        }
    },
    updateTask: async(req,res)=>{
        try {
        //   console.log("con",req.body)
            const validateBody = await updateTaskSchema.validateAsync(req.body);
            const task = await taskService.updateTask(validateBody);
            if(task.error){
                return res.send({
                    error:task.error
                })
            }
            res.send({
                response:task.response
            })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    deleteProject: async(req,res)=>{
        try {
            console.log("cont   ",req.query)
            const task = await taskService.deleteProject(req.query);
            if(task.error){
               return  res.send({
                    error:task.error,
                });
            }
            // console.log("colllllllllllllllllllllllllllllllll",task.response)
            // console.log("colllllllllllllcccccccccccc",task.proName)

            return res.send({
                response:task.response,
            });
        } catch (error) {
            return res.send({
                error:error,
            })
        }
    },
    
}