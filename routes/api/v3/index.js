const express = require("express");
const router = express.Router();
//routes for admin , authentication , student , teacher
router.use("/app", require("./app"));


module.exports = router;