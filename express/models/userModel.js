const { Op } = require("sequelize");
const { models } = require("./index");
const Users = require("./definition/users");
module.exports = {
createUser: async (body,userId)=>{
try {
  console.log("mod",body)
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
getUserById: async (userId)=>{
  try {
    const user = await models.Users.findOne({
      where:{
        userId:userId
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
  getUsers: async(query) => {
    try {
      // console.log("m1",offset);
      // console.log("m2",query)

     const users = await models.Users.findOne({
      attributes:{
        exclude:["password", "createdAt", "updatedAt", "deletedAt"],
      },
      where:{
userId:query.userId
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
  getInstructorTrainees: async(query) => {
    try {
      const users = await models.Users.findAll({
        where:[
          {
            instructorId:query.instructorId,
          },
          {
            isApproved:true,
            isBlocked:false
          },
          {
            ...(query.firstName ? {firstName:{[Op.substring]:query.firstName}}:true),
          },{
            ...(query.lastName ? {lastName:{[Op.substring]:query.lastName}}:true),
          },{
            ...(query.email ? {email:{[Op.substring]:query.email}}:true),
          },{
            ...(query.stack ? {stack:{[Op.substring]:query.stack}}:true),
          },{
            ...(query.assignment ? {assignment:{[Op.substring]:query.assignment}}:true),
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
  getInstructorBlockTrainees: async(query) => {
    try {
      const users = await models.Users.findAll({
        where:[
          {
            instructorId:query.instructorId,
          },
          {
            isBlocked:true
          },{
            ...(query.firstName ? {firstName:{[Op.substring]:query.firstName}}:true),
          },{
            ...(query.lastName ? {lastName:{[Op.substring]:query.lastName}}:true),
          },{
            ...(query.email ? {email:{[Op.substring]:query.email}}:true),
          },{
            ...(query.stack ? {stack:{[Op.substring]:query.stack}}:true),
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
  blockUser: async (userId) => {
    try {
      const user = await models.Users.update({
        isBlocked : true,
      },{
        where:{
          userId:userId,
        },
      }
      )
      return {
        res: "User Blocked",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  unblockUser: async (userId) => {
    try {
      const user = await models.Users.update({
        isBlocked : false,
      },{
        where:{
          userId:userId,
        },
      }
      )
      return {
        res: "User Blocked",
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
      console.log("userId",body)
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
  getTrainees: async(query) => {
    try {
      const users = await models.Users.findAll({
        where:
          {
            userId:query.userId,
          }
        ,
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
  getPendingTrainee: async(query) => {
    try {
      // console.log("m1",offset);
      // console.log("m2",query)

     const users = await models.Users.findAll({
      attributes:{
        exclude:["password", "createdAt", "updatedAt", "deletedAt"],
      },
      where:{
userId:query.userId
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
  getResolveTrainee: async(query) => {
    try {
      // console.log("m1",offset);
      // console.log("m2",query)

     const users = await models.Users.findOne({
      attributes:{
        exclude:["password", "createdAt", "updatedAt", "deletedAt"],
      },
      where:{
userId:query.userId
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
  getAssigned: async(query) => {
    try {
      console.log("m1",query);
      // console.log("m2",query)

     const users = await models.Users.findAll({
      attributes:{
        exclude:["password", "createdAt", "updatedAt", "deletedAt"],
      },
      where:[
        {
          instructorId:query.instructorId
                },
        {
          assignment:query.assignment
                },
      ]
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
};
