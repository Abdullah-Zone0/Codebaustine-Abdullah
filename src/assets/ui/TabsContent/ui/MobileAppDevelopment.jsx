import React from 'react';

function MobileAppDevelopment() {
  return (
    <div className="grid h-[800px] grid-cols-3 gap-2 mt-20">
    <div className="bg-[#A2A9B0] rounded-3xl"></div>
    <div className="grid col-span-2 grid-rows-2 gap-2 ">
      <div className="grid h-full grid-cols-2 gap-2 lg:grid-cols-2">
        <div className="flex items-end justify-start px-6 py-10 text-white bg-indigo-400 rounded-3xl text-start">
          <div>
            <p className="text-sm font-medium">UI/UX & Dev</p>
            <h2 className="text-xl font-bold">
              Odading Market   
              <br />
              eCommerce Website
              <br />
              Design and Development
            </h2>
            <p className="mt-4">Read More ➔</p>
          </div>
        </div>
        <div className="bg-[#A2A9B0] rounded-3xl"></div>
      </div>
      <div className="grid h-full rounded-3xl bg-[#A2A9B0]"></div>
    </div>
  </div>
  );
}

export default MobileAppDevelopment;