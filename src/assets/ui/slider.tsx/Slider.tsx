import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    { title: "Custom Software Development", description: "Transform your unique business needs into powerful solutions..." },
    { title: "Mobile App Development", description: "Elevate your user experience with our cutting-edge Mobile App Development services..." },
    { title: "Web Development", description: "Unlock the potential of the web with our Web Development services..." },
    { title: "Full Stack Development", description: "Elevate your digital presence with our comprehensive Full Stack Development services..." },
    { title: "SaaS Development", description: "Leverage the power of cloud computing with our SaaS Development services..." }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden w-[700px] h-[400px] flex justify-center   text-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 hidden'}`}
        >
          <div className="flex flex-col justify-center items-center h-full text-center bg-black text-white">
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            <p className="mt-2">{slide.description}</p>
          </div>
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;