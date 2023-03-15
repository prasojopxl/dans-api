const express = require("express");
const { validateUser } = require("../../middlewares/validate");
const router = express()
const { postData, putData, deleteData, loginData } = require("./controller")
const { body, validationResult } = require('express-validator');




router.post("/register", postData)
router.put("/:id", putData)
router.delete("/:id", deleteData)
router.post("/login", validateUser, loginData)

module.exports = router
