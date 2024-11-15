import React from "react";
import Search from "../components/Search";

const SearchHotels = () => {
  const handleSearchResults = (criteria) => {
    // Logic to fetch search results from backend API based on criteria
    console.log("Searching for hotels with criteria:", criteria);
  };

  return (
    <div className='p-8 max-w-lg mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>Search for Hotels</h2>
      <Search onSearch={handleSearchResults} />
    </div>
  );
};

export default SearchHotels;
