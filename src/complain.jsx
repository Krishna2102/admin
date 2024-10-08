import React, { useState, useEffect } from 'react';

function Complain() {
  const initialNotifications = [
    {
      id: 1,
      time: '8:00 AM',
      title: 'NITK Blood Camp',
      description: 'Start your day with a 30-minute exercise routine.',
      status: 'Pending',
      solvedAt: null,
    },
    {
      id: 2,
      time: '12:30 PM',
      title: 'Manipur University Blood Camp',
      description: 'Its time to refuel! Have a balanced lunch.',
      status: 'Pending',
      solvedAt: null,
    },
    {
      id: 3,
      time: '3:00 PM',
      title: 'Hydration Break',
      description: 'Drink a glass of water to stay hydrated.',
      status: 'Solved',
      solvedAt: new Date(new Date().getTime() - 25 * 60 * 60 * 1000), // solved 25 hours ago
    },
    {
      id: 4,
      time: '6:00 PM',
      title: 'Evening Walk',
      description: 'Take a 20-minute walk to unwind after work.',
      status: 'Pending',
      solvedAt: null,
    },
    {
      id: 5,
      time: '6:00 PM',
      title: 'Evening Walk',
      description: 'Take a 20-minute walk to unwind after work.',
      status: 'Solved',
      solvedAt: new Date(), // solved just now
    },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Function to toggle the status between "Pending" and "Solved"
  const toggleStatus = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return {
          ...notification,
          status: notification.status === 'Pending' ? 'Solved' : 'Pending',
          solvedAt: notification.status === 'Pending' ? new Date() : null, // Add solvedAt timestamp when status becomes "Solved"
        };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  // Function to filter notifications based on their status and remove solved ones after 24 hours
  const filterNotifications = () => {
    const currentTime = new Date().getTime();

    // Only show "Solved" complaints if they were solved within the last 24 hours
    return notifications.filter((notification) => {
      if (notification.status === 'Solved' && notification.solvedAt) {
        const solvedDuration = (currentTime - new Date(notification.solvedAt).getTime()) / (1000 * 60 * 60); // time in hours
        return solvedDuration <= 24; // only show if solved in the last 24 hours
      }
      return true; // always show "Pending" and non-solved complaints
    });
  };

  // Set interval to clean up solved complaints every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const updatedNotifications = notifications.filter((notification) => {
        if (notification.status === 'Solved' && notification.solvedAt) {
          const solvedDuration = (currentTime - new Date(notification.solvedAt).getTime()) / (1000 * 60 * 60); // time in hours
          return solvedDuration <= 24; // remove if solved more than 24 hours ago
        }
        return true;
      });
      setNotifications(updatedNotifications);
    }, 60 * 1000); // check every minute

    return () => clearInterval(interval); // cleanup interval on unmount
  }, [notifications]);

  const filteredNotifications = filterNotifications().filter((notification) => {
    if (filter === 'All') return true;
    return notification.status === filter;
  });

  const searchedNotifications = filteredNotifications.filter((notification) =>
    notification.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-auto">
      <div className="grid grid-cols-1 gap-4 w-full">
        <div className="flex sticky inset-x-0 -top-6 z-10 pt-3">
          <div className="text-2xl font-semibold mb-6">Complaint's List</div>

          <div className="flex space-x-4 ml-auto text-black">
            <div className="p-1 flex space-x-5">
              <button
                className={`h-8 w-24 px-4 rounded ${filter === 'All' ? 'bg-red-500 text-white' : 'bg-slate-200 hover:bg-slate-300'}`}
                onClick={() => setFilter('All')}
              >
                All
              </button>
              <button
                className={`h-8 w-24 px-4 rounded ${filter === 'Pending' ? 'bg-red-500 text-white' : 'bg-slate-200 hover:bg-slate-300'}`}
                onClick={() => setFilter('Pending')}
              >
                Pending
              </button>
              <button
                className={`h-8 w-24 px-4 rounded ${filter === 'Solved' ? 'bg-red-500 text-white' : 'bg-slate-200 hover:bg-slate-300'}`}
                onClick={() => setFilter('Solved')}
              >
                Solved
              </button>
            </div>

            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-72 h-10 px-16 py-2 rounded-lg text-black placeholder:text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {searchedNotifications.map((notification) => (
          <div key={notification.id} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-red-700 mb-1">{notification.title}</h3>
            <p className="text-sm text-gray-600">{notification.time}</p>
            <p className="mt-2">{notification.description}</p>
            <div className="mt-2 flex items-center">
              <span
                className={`inline-block px-2 py-1 rounded ${notification.status === 'Pending' ? 'bg-yellow-200 text-yellow-700' : 'bg-green-200 text-green-700'}`}
              >
                {notification.status}
              </span>
              <button
                className="ml-4 text-sm bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
                onClick={() => toggleStatus(notification.id)}
              >
                Mark as {notification.status === 'Pending' ? 'Solved' : 'Pending'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Complain;
