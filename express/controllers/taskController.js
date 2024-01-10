const taskService = require("../services/taskSevice");
const joi =require("joi");

const createTaskSchema = joi.object().keys({
    title: joi.string().alphanum().min(3).max(30).required(),
    description: joi.string().alphanum().min(3).max(1000).required(),
    projectId: joi.string().required(),
    instructorId: joi.string().required(),

});
module.exports = {
    createTask: async (req,res)=>{
        try {
            const createTaskValidate = await createTaskSchema.validateAsync(req.body);
            // console.log("cont   ",createProjectValidate)
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
            console.log("cont   ",req.query)
            const task = await taskService.getAllTasks(req.query);
            if(task.error){
               return  res.send({
                    error:task.error,
                });
            }
            return res.send({
                response:task.response,
            });
        } catch (error) {
            return res.send({
                error:error,
            })
        }
    },
    signup:async(req,res)=>{
        try {
            const signupValidate = await signupSchema.validateAsync(req.body);

            const signupResponse = await authService.signup(signupValidate);
            // console.log("c1",signupResponse);
            if(signupResponse.error){
                res.send({
                    error:signupResponse.error,
                });
            }
            res.send({
                res:signupResponse.res,
            });
        } catch (error) {
            res.send({
                error:error
            })
        }
    },
    
}