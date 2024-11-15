const express = require("express");
const { searchBookings } = require("../controllers/bookingController.js");

const {
  createBooking,
  getBookings,
} = require("../controllers/bookingController.js");

const router = express.Router();
router.post("/", createBooking);
router.get("/", getBookings);
router.get("/search", searchBookings);

module.exports = router;
