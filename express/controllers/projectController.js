const projectService = require("../services/projectSevice");
const joi =require("joi");

const createProjectSchema = joi.object().keys({
    title: joi.string().min(3).max(30).required(),
    description: joi.string().min(3).max(1000).required(),
    instructorId: joi.string().required(),

});
const updateProjectSchema = joi.object().keys({
    projectId: joi.string().required(),
    title: joi.string().required().min(3).max(40),
    description: joi.string().required().min(3).max(40),
    // email: joi.string().required().email(),
    // role: joi.string().valid("instructor", "trainee"),
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
                })
            };
            return res.send({
                response:project.response,
            });
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    updateProject: async(req,res)=>{
        try {
          console.log("con",req.body)
            const validateBody = await updateProjectSchema.validateAsync(req.body);
            const project = await projectService.updateProject(validateBody);
            if(project.error){
                return res.send({
                    error:project.error
                })
            }
            res.send({
                response:project.response
            })
        } catch (error) {
            return res.send({
                error:error
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
    deleteProject: async(req,res)=>{
        try {
            // console.log("cont   ",req.query)
            const project = await projectService.deleteProject(req.query);
            if(project.error){
               return  res.send({
                    error:project.error,
                })
            };
            return res.send({
                response:project.response,
            });
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    getProject: async(req,res)=>{
        try {
            console.log("cont   ",req.query)
            const project = await projectService.getProject(req.query);
            if(project.error){
               return  res.send({
                    error:project.error,
                })
            };
            return res.send({
                response:project.response,
            });
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    getProjectWithNoInstructorId: async(req,res)=>{
        try {
            console.log("cont   ",req.query)
            const project = await projectService.getProjectWithNoInstructorId(req.query);
            if(project.error){
               return  res.send({
                    error:project.error,
                })
            };
            return res.send({
                response:project.response,
            });
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    getUpdatedProjects: async(req,res)=>{
        try {
            console.log("cont   ",req.query)
            const project = await projectService.getUpdatedProjects(req.query);
            if(project.error){
               return  res.send({
                    error:project.error,
                })
            };
            return res.send({
                response:project.response,
            });
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
}