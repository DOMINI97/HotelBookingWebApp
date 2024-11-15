import React from "react";

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Main Content */}
      <main className='flex-grow bg-gray-100'>
        <section
          className='text-center bg-cover bg-center py-20 px-6'
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?hotel')",
          }}>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            Welcome to HotelBooking
          </h1>
          <p className='text-lg md:text-2xl text-white'>
            Discover your perfect stay with us
          </p>
          <button className='mt-8 px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700'>
            Book Now
          </button>
        </section>

        {/* Additional Content Sections */}
        <section className='max-w-5xl mx-auto py-10 px-6'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-6'>
            Explore Our Rooms
          </h2>
          <p className='text-gray-600 mb-4'>
            Choose from a variety of rooms to suit your style and comfort.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Room card 1 */}
            <div className='bg-white shadow-lg rounded-lg p-4'>
              <img
                src='https://source.unsplash.com/400x300/?hotel-room'
                alt='Room 1'
                className='rounded-t-lg w-full'
              />
              <h3 className='text-xl font-semibold mt-4'>Luxury Suite</h3>
              <p className='text-gray-600 mt-2'>
                Experience the best comfort with a luxurious suite.
              </p>
            </div>
            {/* Room card 2 */}
            <div className='bg-white shadow-lg rounded-lg p-4'>
              <img
                src='https://source.unsplash.com/400x300/?hotel-room2'
                alt='Room 2'
                className='rounded-t-lg w-full'
              />
              <h3 className='text-xl font-semibold mt-4'>Double Room</h3>
              <p className='text-gray-600 mt-2'>
                Perfect for families and groups.
              </p>
            </div>
            {/* Room card 3 */}
            <div className='bg-white shadow-lg rounded-lg p-4'>
              <img
                src='https://source.unsplash.com/400x300/?hotel-room3'
                alt='Room 3'
                className='rounded-t-lg w-full'
              />
              <h3 className='text-xl font-semibold mt-4'>Single Room</h3>
              <p className='text-gray-600 mt-2'>
                Cozy and comfortable for solo travelers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
