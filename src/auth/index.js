const express = require("express");
const router = express()
const { postData, putData, deleteData, loginData } = require("./controller")

router.post("/register", postData)
router.put("/:id", putData)
router.delete("/:id", deleteData)
router.post("/login", loginData)

module.exports = router
