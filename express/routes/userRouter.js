const userController = require("../controllers/userController");
const router = require("express").Router();
const {trainee,instructor} = require("../middleware");

router.post("/create" ,userController.createUser);
router.get("/getAllUsers",userController.getAllUsers);
router.put("/blockUser",userController.blockUser);
router.put("/unblockUser",userController.unblockUser);

router.delete("/deleteUser",userController.deleteUser);
router.get("/getAllInstructors", userController.getAllInstructors);
router.post("/onBoarding", userController.onBoarding);
router.put("/updateUser",userController.updataUser);
router.get("/getInstructorTrainees",userController.getInstructorTrainees);
router.get("/getInstructorBlockTrainees",userController.getInstructorBlockTrainees);

router.post("/createTrainee",userController.createTrainee);

router.get("/getTrainees",userController.getTrainees);
router.get("/getUsers",userController.getUsers);
router.get("/getPendingTrainee",userController.getPendingTrainee);
router.get("/getResolveTrainee",userController.getResolveTrainee);
router.get("/getAssigned",userController.getAssigned);

router.get("/getUserById",userController.getUserById);




module.exports=router;