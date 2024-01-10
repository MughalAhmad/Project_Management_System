const userController = require("../controllers/userController");
const router = require("express").Router();
const {trainee,instructor} = require("../middleware");

router.post("/create",userController.createUser);
router.get("/getAllUsers",userController.getAllUsers);
router.get("/blockUser",userController.blockUser);
router.delete("/deleteUser",userController.deleteUser);
router.get("/getAllInstructors", userController.getAllInstructors);
router.post("/onBoarding", userController.onBoarding);
router.put("/updateUser",userController.updataUser);
router.get("/getInstructorTrainees",userController.getInstructorTrainees);
router.post("/createTrainee",userController.createTrainee);




module.exports=router;