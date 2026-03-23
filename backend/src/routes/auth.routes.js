const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const authRouter = express.Router();

// this is just for routing purpose, the actual logic will be in the controller
//api/auth/register
authRouter.post("/register", authController.registerController);
//api/auth/login
authRouter.post("/login", authController.loginController);
//api/auth/logout
authRouter.get("/logout", authController.logoutController);
//this is for getting the user details of the logged in user, basically i want to blacklist the token when user logs out, so that even if the token is valid, it will not be accepted by the server
//api/auth/get-me
authRouter.get("/get-me", authMiddleware, authController.getMeController);

module.exports = authRouter;
