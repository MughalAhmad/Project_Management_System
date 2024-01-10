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
Teams.hasOne(Projects , {foreignKey:"teamId"});
Projects.belongsTo(Teams , {foreignKey:"teamId"});

// user-session one-to-one
Users.hasOne(Sessions , {foreignKey:"userId"});
Sessions.belongsTo(Users , {foreignKey:"userId"});

// project-task one-to-many
Projects.hasMany(Tasks , {foreignKey:"projectId"});
Tasks.belongsTo(Projects , {foreignKey:"projectId"});

// teamMember-user one-to-many
TeamMembers.hasMany(Users , {foreignKey:"teamMembersId"});
Users.belongsTo(TeamMembers , {foreignKey:"teamMembersId"});

// teamMember-teams one-to-many
Teams.hasMany(TeamMembers , {foreignKey:"teamsId"});
TeamMembers.belongsTo(Teams , {foreignKey:"teamsId"});

// users-teams one-to-many (user as a instructor)
Users.hasMany(Teams , {foreignKey:"userId"});
Teams.belongsTo(Users , {foreignKey:"userId"});

Users.hasMany(Users, { 
    foreignKey: "instructorId",
    useJunctionTable: false,
  });
  // Projects.hasMany(Projects, { 
  //   foreignKey: "instructorId",
  //   useJunctionTable: false,
  // });

const db={};

db.sequelize=sequelize; 
sequelize.models=models;


module.exports={db , models};