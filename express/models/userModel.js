const { Op } = require("sequelize");
const { models } = require("./index");
module.exports = {
createUser: async (body,userId)=>{
try {
  console.log("body",body)
  const user = await models.Users.create({
    userId,
    ...body
  });
  return{
    response:user
  };
} catch (error) {
  return{
    error:error
  }
}
},
getUserByEmail: async (email)=>{
  try {
    const user = await models.Users.findOne({
      where:{
        email:email
      }
  });
    return{
      response:user
    };
  } catch (error) {
    return{
      error:error
    }
  }
  },
  getAllInstructors: async () => {
    try {
      const user = await models.Users.findAll({
        where: {
          role: "instructor",
        },
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
        },
      });

      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  createTrainee: async (body,userId)=>{
    try {
      console.log("model ",body)
      const user = await models.Users.create({
        userId,
        ...body
      });
      return{
        response:user
      };
    } catch (error) {
      return{
        error:error
      }
    }
    },
  onBoarding: async (userId, instructorId) => {
    try {
      const user = await models.Users.update(
        {
          isRequested: true,
          instructorId,
        },
        {
          where: {
            userId: userId,
          },
        }
      );

      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllUsers: async(offset,query) => {
    try {
      // console.log("m1",offset);
      // console.log("m2",query)

     const users = await models.Users.findAll({
      attributes:{
        exclude:["password", "createdAt", "updatedAt", "deletedAt"],
      },
      where:[
        {
          ...(query.firstName ? {firstName:{[Op.substring]:query.firstName}}:true),
        },{
          ...(query.lastName ? {lastName:{[Op.substring]:query.lastName}}:true),
        },{
          ...(query.email ? {email:{[Op.substring]:query.email}}:true),
        },{
          ...(query.role ? {role:{[Op.in]:[query.role]}}:true),
        }
      ],
      // order: [[query.sortValue, query.sortOrder]],
      offset:offset,
      limit:query.limit,
     
     });
     return{
      response:users,
     }
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getInstructorTrainees: async(query) => {
    try {
      const users = await models.Users.findAll({
        where:[
          {
            instructorId:query.instructorId,
          },
          {
            isApproved:true
          }
        ],
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
        },
      });
     return{
      response:users,
     }
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  blockUser: () => {
    try {
      return {
        res: "User Block",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteUser: async (userId) => {
    try {
     const user =await models.Users.destroy({
      where:{
        userId:userId
      }
     })
     return{
      response:user
     }
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  updataUser: async(body) => {
    try {
      console.log("userId",body.userId)
     const user = await models.Users.update({...body,},{
      where:{
        userId:body.userId,
      },
     });
     return{
      response:user
     }
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
