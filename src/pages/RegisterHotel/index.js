import React from "react";
import HotelForm from "../../components/HotelFrom";

const RegisterHotel = () => {
  const handleHotelSubmit = (hotelData) => {
    // Logic to send hotelData to backend API
    console.log("Hotel registered:", hotelData);
  };

  return (
    <div className='p-8 max-w-lg mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>Register Your Hotel</h2>
      <HotelForm onSubmit={handleHotelSubmit} />
    </div>
  );
};

export default RegisterHotel;
