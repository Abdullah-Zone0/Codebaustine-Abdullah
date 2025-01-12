import React from 'react'


const Frame1 = () => {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md">
        <div className="p-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
            <span className="font-medium">Subscribed</span>
          </div>
          
          <div className="space-y-1">
            <span className="font-medium text-sm text-gray-600">Note:</span>
            <p className="text-sm text-gray-600 leading-relaxed">
              Experience the freedom of flexible payment options! With our "Pay As You Go" service, you won't be locked into a recurring payment plan. You'll only be charged once based on the length of your selected subscription.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  

export default Frame1