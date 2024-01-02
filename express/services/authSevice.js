const authModel = require("../models/authModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config.json");
const sessionModel = require("../models/sessionModel");
const { v4: uuidV4 } = require("uuid");
module.exports = {
  login:async(body) => {
    try {

      const user = await authModel.login(body);
      if (user.error || !user.response) {
        return {
          error: "Invalid Credentials",
        };
      }

      const login = await bcryptjs.compare(body.password,user.response.dataValues.password);
      if(!login){
        return{
          error:"Invalid Credentials"
        }
      }
      delete user.response.dataValues.password;
      const UserId =user.response.dataValues.userId;
      
      const sessionGet = await sessionModel.getSession(UserId);

      if(sessionGet.error){
        return{
          error:"invalid User get"
        }
      }

      const sessionDelete = await sessionModel.deleteSession(UserId);

      if(sessionDelete.error){
        return{
          error:error
        }
      }
      const token = jwt.sign(user.response.dataValues,config.jwt.secret,{
        expiresIn:"1h",
      })
      const sessionId=uuidV4();
const sessionCreate = await sessionModel.createSession(sessionId,token,UserId);
if(sessionCreate.error){
  return{
    error:error,
  }
}

return {
        response: token,
        user:user.response.dataValues
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  logout: (body) => {
    try {
      const val = body.num % 2;
      console.log("val", val);

      if (val == 0) {
        var dat = "Even";
        console.log("Even");
      } else {
        var dat = "Odd";
        console.log("Odd");
      }
      const logoutResponse = authModel.logout();
      if (logoutResponse.error) {
        return {
          error: logoutResponse.error,
        };
      }
      return {
        res: logoutResponse.res,
        val: body.num,
        result: dat,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  signup: async (body) => {
    try {
      console.log("S1",body)
      delete body.repeat_password;
      console.log("S2",body)
     body.password = await bcryptjs.hash(body.password,10);
     console.log("S3",body)

      const   signupResponse =  authModel.signup(body);
      if (signupResponse.error) {
        return {
          error: signupResponse.error,
        };
      }
      return {
        res: signupResponse.res,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  resetPass: () => {
    try {
      const resetPassResponse = authModel.resetPass();
      if (resetPassResponse.error) {
        return {
          error: resetPassResponse.error,
        };
      }
      return {
        res: resetPassResponse.res,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  forgetPass: () => {
    try {
      const forgetPassResponse = authModel.forgetPass();
      if (forgetPassResponse.error) {
        return {
          error: forgetPassResponse.error,
        };
      }
      return {
        res: forgetPassResponse.res,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
