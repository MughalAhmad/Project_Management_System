const userService = require("../services/userService");
const joi = require("joi");

const createUserSchema = joi.object().keys({
    firstName: joi.string().required().min(3).max(40),
    lastName: joi.string().required().min(3).max(40),
    email: joi.string().required().email(),
    password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    confirmPassword: joi.ref("password"),
    role: joi.string().valid("instructor", "trainee"),
  });
  const createTraineeSchema = joi.object().keys({
    firstName: joi.string().required().min(3).max(40),
    lastName: joi.string().required().min(3).max(40),
    email: joi.string().required().email(),
    password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    role: joi.string(),
  });
  const paginationSchema = joi.object().keys({
    pageNo: joi.number().required().greater(0),
    limit: joi.number().valid(5, 10),
//     sortValue: joi
//     .string()
//     .valid("userId", "email", "role", "firstName", "lastName"),
//   sortOrder: joi.valid("ASC", "DESC"),
  email:joi.string().email(),
  firstName:joi.string(),
  lastName:joi.string(),
  role:joi.string(),

  });
  const getByUserIdSchema = joi.object().keys({
    userId: joi.string().required(),
  });
  const updateUserSchema = joi.object().keys({
    userId: joi.string().required(),
    firstName: joi.string().required().min(3).max(40),
    lastName: joi.string().required().min(3).max(40),
    email: joi.string().required().email(),
    role: joi.string().valid("instructor", "trainee"),
  });
  const onBoardingSchema = joi
  .object()
  .keys({
    userId: joi.string().required(),
    instructorId: joi.string().required(),
  })
  .unknown([false]);

module.exports ={
    createUser: async (req,res)=>{
        try {
            const validate = await createUserSchema.validateAsync(req.body);
            const user = await userService.createUser(validate);
            if(user.error){
                return res.send({
                    error:user.error
                })
            };
            res.send({
                response:user.response 
            })
          
        } catch (error) {
            return res.send({
                error:error 
            })
        }
        },
    getAllUsers: async (req,res)=>{
        try {
            const validate = await paginationSchema.validateAsync(req.query);
           const users = await userService.getAllUsers(validate);
           if(users.error){
           return res.send({
                error:users.error
            })
           };
           res.send({
            response:users.response
           })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    getInstructorTrainees: async (req,res)=>{
      try {
         const users = await userService.getInstructorTrainees(req.query);
         if(users.error){
         return res.send({
              error:users.error
          })
         };
         res.send({
          response:users.response
         })
      } catch (error) {
          return res.send({
              error:error
          })
      }
  },
  createTrainee: async (req,res)=>{
    try {
      console.log("contro",req.body)
        const validate = await createTraineeSchema.validateAsync(req.body);
        const user = await userService.createTrainee(validate);
        if(user.error){
            return res.send({
                error:user.error
            })
        };
        res.send({
            response:user.response 
        })
      
    } catch (error) {
        return res.send({
            error:error 
        })
    }
    },
    getAllInstructors: async (req, res) => {
        try {
          const user = await userService.getAllInstructors();
          if (user.error) {
            return res.send({
              error: user.error,
            });
          }
          return res.send({
            response: user.response,
          });
        } catch (error) {
          return res.send({
            error: error,
          });
        }
      },
      onBoarding: async (req, res) => {
        try {
            console.log("controller" ,req.body)
          const validate = await onBoardingSchema.validateAsync(req.body);
          const user = await userService.onBoarding(validate);
          if (user.error) {
            return res.send({
              error: user.error,
            });
          }
          return res.send({
            response: user.response,
          });
        } catch (error) {
          return res.send({
            error: error,
          });
        }
      },
    blockUser:(req,res)=>{
        try {
            const blockUserResponse = userService.blockUser();
            if(blockUserResponse.error){
               return res.send({
                    error:blockUserResponse.error,
                });
            }
            res.send({
                res:blockUserResponse.res,
            });
        } catch (error) {
            res.send({
                error:error
            })
        }
    },
    deleteUser: async(req,res)=>{
        try {
            const validate =await getByUserIdSchema.validateAsync(req.query);
            const user = await userService.deleteUser(validate);

            if(user.error){
                return res.send({
                    error:user.error
                })
            };

            res.send({
                response:user.response
            })
           
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    updataUser: async(req,res)=>{
        try {
            const validateBody = await updateUserSchema.validateAsync(req.body);
            const user = await userService.updataUser(validateBody);
            if(user.error){
                return res.send({
                    error:user.error
                })
            }
            res.send({
                response:user.response
            })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    }
}