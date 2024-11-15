import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const searchBookings = async (criteria) => {
  try {
    const response = await axios.get(`${API_URL}/bookings/search`, {
      params: criteria,
    });
    return response.data;
  } catch (error) {
    console.error("Error searching bookings", error);
    throw error;
  }
};
