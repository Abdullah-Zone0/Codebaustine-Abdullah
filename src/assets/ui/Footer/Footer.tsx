import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className='bg-black flex '>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-light mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 mb-12">
                We'd love to hear from you. Whether you have a question or are ready<br />
                to start a project, reach out to us
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">

              <div className="flex items-center space-x-4">
                <div className="bg-amber-100/20 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Phone</h3>
                  <p className="text-gray-300">+49 15775568031</p>
                </div>
              </div>


              <div className="flex items-center space-x-4">
                <div className="bg-amber-100/20 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Email</h3>
                  <p className="text-gray-300">info@codebaustein.com</p>
                </div>
              </div>


              <div className="flex items-center space-x-4">
                <div className="bg-amber-100/20 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Office</h3>
                  <p className="text-gray-300">Universität strasse 114, B02-09,<br />44799 Bochum Germany</p> 
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-12 bg-gray-800 p-8 rounded-lg shadow-md">
              <form className="">
                <div className="mb-6">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your fullname..."
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email..."
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Write your message here..."
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="bg-amber-100/20 p-4 rounded-lg hover:bg-amber-100/30 transition-colors">
            <FaFacebookF className="w-5 h-5 text-amber-100" />
          </a>
          <a href="#" className="bg-amber-100/20 p-4 rounded-lg hover:bg-amber-100/30 transition-colors">
            <FaInstagram className="w-5 h-5 text-amber-100" />
          </a>
          <a href="#" className="bg-amber-100/20 p-4 rounded-lg hover:bg-amber-100/30 transition-colors">
            <FaLinkedinIn className="w-5 h-5 text-amber-100" />
          </a>
          <a href="#" className="bg-amber-100/20 p-4 rounded-lg hover:bg-amber-100/30 transition-colors">
            <FaTwitter className="w-5 h-5 text-amber-100" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer
