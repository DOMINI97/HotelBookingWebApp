import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button"; // Import your Button component

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='bg-gray-800 text-white px-4 py-3 flex justify-between items-center relative'>
      {/* Logo */}
      <div className='text-2xl font-bold'>
        <Link to='/'>HotelBooking</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className='md:hidden cursor-pointer'
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-controls='mobile-menu'>
        <span className='block w-6 h-0.5 bg-white mb-1'></span>
        <span className='block w-6 h-0.5 bg-white mb-1'></span>
        <span className='block w-6 h-0.5 bg-white'></span>
      </div>

      {/* Navigation Links */}
      <nav
        id='mobile-menu'
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex space-x-6 text-lg flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}>
        <Link
          to='/'
          className='hover:text-gray-400'
          onClick={() => setIsMobileMenuOpen(false)}>
          Home
        </Link>
        <Link
          to='/booking'
          className='hover:text-gray-400'
          onClick={() => setIsMobileMenuOpen(false)}>
          Book a Room
        </Link>
        <Link
          to='/about'
          className='hover:text-gray-400'
          onClick={() => setIsMobileMenuOpen(false)}>
          About Us
        </Link>
        <Link
          to='/contact'
          className='hover:text-gray-400'
          onClick={() => setIsMobileMenuOpen(false)}>
          Contact
        </Link>

        <Link to='/register-hotel' className='hover:text-gray-400'>
          Register Hotel
        </Link>
        <Link to='/search-hotels' className='hover:text-gray-400'>
          Search Hotels
        </Link>

        {/* Optional Buttons */}
        <div className='md:hidden mt-4 space-y-4'>
          <Button type='login' onClick={() => console.log("Searching...")} />
          <Button type='signup' onClick={() => console.log("Booking...")} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
