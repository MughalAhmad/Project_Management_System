const authService = require("../services/authSevice");
const joi =require("joi");


const loginSchema = joi.object().keys({
    email:joi.string().required().email(),
    password:joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});
const signupSchema = joi.object().keys({
    firstName: joi.string().alphanum().min(3).max(30).required(),
    lastName: joi.string().alphanum().min(3).max(30).required(),
    email:joi.string().required().email(),
    password:joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: joi.ref('password'),
});
module.exports = {
    login: async (req,res)=>{
        try {
            const loginValidate = await loginSchema.validateAsync(req.body);
            const user = await authService.login(loginValidate);
            if(user.error){
               return  res.send({
                    error:user.error,
                });
            }
            res.cookie("auth",user.response , {
                maxAge: 60 * 60 * 1000,
              })
            return res.send({
                response:user.response,
            });
        } catch (error) {
            return res.send({
                error:error,
            })
        }
    },
    logout:(req,res)=>{
        try {
            // console.log("req",req.body)
            const logoutResponse = authService.logout(req.body);
            if(logoutResponse.error){
                res.send({
                    error:logoutResponse.error,
                });
            }
            res.send({
                res:logoutResponse.res,
                val:logoutResponse.val,
                result:logoutResponse.result,
            });
        } catch (error) {
            res.send({
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
    resetPass:(req,res)=>{
        try {
            const resetPassResponse = authService.resetPass();
            if(resetPassResponse.error){
                res.send({
                    error:resetPassResponse.error,
                });
            }
            res.send({
                res:resetPassResponse.res,
            });
        } catch (error) {
            res.send({
                error:error
            })
        }
    },
    forgetPass:(req,res)=>{
        try {
            const forgetPassResponse = authService.forgetPass();
            if(forgetPassResponse.error){
                res.send({
                    error:forgetPassResponse.error,
                });
            }
            res.send({
                res:forgetPassResponse.res,
            });
        } catch (error) {
            res.send({
                error:error
            })
        }
    }
}