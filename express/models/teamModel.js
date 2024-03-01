const { query } = require("express");
const {models} = require("./index")

module.exports={
    createTeam: async(body,teamId)=>{
        try {
            // console.log("mod",body)
            const team=await models.Teams.create({
                teamId,
                ...body
            });
            return{
                response:team,
              
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
    getAllTeams: async(query)=>{
        try {
            const result=[];
            // get team data
            const team=await models.Teams.findAll({
                where:{
                    instructorId:query.instructorId
                }
            });
            // loop for get data 
            for (const item of team){
                // get project data
                             const project=await models.Projects.findOne({
                               where:{
                                    projectId:item.dataValues.projectId
                                   }
                             })
                            // get leader data
                            const user=await models.Users.findOne({
                                where:{
                                     userId:item.dataValues.leader
                                    }
                              })
                              // get member data
                            const member1=await models.Users.findOne({
                                where:{
                                        userId:item.dataValues.team1
                                       },
                                    //    {
                                    //     userId:item.dataValues.team2
                                    //    },
                                    //    {
                                    //     userId:item.dataValues.team3
                                    //    },
                                    //    {
                                    //     userId:item.dataValues.team4
                                    //    },

                              })
                              const member2=await models.Users.findOne({
                                where:{
                                        userId:item.dataValues.team2
                                       },
                              })
                              const member3=await models.Users.findOne({
                                where:{
                                        userId:item.dataValues.team3
                                       },
                              })
                              const member4=await models.Users.findOne({
                                where:{
                                        userId:item.dataValues.team4
                                       },
                              })
                            //  console.log("MEMBER",member)
                             result.push({
                                team:item.dataValues,
                                project:project.dataValues,
                                user:user.dataValues,
                                member1:member1.dataValues,
                                member2:member2.dataValues,
                                member3:member3.dataValues,
                                member4:member4.dataValues,
                             })
                            };

                            // for (const item of result){
                            //     // console.log("Test",item.dataValues.projectId)



                            //                  const user=await models.Users.findOne({
                            //                    where:{
                            //                         userId:item.team.leader
                            //                        }
                            //                  })
                            //                  data.push({
                            //                     user:user.dataValues
                            //                  })


                            //                 // console.log("item===",item.team.leader)
                            //                 }
// console.log("DATA",result)
// console.log("DATA===============",data)

            return{
                response:result,
              
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
    updateTeam: async(body)=>{
        try {
            console.log("mod++++++++++++++++",body)
            const team=await models.Teams.update({...body},{
                where:{
                    teamId:body.teamId
                }
            });
            return{
                response:team,
              
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
    deletTeam: async(query)=>{
        try {
            const team=await models.Teams.destroy({
                where:{
                    teamId:query.teamId
                }
            });
           return{
                response:team,
              
            }
        } catch (error) {
            return{
                error:error
            };
        }
    },
}