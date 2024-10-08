import React, { useState } from 'react';

function NotificationPanel() {
  const [notifications, setNotifications] = useState([
    {
      time: '8:00 AM',
      title: 'NITK Blood Camp',
      description: 'Start your day with a 30-minute exercise routine.',
    },
    {
      time: '12:30 PM',
      title: 'Manipur University Blood Camp',
      description: 'It\'s time to refuel! Have a balanced lunch.',
    },
    {
      time: '3:00 PM',
      title: 'Hydration Break',
      description: 'Drink a glass of water to stay hydrated.',
    },
    {
      time: '6:00 PM',
      title: 'Evening Walk',
      description: 'Take a 20-minute walk to unwind after work.',
    },
  ]);

  const [newNotification, setNewNotification] = useState({
    title: '',
    description: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for notification success message
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotification((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNotification = (e) => {
    e.preventDefault();
    if (newNotification.title && newNotification.description) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const notificationWithTime = { ...newNotification, time: currentTime };
      
      setNotifications([...notifications, notificationWithTime]);
      setSuccessMessage('Notification sent to all users!'); // Set success message
      setNewNotification({ title: '', description: '' });
      setIsModalOpen(false);
      
      // Clear success message after a few seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-auto">
      <div className="flex">
        <div className="text-2xl font-semibold mb-6">Scheduled Notifications</div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-600 text-white w-36 h-10 px-4 py-2 rounded ml-auto hover:bg-red-700 transition"
        >
          Create New
        </button>

        <div className="flex space-x-4 ml-4 text-black">
          <input
            type="text"
            placeholder="Search..."
            className="w-72 h-10 px-16 py-2 rounded-lg text-black placeholder:text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Display success message */}
      {successMessage && (
        <div className="bg-green-100 text-green-800 p-2 rounded-lg mb-4">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 mb-8">
        {notifications.map((notification, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-red-700 mb-1">{notification.title}</h3>
            <p className="text-sm text-gray-600">{notification.time}</p>
            <p className="mt-2">{notification.description}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Create New Notification</h3>
            <form onSubmit={handleAddNotification}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newNotification.title}
                  onChange={handleInputChange}
                  placeholder="Enter title"
                  className="w-full p-2 rounded border"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={newNotification.description}
                  onChange={handleInputChange}
                  placeholder="Enter description"
                  className="w-full p-2 rounded border"
                  rows="3"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Send Notification
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationPanel;
