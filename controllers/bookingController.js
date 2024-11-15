const Booking = require("../models/Booking");

exports.searchBookings = async (req, res) => {
  const { location, checkIn, checkOut, roomType } = req.query;
  const query = {};

  if (location) {
    query.location = new RegExp(location, "i"); // Case-insensitive search
  }
  if (checkIn && checkOut) {
    query.$and = [
      { startDate: { $gte: new Date(checkIn) } },
      { endDate: { $lte: new Date(checkOut) } },
    ];
  }
  if (roomType) {
    query.roomType = roomType;
  }

  try {
    const bookings = await Booking.find(query);
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error searching bookings" });
  }
};
