import React, { useState } from 'react';

// Function to generate a random strong password
function generatePassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>?';
  let password = '';
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

function Complain() {
  const notifications = [
    {
      id: 1,
      time: '8:00 AM',
      title: 'To join the Bloodsathi',
      description: 'Highland Hospital, Mangalore requests to join the blood camp.',
      hospitalDetails: {
        name: 'Highland Hospital',
        address: '123 Mangalore St, Karnataka, India',
        contact: '+91 9876543210',
        email: 'highland@example.com',
      },
    },
    // Other hospital details...
  ];

  const [selectedHospital, setSelectedHospital] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [denialReason, setDenialReason] = useState('');
  const [showRejectionInput, setShowRejectionInput] = useState(false); // To toggle rejection reason input

  // Function to handle card click
  const handleCardClick = (notification) => {
    setSelectedHospital(notification.hospitalDetails);
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setShowRejectionInput(false);
    setDenialReason('');
  };

  // Function to handle allow action
  const handleAllow = () => {
    const password = generatePassword();
    // Simulate sending email
    sendEmail(selectedHospital.email, password);
    alert(`Hospital Approved. Credentials sent to ${selectedHospital.email}`);
    closeModal();
  };

  // Function to handle deny action
  const handleDeny = () => {
    setShowRejectionInput(true); // Show rejection input field
  };

  // Function to handle rejection reason submission
  const submitDenialReason = () => {
    if (denialReason.trim() === '') {
      alert('Please provide a reason for rejection.');
    } else {
      alert(`Hospital Rejected. Reason: ${denialReason}`);
      closeModal();
    }
  };

  // Simulated email sending function
  const sendEmail = (email, password) => {
    console.log(`Sending email to: ${email} with password: ${password}`);
    // Here you would integrate email sending logic using a service like emailjs, nodemailer, etc.
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-auto">
      <div className="flex">
        <div className="text-2xl font-semibold mb-6">Requests List</div>

        {/* Search Bar */}
        <div className="flex space-x-4 ml-auto text-black">
          <input
            type="text"
            placeholder="Search..."
            className="w-72 h-10 px-16 py-2 rounded-lg text-black placeholder:text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            onClick={() => handleCardClick(notification)}
          >
            <h3 className="text-xl font-semibold text-red-700 mb-1">
              {notification.title}
            </h3>
            <p className="text-sm text-gray-600">{notification.time}</p>
            <p className="mt-2">{notification.description}</p>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Hospital Details</h2>
            {selectedHospital && (
              <>
                <p><strong>Name:</strong> {selectedHospital.name}</p>
                <p><strong>Address:</strong> {selectedHospital.address}</p>
                <p><strong>Contact:</strong> {selectedHospital.contact}</p>
                <p><strong>Email:</strong> {selectedHospital.email}</p>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-between">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={handleAllow}
                  >
                    Allow
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={handleDeny}
                  >
                    Deny
                  </button>
                </div>
              </>
            )}

            {/* Close button */}
            <button
              className="mt-4 text-red-600 underline"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Rejection Reason Popup */}
      {showRejectionInput && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Reason for Rejection</h2>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Provide reason for rejection"
              value={denialReason}
              onChange={(e) => setDenialReason(e.target.value)}
            />
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={submitDenialReason}
              >
                Submit
              </button>
              <button
                className="text-gray-600 underline"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Complain;
