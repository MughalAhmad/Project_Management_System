const projectController = require("../controllers/projectController");

const router = require("express").Router();

router.post("/createProject",projectController.createProject);
router.get("/getAllProjects",projectController.getAllProjects);



module.exports=router;