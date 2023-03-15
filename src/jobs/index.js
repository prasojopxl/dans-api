const express = require("express");
const router = express()
const { postData, getData, getDataID } = require("./controller")

router.post("/", postData)
router.get("/", getData)
router.get("/:id", getDataID)

module.exports = router
