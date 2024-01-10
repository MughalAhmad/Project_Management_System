const projectService = require("../services/projectSevice");
const joi =require("joi");

const createProjectSchema = joi.object().keys({
    title: joi.string().alphanum().min(3).max(30).required(),
    description: joi.string().alphanum().min(3).max(1000).required(),
    instructorId: joi.string().required(),

});
module.exports = {
    createProject: async (req,res)=>{
        try {
            const createProjectValidate = await createProjectSchema.validateAsync(req.body);
            // console.log("cont   ",createProjectValidate)
            const project = await projectService.createProject(createProjectValidate);
            if(project.error){
               return  res.send({
                    error:project.error,
                });
            }
            // res.cookie("auth",user.response , {
            //     maxAge: 60 * 60 * 1000,
            //   })
            //   res.cookie("userId",user.user.userId , {
            //     maxAge: 60 * 60 * 1000,
            //   })
            return res.send({
                response:project.response,
                // userData:user.user,
            });
        } catch (error) {
            return res.send({
                error:error,
            })
        }
    },
    getAllProjects: async(req,res)=>{
        try {
            console.log("cont   ",req.query)
            const project = await projectService.getAllProjects(req.query);
            if(project.error){
               return  res.send({
                    error:project.error,
                });
            }
            return res.send({
                response:project.response,
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