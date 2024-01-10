const taskController = require("../controllers/taskController");

const router = require("express").Router();

router.post("/createTask",taskController.createTask);
router.get("/getAllTasks",taskController.getAllTasks);




module.exports=router;