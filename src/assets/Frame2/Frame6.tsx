import React from 'react'

const Frame6 = () => {
    return (
        <div className="w-full max-w-3xl p-6">
          <div className="rounded-xl bg-white p-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white">
                <div className="h-5 w-5 rounded-full border border-white" />
                <span>Our Socials Groups</span>
              </div>
    
              <div className="flex gap-2">
                <div className="flex items-center gap-2 rounded-lg border px-3 py-1.5">
                  <div className="h-4 w-4" />
                  Discord
                </div>
                <div className="rounded-lg border px-3 py-1.5 text-gray-600">
                  Not a member
                </div>
              </div>
            </div>
    
            {/* Buttons Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-50">
                <div className="h-5 w-5" />
                Connect Discord
              </button>
    
              <button className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-50">
                <div className="h-5 w-5" />
                Connect Facebook
              </button>
    
              <button className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-50">
                <div className="h-5 w-5" />
                Connect X
              </button>
    
              <button className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-50">
                <div className="h-5 w-5" />
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      )
    }
    
    
export default Frame6