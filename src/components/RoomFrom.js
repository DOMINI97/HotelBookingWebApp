import React, { useState } from "react";

const RoomForm = ({ onSubmit }) => {
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ roomType, price, availability });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input
        type='text'
        placeholder='Room Type'
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
        className='w-full border p-2'
      />
      <input
        type='number'
        placeholder='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className='w-full border p-2'
      />
      <label>
        Availability:
        <input
          type='checkbox'
          checked={availability}
          onChange={(e) => setAvailability(e.target.checked)}
          className='ml-2'
        />
      </label>
      <button
        type='submit'
        className='bg-green-600 text-white py-2 px-4 rounded'>
        Add Room
      </button>
    </form>
  );
};

export default RoomForm;
