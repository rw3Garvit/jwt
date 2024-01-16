const express = require("express");
const { userController } = require("../controllers");
const route = express.Router();

route.post("/register", userController.registerUser);
route.post("/login", userController.loginUser);
route.get("/profile", userController.getProfile);

module.exports = route;
