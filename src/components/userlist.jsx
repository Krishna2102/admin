import React, { useState } from 'react';

function Userlist() {
  const notifications = [
    {
      time: 'A+',
      title: 'Ankur Punia',
      description: 'Start your day with a 30-minute exercise routine.',
    },
    {
      time: 'B-',
      title: 'Karishma Singh',
      description: 'Its time to refuel! Have a balanced lunch.',
    },
    {
      time: 'AB+',
      title: 'Charulata Singh',
      description: 'Drink a glass of water to stay hydrated.',
    },
    {
      time: 'O-',
      title: 'Nitesh Yadav',
      description: 'Take a 20-minute walk to unwind after work.',
    },
    {
      time: 'O+',
      title: 'Deep Saha',
      description: 'Take a 20-minute walk to unwind after work.',
    },
    {
      time: 'AB-',
      title: 'Ankush Kumar',
      description: 'Take a 20-minute walk to unwind after work.',
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of users to show per page

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Filter notifications based on search query
  const filteredNotifications = notifications.filter((notification) =>
    notification.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Reset pagination if search query changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when search changes
  };

  // Calculate the indices for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredNotifications.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);

  // Handle next and previous page click
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      <div className="flex sticky inset-x-0 -top-6 bg-gray-100 z-10 pt-3">
        <div className="text-2xl font-semibold mb-6">User's List</div>

        {/* Search Bar */}
        <div className="flex space-x-4 ml-auto text-black">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-72 h-10 px-16 py-2 rounded-lg text-black placeholder:text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Display users for current page */}
      {currentUsers.map((notification, index) => (
        <div key={index} className="bg-gray-300 w-full p-4 rounded-lg">
          <div className="flex justify-between align-baseline">
            <div className="text-xl font-semibold text-black-700 mb-1">{notification.title}</div>
            <button className="text-sm justify-between text-red-600">details</button>
          </div>
          <div className="text-sm text-gray-600">{notification.time}</div>
        </div>
      ))}

      {/* Message if no users match the search */}
      {filteredNotifications.length === 0 && <p>No users found.</p>}

      {/* Pagination Controls */}
      {filteredNotifications.length > 0 && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg text-white ${currentPage === 1 ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-700'}`}
          >
            Previous
          </button>

          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg text-white ${currentPage === totalPages ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-700'}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Userlist;
