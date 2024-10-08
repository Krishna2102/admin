import React from 'react';

function Profile() {
  // Sample user data
  const userData = {
    name: 'Karishma Singh',
    bloodGroup: 'A+',
    address: 'NITK Surathkal, Mangalore, Karnataka',
    dob: 'January 1, 1990',
    profilePhoto: 'https://imgs.search.brave.com/mRib_i-Szar0NIbygBBAm9WO0KitFDrDrjbum_HIfwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODY0/NTE2ODcwL3Bob3Rv/L3lvdW5nLXdvbWFu/LXBob3RvZ3JhcGhp/bmctdGhlLWF1dHVt/bi1zZWFzb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU0z/RzJTd0tKMTV6b2xz/U2FGQUJzbmVMaXRk/V1hDcnJKM0xrVEVL/bklPeXM9', // Placeholder image
  };

  return (
    <>
    <div className="flex items-start bg-white p-6 rounded-lg shadow-lg h-full">
      {/* Profile Photo */}
      <img
        src={userData.profilePhoto}
        alt="Profile"
        className="rounded-full w-32 h-32 mr-6 border-4 border-red-500"
      />

      {/* User Details */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700">{userData.name}</h2>
        <p className="text-gray-600 mt-2"><strong>Blood Group:</strong> {userData.bloodGroup}</p>
        <p className="text-gray-600"><strong>Address:</strong> {userData.address}</p>
        <p className="text-gray-600"><strong>Date of Birth:</strong> {userData.dob}</p>
      </div>
      {/* User Certificates */}
    </div>
    
   </>
  );
}

export default Profile;
