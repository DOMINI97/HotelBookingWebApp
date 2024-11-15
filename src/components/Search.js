import React, { useState } from "react";
import { searchBookings } from "../services/bookingService.js";
import Button from "./Button"; // Import your Button component

const Search = ({ onResults }) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");
  const [adults, setAdults] = useState(1); // Default to 1 adult
  const [children, setChildren] = useState(0); // Default to no children
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility
  const [popupMessage, setPopupMessage] = useState(""); // State to set the popup message
  const [isChildrenHovered, setIsChildrenHovered] = useState(false); // State to track hover on children dropdown

  const handleSearch = async (e) => {
    e.preventDefault();

    // Validate if all fields are filled
    if (!location || !checkIn || !checkOut || !roomType) {
      setPopupMessage("Please fill in all fields before submitting.");
      setIsPopupOpen(true); // Show the popup if validation fails
      return;
    }

    const criteria = {
      location,
      checkIn,
      checkOut,
      roomType,
      adults,
      children,
    };

    try {
      const results = await searchBookings(criteria);
      onResults(results);
    } catch (error) {
      console.error("Search failed", error);
    }
  };

  // Close the popup when the user clicks on the Close button
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupMessage(""); // Reset the message
  };

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6'>
      <h2 className='text-3xl font-semibold text-gray-800 mb-6 text-center'>
        Find Your Perfect Stay
      </h2>
      <form onSubmit={handleSearch} className='space-y-6'>
        {/* Location Input */}
        <div className='flex flex-col md:flex-row md:space-x-4'>
          <label
            className='text-gray-700 font-medium mb-2 md:w-1/4'
            htmlFor='location'>
            Location:
          </label>
          <input
            id='location'
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter city or hotel'
          />
        </div>

        {/* Check-In Input */}
        <div className='flex flex-col md:flex-row md:space-x-4'>
          <label
            className='text-gray-700 font-medium mb-2 md:w-1/4'
            htmlFor='checkIn'>
            Check-In Date:
          </label>
          <input
            id='checkIn'
            type='date'
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className='flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Check-Out Input */}
        <div className='flex flex-col md:flex-row md:space-x-4'>
          <label
            className='text-gray-700 font-medium mb-2 md:w-1/4'
            htmlFor='checkOut'>
            Check-Out Date:
          </label>
          <input
            id='checkOut'
            type='date'
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className='flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Room Type Select */}
        <div className='flex flex-col md:flex-row md:space-x-4'>
          <label
            className='text-gray-700 font-medium mb-2 md:w-1/4'
            htmlFor='roomType'>
            Room Type:
          </label>
          <select
            id='roomType'
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className='flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option value=''>Select a type</option>
            <option value='single'>Single</option>
            <option value='double'>Double</option>
            <option value='suite'>Suite</option>
          </select>
        </div>

        {/* Adults and Children Select */}
        <div className='flex flex-col md:flex-row md:space-x-4'>
          {/* Adults Selection */}
          <div className='flex flex-col md:w-1/4'>
            <label className='text-gray-700 font-medium mb-2' htmlFor='adults'>
              Adults:
            </label>
            <select
              id='adults'
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className='px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Children Selection */}
          <div className='flex flex-col md:w-1/4 relative'>
            <label
              className='text-gray-700 font-medium mb-2'
              htmlFor='children'>
              Children:
            </label>
            <select
              id='children'
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className='px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              onMouseEnter={() => setIsChildrenHovered(true)}
              onMouseLeave={() => setIsChildrenHovered(false)}>
              {[...Array(5)].map((_, i) => (
                <option key={i} value={i}>
                  {i} Children
                </option>
              ))}
            </select>
            {/* Tooltip for Children's age limit */}
            {isChildrenHovered && (
              <div className='absolute left-0 top-full mt-2 bg-gray-800 text-white text-xs rounded-md px-2 py-1'>
                Age limit: 6 to 13 years old
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className='text-center'>
          <Button
            type='search'
            onClick={handleSearch} // Pass the handleSearch function to Button
            className='w-full md:w-auto' // Ensure the button is full-width on small screens and auto-width on larger screens
          />
        </div>
      </form>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg max-w-sm mx-auto'>
            <h3 className='text-xl text-red-600 font-semibold mb-4'>Warning</h3>
            <p className='text-gray-700'>{popupMessage}</p>
            <div className='mt-4 flex justify-center'>
              <button
                className='bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700'
                onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
