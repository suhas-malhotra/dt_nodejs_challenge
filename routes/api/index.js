const express = require("express");
const router = express.Router();
//routes for admin , authentication , student , teacher
router.use("/v3", require("./v3"));


module.exports = router;