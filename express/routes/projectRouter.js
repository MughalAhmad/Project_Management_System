const projectController = require("../controllers/projectController");

const router = require("express").Router();

router.post("/createProject",projectController.createProject);
router.get("/getAllProjects",projectController.getAllProjects);
router.put("/updateProject",projectController.updateProject);
router.delete("/deleteProject",projectController.deleteProject);
router.get("/getProject",projectController.getProject);
router.get("/getUpdatedProjects",projectController.getUpdatedProjects);
router.get("/getProjectWithNoInstructorId",projectController.getProjectWithNoInstructorId);





module.exports=router;