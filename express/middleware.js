const jwt = require("jsonwebtoken");
const config = require("./config.json");
const sessionModels = require('./models/sessionModel');
module.exports={
    trainee: async(req,res,next)=>{
        try {
            const token = req.cookies.auth;
            if(!token || token == undefined){
                return res.send({
                    error:"unauthorized User",
                });
            }
            jwt.verify(token,config.jwt.secret,async (error,user)=>{
                const session =  await sessionModels.getSessionToken(user.userId,token);
                if(session.error || !session.response){
                    return res.send({
                        error:"already logged in "
                    })
                }
                if(error){
                    return res.send({
                        error:error,
                    });
                }
                if(user.role !== "trainee"){
                    return res.send({
                        error:"unauthorized User",
                    });
                }
                next();
            });

            // return res.send({
            //     response:token,
            // })

        } catch (error) {
            return res.send({
                error:"unauthorized User",
            })
        }
    },
    instructor: async(req,res,next)=>{
        try {
            console.log("heloooooo")
            const token = req.cookies.userId
            console.log("auth",token)
            // if(!token || token == undefined){
            //     return res.send({
            //         error:"unauthorized User111111111",
            //     });
            // }
            // jwt.verify(token,config.jwt.secret,async (error,user)=>{
            //     const session =  await sessionModels.getSessionToken(user.userId,token);
            //     if(session.error || !session.response){
            //         return res.send({
            //             error:"already logged in "
            //         })
            //     }
            //     if(error){
            //         return res.send({
            //             error:error,
            //         });
            //     }

                

            //     if(user.role !== "instructor"){
            //         return res.send({
            //             error:"unauthorized User",
            //         });
            //     }
            //     next();
            // });

            // return res.send({
            //     response:token,
            // })

        } catch (error) {
            return res.send({
                error:"unauthorized User",
            })
        }
    }
}