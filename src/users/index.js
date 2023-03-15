const express = require("express");
const router = express()
const { getData, postData, getDataID, putData, deleteData } = require("./controller")

router.post("/", postData)
router.get("/", getData)
router.get("/:id", getDataID)
router.put("/:id", putData)
router.delete("/:id", deleteData)

module.exports = router
