const taskController = require("../controllers/taskController");

const router = require("express").Router();

router.post("/createTask",taskController.createTask);
router.get("/getAllTasks",taskController.getAllTasks);
router.put("/updateTask",taskController.updateTask);
router.delete("/deleteProject",taskController.deleteProject);




module.exports=router;