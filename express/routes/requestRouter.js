const requestController = require("../controllers/requestController");

const router = require("express").Router();

router.get("/getAllRequest",requestController.getAllRequest);
router.put("/approvedRequest",requestController.approvedRequest);




module.exports=router;