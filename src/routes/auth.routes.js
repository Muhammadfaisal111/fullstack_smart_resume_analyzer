const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();

// this is just for routing purpose, the actual logic will be in the controller
//api/auth/register
authRouter.post("/register", authController.registerController);
//api/auth/login
authRouter.post("/login", authController.loginController);
//api/auth/logout
authRouter.get("/logout", authController.logoutController);

module.exports = authRouter;
