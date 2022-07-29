const express = require("express");
const router = express.Router();
//routes for admin , authentication , student , teacher
router.use("/api", require("./api"));


module.exports = router;