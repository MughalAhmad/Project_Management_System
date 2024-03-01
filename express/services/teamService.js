const teamModel = require("../models/teamModel");
const { v4: uuidV4 } = require("uuid");
module.exports = {
    createTeam:async(body) => {
        try {
            // console.log("ser   ",body)
            const teamId=uuidV4();
      const team = await teamModel.createTeam(body,teamId);
      if (team.error) {
        return {
          error:team.error,
        };
      }
return {
        response: team.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllTeams:async(query) => {
    try {
        // console.log("ser   ",body)
  const team = await teamModel.getAllTeams(query);
  if (team.error) {
    return {
      error:team.error,
    };
  }
return {
    response: team.response,
  };
} catch (error) {
  return {
    error: error,
  };
}
},
updateTeam:async(body) => {
  try {
      // console.log("ser   ",body)
const team = await teamModel.updateTeam(body);
if (team.error) {
  return {
    error:team.error,
  };
}
return {
  response: team.response,
};
} catch (error) {
return {
  error: error,
};
}
},
deletTeam:async(query) => {
  try {
      // console.log("ser   ",body)
const team = await teamModel.deletTeam(query);
if (team.error) {
  return {
    error:team.error,
  };
}
return {
  response: team.response,
};
} catch (error) {
return {
  error: error,
};
}
},
};