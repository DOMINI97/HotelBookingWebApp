import React, { useState } from "react";

const HotelForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, location, description });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-4 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6'>
      <input
        type='text'
        placeholder='Hotel Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='w-full border p-2'
      />
      <input
        type='text'
        placeholder='Location'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className='w-full border p-2'
      />
      <textarea
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='w-full border p-2'
      />
      <button
        type='submit'
        className='bg-blue-600 text-white py-2 px-4 rounded'>
        Register Hotel
      </button>
    </form>
  );
};

export default HotelForm;
