import React from 'react'

const Frame8 = () => {
    const features = [
        {
          title: "Cross Chain Bridge",
          description: "Bridge"
        },
        {
          title: "Tenup Analyzer",
          description: "Analyzer"
        },
        {
          title: "Ludo NFT",
          description: "NFT"
        },
        {
          title: "Tenup Top up",
          description: "up"
        },
        {
          title: "Tenup DAPP",
          description: "DAPP"
        }
      ]
    
      return (
        <div className="w-full max-w-6xl p-6">
          {/* Header */}
          <div className="mb-6 rounded-lg bg-black px-6 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full border-2" />
              <span className="text-lg">The Team is not LIVE right now.</span>
            </div>
          </div>
    
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-2 rounded-lg bg-gray-100 p-6 text-center"
              >
                <div className="h-12 w-12">
                  <div className="h-full w-full rounded-lg bg-current opacity-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    
export default Frame8