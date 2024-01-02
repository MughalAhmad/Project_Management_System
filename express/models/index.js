const sequelize=require("../bin/dbConnection");
const Users = require("./definition/users");
const Projects = require("./definition/projects");
const Tasks = require("./definition/tasks");
const TeamMembers = require("./definition/teamMembers");
const Teams = require("./definition/teams");
const Sessions = require("./definition/sessions");



const models={Users,Projects,Tasks,TeamMembers,Teams,Sessions};

// relations

// team-project one-to-one
Teams.hasOne(Projects , {foreignKey:"TeamId"});
Projects.belongsTo(Teams , {foreignKey:"TeamId"});

// user-session one-to-one
Users.hasOne(Sessions , {foreignKey:"UserId"});
Sessions.belongsTo(Users , {foreignKey:"UserId"});

// project-task one-to-many
Projects.hasMany(Tasks , {foreignKey:"ProjectId"});
Tasks.belongsTo(Projects , {foreignKey:"ProjectId"});

// teamMember-user one-to-many
TeamMembers.hasMany(Users , {foreignKey:"TeamMembersId"});
Users.belongsTo(TeamMembers , {foreignKey:"TeamMembersId"});

// teamMember-teams one-to-many
Teams.hasMany(TeamMembers , {foreignKey:"TeamsId"});
TeamMembers.belongsTo(Teams , {foreignKey:"TeamsId"});

// users-teams one-to-many (user as a instructor)
Users.hasMany(Teams , {foreignKey:"UserId"});
Teams.belongsTo(Users , {foreignKey:"UserId"});

Users.hasMany(Users, {
    foreignKey: "instructorId",
    useJunctionTable: false,
  });

const db={};

db.sequelize=sequelize; 
sequelize.models=models;


module.exports={db , models};