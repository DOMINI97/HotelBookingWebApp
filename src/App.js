import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer
import Home from "./pages/Home"; // Your Home page
import Booking from "./pages/Booking"; // Booking page example
import About from "./pages/About"; // About page example
import Contact from "./pages/Contact"; // Contact page example
import RegisterHotel from "./pages/RegisterHotel/index.js";
import SearchHotels from "./pages/SearchHotels";

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        {/* Header: Appears on all pages */}
        <Header />

        {/* Main Content */}
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/register-hotel' element={<RegisterHotel />} />
            <Route path='/search-hotels' element={<SearchHotels />} />
            {/* Add other routes as necessary */}
          </Routes>
        </main>

        {/* Footer: Appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
