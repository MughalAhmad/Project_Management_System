const teamController = require("../controllers/teamController");

const router = require("express").Router();

router.post("/createTeam",teamController.createTeam);
router.get("/getAllTeams",teamController.getAllTeams);
router.put("/updateTeam",teamController.updateTeam);
router.delete("/deletTeam",teamController.deletTeam);





module.exports=router;