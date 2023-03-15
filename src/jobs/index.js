const express = require("express");
const router = express()
const { postData, getData } = require("./controller")

router.post("/", postData)
router.get("/", getData)

module.exports = router
