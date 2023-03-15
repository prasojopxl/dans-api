const express = require("express");
const router = express()
const { postData, getData, getDataID, filterData } = require("./controller")

router.post("/", postData)
router.get("/", getData)
router.get("/search", filterData)
router.get("/:id", getDataID)

module.exports = router
