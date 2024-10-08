// import React, { useState, useEffect } from 'react';

// function hospitallist() {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(''); // For handling search

//   const notifications = [
//     {
//       title: 'Nitte Education Trust',
//       address: 'Nitte, Mangalore',
//       photo: 'https://imgs.search.brave.com/_i2lOF4-aiZioj8o6WhCr4p9Fp2gQUyrWWrCMxU2MuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uaXR0/ZS5jby5pbi9pbWFn/ZXMvbmVpcGwxMC5q/cGc',
//       description: [
//         { type: 'A+', quantity: 80 },
//         { type: 'A-', quantity: 10 },
//         { type: 'B+', quantity: 5 },
//         { type: 'B-', quantity: 5 },
//         { type: 'AB+', quantity: 10 },
//         { type: 'AB-', quantity: 5 },
//         { type: 'O+', quantity: 30 },
//         { type: 'O-', quantity: 15 }
//       ],
//     },
//     // Add more hospitals as needed...
//   ];

//   const toggleCard = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   // Filter notifications based on the search query
//   const filteredNotifications = notifications.filter(notification =>
//     notification.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Scroll to top whenever the search query changes
//   useEffect(() => {
//     if (searchQuery) {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   }, [searchQuery]);

//   return (
//     <>
//       <div className="grid grid-cols-1 gap-4 w-full">
//         {/* Sticky search bar */}
//         <div className="sticky top-0 bg-gray-100 z-10 pt-3 pb-3">
//           <div className="flex justify-between items-center">
//             <div className="text-2xl font-semibold">Hospitals</div>

//             {/* Search Bar */}
//             <div className="ml-auto">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search..."
//                 className="w-72 h-10 px-4 rounded-lg text-black placeholder:text-gray-500 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Display search results or all hospitals when no query is provided */}
//         {filteredNotifications.length > 0 ? (
//           filteredNotifications.slice(0, 6).map((notification, index) => (
//             <div
//               key={index}
//               className="bg-gray-300 w-full p-4 rounded-lg cursor-pointer transition-all duration-300"
//               onClick={() => toggleCard(index)}
//             >
//               <h3 className="text-xl font-semibold text-red-700 mb-1">{notification.title}</h3>
//               {expandedIndex === index && (
//                 <div className="mt-2 flex gap-5">
//                   <img src={notification.photo} alt={notification.title} className="w-32 h-32 object-cover mb-4" />
//                   <div>
//                     <p><strong>Address:</strong> {notification.address}</p>
//                     <div className="mt-2 flex flex-wrap gap-7">
//                       {notification.description.map((item, idx) => (
//                         <span key={idx} className="flex gap-1">
//                           <span className="font-semibold">{item.type}</span>
//                           <span>{item.quantity}</span>
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : searchQuery ? (
//           <p>No hospitals found for "{searchQuery}".</p>
//         ) : (
//           notifications.slice(0, 6).map((notification, index) => (
//             <div
//               key={index}
//               className="bg-gray-300 w-full p-4 rounded-lg cursor-pointer transition-all duration-300"
//               onClick={() => toggleCard(index)}
//             >
//               <h3 className="text-xl font-semibold text-red-700 mb-1">{notification.title}</h3>

//               {expandedIndex === index && (
//                 <div className="mt-2 flex gap-5">
//                   <img src={notification.photo} alt={notification.title} className="w-32 h-32 object-cover mb-4" />
//                   <div>
//                     <p><strong>Address:</strong> {notification.address}</p>
//                     <div className="mt-2 flex flex-wrap gap-7">
//                       {notification.description.map((item, idx) => (
//                         <span key={idx} className="flex gap-1">
//                           <span className="font-semibold">{item.type}</span>
//                           <span>{item.quantity}</span>
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// }

// export default hospitallist;

// import React, { useState, useEffect } from 'react';
// import hospitalData from '../data.json'; // Import the JSON file

// function HospitalList() {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');

//   const toggleCard = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   // Filter hospitals based on the search query
//   const filteredHospitals = hospitalData.filter(hospital =>
//     hospital.hospital_name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Scroll to top whenever the search query changes
//   useEffect(() => {
//     if (searchQuery) {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   }, [searchQuery]);

//   return (
//     <>
//       <div className="grid grid-cols-1 gap-4 w-full">
//         {/* Sticky search bar */}
//         <div className="sticky top-0 bg-gray-100 z-10 pt-3 pb-3">
//           <div className="flex justify-between items-center">
//             <div className="text-2xl font-semibold">Hospitals</div>

//             {/* Search Bar */}
//             <div className="ml-auto">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search hospitals..."
//                 className="w-72 h-10 px-4 rounded-lg text-black placeholder:text-gray-500 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Display search results */}
//         {filteredHospitals.length > 0 ? (
//           filteredHospitals.map((hospital, index) => (
//             <div
//               key={index}
//               className="bg-gray-300 w-full p-4 rounded-lg cursor-pointer transition-all duration-300"
//               onClick={() => toggleCard(index)}
//             >
//               <h3 className="text-xl font-semibold text-red-700 mb-1">{hospital.hospital_name}</h3>

//               {expandedIndex === index && (
//                 <div className="mt-2">
//                   <p><strong>Address:</strong> {hospital.address}</p>
//                   <p><strong>Contact:</strong> {hospital.contact}</p>
//                   <p><strong>State:</strong> {hospital.state}</p>
//                   <p><strong>City:</strong> {hospital.city}</p>
//                   <div className="mt-2">
//                     <strong>Availability:</strong>
//                     <ul className="mt-2 flex flex-wrap gap-5">
//                       {Object.entries(hospital.availability).map(([type, quantity], idx) => (
//                         <li key={idx} className="flex gap-2">
//                           <span className="font-semibold">{type}:</span>
//                           <span>{quantity}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No hospitals found.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default HospitalList;

import React, { useState, useEffect } from 'react';
import hospitalData from '../data.json'; // Import the JSON file

function HospitalList() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const hospitalsPerPage = 5; // Number of hospitals to show per page

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Filter hospitals based on the search query
  const filteredHospitals = hospitalData.filter(hospital =>
    hospital.hospital_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the current hospitals to display based on pagination
  const indexOfLastHospital = currentPage * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;
  const currentHospitals = filteredHospitals.slice(indexOfFirstHospital, indexOfLastHospital);

  const totalPages = Math.ceil(filteredHospitals.length / hospitalsPerPage);

  // Handle next and previous button clicks
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Scroll to top whenever the search query or page changes
  useEffect(() => {
    if (searchQuery || currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchQuery, currentPage]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 w-full">
        {/* Sticky search bar */}
        <div className="sticky top-0 bg-gray-100 z-10 pt-3 pb-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold">Hospitals</div>

            {/* Search Bar */}
            <div className="ml-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search hospitals..."
                className="w-72 h-10 px-4 rounded-lg text-black placeholder:text-gray-500 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        </div>

        {/* Display search results */}
        {currentHospitals.length > 0 ? (
          currentHospitals.map((hospital, index) => (
            <div
              key={index}
              className="bg-gray-300 w-full p-4 rounded-lg cursor-pointer transition-all duration-300"
              onClick={() => toggleCard(index)}
            >
              <h3 className="text-xl font-semibold text-red-700 mb-1">{hospital.hospital_name}</h3>

              {expandedIndex === index && (
                <div className="mt-2">
                  <p><strong>Address:</strong> {hospital.address}</p>
                  <p><strong>Contact:</strong> {hospital.contact}</p>
                  <p><strong>State:</strong> {hospital.state}</p>
                  <p><strong>City:</strong> {hospital.city}</p>
                  <div className="mt-2">
                    <strong>Availability:</strong>
                    <ul className="mt-2 flex flex-wrap gap-5">
                      {Object.entries(hospital.availability).map(([type, quantity], idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="font-semibold">{type}:</span>
                          <span>{quantity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No hospitals found.</p>
        )}

        {/* Pagination controls */}
        {filteredHospitals.length > hospitalsPerPage && (
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-red-500 text-white'}`}
            >
              Previous
            </button>

            <span className="text-lg">Page {currentPage} of {totalPages}</span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-red-500 text-white'}`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default HospitalList;
