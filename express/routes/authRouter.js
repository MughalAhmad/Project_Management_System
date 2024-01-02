const authController = require("../controllers/authController");

const router = require("express").Router();

router.post("/login",authController.login);
router.post("/logout",authController.logout);
router.post("/signup",authController.signup);
router.get("/resetPass",authController.resetPass);
router.get("/forgetPass",authController.forgetPass);


module.exports=router;