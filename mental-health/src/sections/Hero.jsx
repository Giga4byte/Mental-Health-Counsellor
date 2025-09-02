import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen bg-white">
      {/* Animated Floating Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="circle circle-sm bg-light-pink" style={{ top: '10%', left: '20%' }} />
        <div className="circle circle-md bg-light-blue" style={{ top: '30%', left: '70%' }} />
        <div className="circle circle-lg bg-light-pink" style={{ top: '60%', left: '40%' }} />
        <div className="circle circle-sm bg-light-blue" style={{ top: '80%', left: '15%' }} />
        <div className="circle circle-md bg-light-pink" style={{ top: '50%', left: '85%' }} />
      </div>

      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
        <div>
          <h1 className="text-5xl text-gradient md:text-6xl lg:text-7xl font-bold text-white text-center px-4">
            Welcome to your AI Mental Health Companion
          </h1>
          <p className="mt-6 text-[1.2rem] text-center max-w-2xl mx-auto px-4">
            Get compassionate support, guidance, and a listening ear whenever you need it. Your mental wellness journey starts with a simple conversation.
          </p>
          <button className="mt-8 bg-main-blue hover:bg-main-pink text-white font-semibold text-2xl py-3 px-6 rounded-lg shadow-lg transition duration-300 block mx-auto">
            Get Started Today for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;