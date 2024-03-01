const teamService = require("../services/teamService");
const joi =require("joi");

const createTeamSchema = joi.object().keys({
    leader: joi.string().required(),
    projectId: joi.string().required(),
    instructorId: joi.string().required(),
    team1: joi.string().required(),
    team2: joi.string(),
    team3: joi.string(),
    team4: joi.string(),
});

module.exports = {
    createTeam: async (req,res)=>{
        try {
            // console.log("controller ",req.body)
            const createTeamValidate = await createTeamSchema.validateAsync(req.body);
            const team = await teamService.createTeam(createTeamValidate);
            if(team.error){
               return  res.send({
                    error:team.error,
                });
            }
            return res.send({
                response:team.response,
            });
        } catch (error) {
            return res.send({
                error:error,
            })
        }
    },
    getAllTeams: async (req,res)=>{
        try {
            // console.log("controller ",req.body)
            const team = await teamService.getAllTeams(req.query);
            if(team.error){
               return  res.send({
                    error:team.error,
                });
            }
            return res.send({
                response:team.response,
            });
        } catch (error) {
            return res.send({
                error:error,
            })
        }
    },
    updateTeam: async (req,res)=>{
        try {
            // console.log("controller ",req.body)
            // const createTeamValidate = await createTeamSchema.validateAsync(req.body);
            const team = await teamService.updateTeam(req.body);
            if(team.error){
               return  res.send({
                    error:team.error,
                });
            }
            return res.send({
                response:team.response,
            });
        } catch (error) {
            return res.send({
                error:error,
            })
        }
    },
    deletTeam: async (req,res)=>{
        try {
            // console.log("controller ",req.body)
            const team = await teamService.deletTeam(req.query);
            if(team.error){
               return  res.send({
                    error:team.error,
                });
            }
            return res.send({
                response:team.response,
            });
        } catch (error) {
            return res.send({
                error:error,
            })
        }
    },
}