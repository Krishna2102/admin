import React, { useState } from 'react';
import Userlist from './components/userlist';
import Hospitallist from './components/hospitallist';

function Details() {
  const [activePanel, setActivePanel] = useState('userlist'); // Initial state is bloodlist

  return (
    <div className="flex flex-col items-start bg-white p-6 rounded-lg h-full">
      {/* Sidebar or Navigation Buttons */}
      <div className="flex p-4 px-4 mx-6 gap-5 w-96">
        
        <button
          onClick={() => setActivePanel('userlist')}
          className={`p-2 text-black rounded w-full ${
            activePanel === 'userlist' ? 'bg-red-700 text-white' : 'bg-red-200 hover:bg-red-700'
          }`}
        >
          User List
        </button>
        <button
          onClick={() => setActivePanel('hospitallist')}
          className={`p-2 text-black rounded w-full ${
            activePanel === 'hospitallist' ? 'bg-red-700 text-white' : 'bg-red-200 hover:bg-red-700'
          }`}
        >
          Hospital List
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-gray-100 w-full overflow-y-auto flex">
        {/* Conditionally render components based on activePanel state */}
        {activePanel === 'userlist' && <Userlist />}
        {activePanel === 'hospitallist' && <Hospitallist />}
      </div>
    </div>
  );
}

export default Details;
