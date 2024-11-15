import React, { useState } from "react";
import Search from "../components/Search";

const BookingPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Book Your Stay</h1>
      <Search onResults={handleSearchResults} />

      <div className='results'>
        {searchResults.length > 0 ? (
          searchResults.map((booking) => (
            <div key={booking._id} className='booking'>
              <h2>{booking.room.name}</h2>
              <p>{booking.location}</p>
              <p>
                {new Date(booking.startDate).toDateString()} -{" "}
                {new Date(booking.endDate).toDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
