import React, { useState } from 'react';
import Profile from './profile';
import Notification from './notification';
import Details from './details';
import Update from './update';
import Request from './request';
import Complain from './complain';
function App() {
  const [activePanel, setActivePanel] = useState('profile');
  return (
    <div className="flex flex-col h-screen">
     
      <div className="flex flex-1 px-2 h-1">
        {/* Sidebar */}
        <div className="w-640 text-black p-6">
          <div className="text-lg font-semibold mb-6">DASHBOARD</div>
          <ul>


            <li className="mb-4">
            <a href="#Profile">
            <button
                onClick={() => setActivePanel('profile')}
                className="flex items-center p-2 text-black hover:bg-red-700 rounded w-full"
              > 
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A3 3 0 013 15V7a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-2.121 2.804M7 17a4 4 0 108 0M8 11h.01M16 11h.01"></path>
                </svg>
                Profile
               </button>
               </a>
            </li>



            <li className="mb-4">
              <a href="#notification">
            <button
                onClick={() => setActivePanel('notifications')}
                className="flex items-center p-2 text-black hover:bg-red-700 rounded w-full"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-5.621A2 2 0 0016.627 10H7.373a2 2 0 00-1.968 1.379L4 17h5m2 0v1a2 2 0 11-4 0v-1m4 0a2 2 0 11-4 0v-1m8-4V5a4 4 0 00-4-4H7a4 4 0 00-4 4v8"></path>
                </svg>  
              Notifications
                
                </button>  
                </a>
            </li>



            <li className="mb-4">
              <a href="#Details">
            <button
                onClick={() => setActivePanel('details')}
                className="flex items-center p-2 text-black hover:bg-red-700 rounded w-full"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M9 16h6m-7 4h8a2 2 0 002-2v-2.5a4.5 4.5 0 00-9 0V18a2 2 0 002 2zm1.341-4.5h4.318A2 2 0 0014 11.5V10a4.5 4.5 0 10-9 0v1.5a2 2 0 002 2z"></path>
                </svg>
                Details
              </button>
              </a>
            </li>



            <li className="mb-4">
              <a href="#Request">
            <button
                onClick={() => setActivePanel('request')}
                className="flex items-center p-2 text-black hover:bg-red-700 rounded w-full"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                </svg>

                Request
              </button>
              </a>
            </li>



            <li className="mb-4">
              <a href="#Request">
            <button
                onClick={() => setActivePanel('complain')}
                className="flex items-center p-2 text-black hover:bg-red-700 rounded w-full"
              >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.4 6.3a1 1 0 01-1 .7H5.4a1 1 0 01-1-.7L3 17h5m4-14h-4m5 0H9m3 0a3 3 0 00-3 3v1h6V6a3 3 0 00-3-3z"></path>
              </svg>



                Complain
              </button>
              </a>
            </li>



            <li className="mb-4 ">
              <a href="#Updates">
            <button
                onClick={() => setActivePanel('updates')}
                className="flex items-center p-2 text-black hover:bg-red-700 rounded w-full"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l4.536 4.536m0 0l-4.536 4.536M19.768 9.768H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2z"></path>
                </svg>
                Update
              </button>
              </a>
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 bg-gray-100 h-auto">
          {/* Render content conditionally based on the active panel */}
          {activePanel === 'profile' && <Profile />}
          {activePanel === 'notifications' && <Notification />}
          {activePanel === 'details' && <Details />}
          {activePanel === 'request' && <Request />}
          {activePanel === 'complain' && <Complain />}
          {activePanel === 'updates' && <Update />}

        </div>
      </div>
    </div>
      
  );
}

export default App;
