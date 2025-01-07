import React from "react";

const WhyCodeBoustine = () => {
  return (
    <>
      <div className="bg-gray-50">
        <dl className="flex flex-col cotainer-wraper">
          <h1 className="flex justify-center font-sans text-8xl">
            Why Code Baustein?
          </h1>
          <p className="flex justify-center text-gray-500 mt-9">
            We don't just deliver solutions; we create value. Here's why our
            clients trust us.
          </p>
        </dl>
        <section className="grid grid-cols-1 gap-4 p-4 container-wrapper md:grid-cols-3">
          <div className="flex flex-col">
            <dl className="text-black h-[30vh] ">
              <img
                src="public/images/WhyCodeBoustinePurple.png"
                alt="Purple dot"
              />
              <h1 className="mb-2 text-2xl font-bold text-black">Expertise</h1>
              <p>
                Our team consists of industry veterans with deep knowledge in
                web development and blockchain.
              </p>
            </dl>
            <dl className="text-black h-[30vh]">
              <img
                src="public/images/WhyCodeBoustinePurple.png"
                alt="Purple dot"
              />

              <h2 className="mb-2 text-2xl font-bold text-black">
                {" "}
                Innovation
              </h2>
              <p>
                We stay ahead of the curve by integrating the latest
                technologies and trends.
              </p>
            </dl>
          </div>

          <div className="md:">
            <img
              src="/images/WhyCodeBostine.png"
              alt=""
              className="object-cover w-full h-auto"
            />
          </div>

          <div className="flex flex-col">
            <dl className="text-black h-[30vh] ">
              <img
                src="public/images/WhyCodeBoustinePurple.png"
                alt="Purple dot"
              />

              <h1 className="mb-2 text-2xl font-bold text-black">
                Customer-Centric Approach
              </h1>
              <p>
                Your success is our priority. We work closely with you to
                understand your needs and deliver solutions that exceed
                expectations
              </p>
            </dl>
            <dl className="text-black h-[30vh]">
              <img
                src="public/images/WhyCodeBoustinePurple.png"
                alt="Purple dot"
              />

              <h2 className="mb-2 text-2xl font-bold text-black">
                Security First
              </h2>
              <p>
                We prioritize security in all our solutions, ensuring that your
                data and transactions are protected.
              </p>
            </dl>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyCodeBoustine;
