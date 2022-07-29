const express = require("express");
const eventsAPI = require("../../../../controllers/v3/events/eventsApi");
const router = express.Router();

//Events API

// API
// get events
//API Working
router.get("/events", eventsAPI.getEvent);

// API
// inserting events in database
//API Working
router.post("/events", eventsAPI.insertEvent);

// API
// inserting events in database
//API Working
router.put("/events/:id", eventsAPI.insertEvent);

// API
// delete events in database
//API Working
router.delete("/events/:id", eventsAPI.deleteEvent);

module.exports = router;
