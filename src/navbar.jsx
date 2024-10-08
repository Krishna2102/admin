import React from 'react'

function navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-red-800 text-white p-4 flex justify-between items-center ps-20">
        <img src="C:\Users\2023a\Documents\profile\blood-drop-plus-heart-shape-600nw-2238094877-Photoroom.png" alt="" srcset="" />
        <div className="text-2xl font-semibold">BLOOD SATHI</div>
        
        <div className="hidden md:flex space-x-6 ml-96 font-semibold">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
          <a href="#donate" className="hover:text-gray-200">Donate</a>
          <a href="#about" className="hover:text-gray-200">About Us</a>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            
            placeholder="Search..."
            className="w-72 px-8 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          {/* Profile Picture */}
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full w-10 h-10 ml-8"
          />
        </div>
        <div>
          <button className="px-4 py-2 rounded-xl hover:bg-red-700">Log In/Sign Out</button>
        </div>
         {/* Search Bar */}
         
      
      </nav>
    </div>
  )
}

export default navbar
