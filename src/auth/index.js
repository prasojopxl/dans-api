const express = require("express");
const { validateUser } = require("../../middlewares/validate");
const router = express()
const { postData, deleteData, loginData } = require("./controller")
const { body, validationResult } = require('express-validator');
const verifyToken = require("../../middlewares/verify-token");




router.post("/register", postData)
router.delete("/:id", verifyToken, deleteData)
router.post("/login", validateUser, loginData)

module.exports = router
