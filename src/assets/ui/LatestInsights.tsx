import React from "react";

const LatestInsights = () => {
  return (
    <>
      <section className="container-wrapper">
        
      <div className="flex flex-col justify-start ml-12">
        <h1 className="text-8xl ">Latest Insights</h1>
        <p>
          Stay updated with the latest trends in web development, blockchain,
          and DApps through our expert articles.
        </p> 
      </div>
      <dl className="flex gap-5 container-wrapper mb-52">
        <div
          className="h-[436.75px] p-4 rounded-lg bg-black w-[681.95px] flex flex-col items-start justify-end"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url('/public/images/LatestInsights(1).png')",
          }}
        >
          <p className="mb-2 text-white ">BLOG 23 july 2024</p>
          <h1 className="mb-2 text-4xl text-white">
            Customizable Brand Solutions
          </h1>
          <p className="mb-2 text-2xl text-white">Make your brand stand out</p>
          <button className="mt-4 ml-10 text-white border-b-4 border-yellow-400 xt-sm">Read More</button>
        </div>
        <div
          className="h-[436.75px] rounded-lg w-[482.73px] flex flex-col items-start justify-end"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url('/public/images/LatestInsights(2).png')",
          }}
        >
          <p className="mb-2 text-white ml-7 ">BLOG 23 july 2024</p>
          <h1 className="mb-2 text-4xl text-white ml-7">
            Customizable Brand Solutions
          </h1>
          <p className="mb-2 text-2xl text-white ml-7">
            Make your brand stand out
          </p>
          <button className="mt-4 mb-5 ml-10 text-white border-b-4 border-yellow-400 xt-sm ">Read More</button>
        </div>
      </dl>
      </section>
      
    </>
  );
};

export default LatestInsights;
