import React from 'react';

const VisionMission = () => {
  return (
    <section id="vision" className="w-full bg-white py-20 px-6">
      <div className="max-w-screen-xl mx-auto text-center flex flex-col gap-16">
        <h1 className='text-4xl text-gradient font-bold'>
            Our Vision & Mission
        </h1>
        <div>
          <h2 className="text-4xl font-bold text-gradient mb-4 text-main-pink">Our Vision</h2>
          <p className="text-[1.5rem] text-dark-blue max-w-4xl mx-auto">
            To create a world where mental health support is universally accessible, stigma-free, and powered by empathetic AI that listens, understands, and uplifts.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h2 className="text-4xl font-bold text-gradient mb-4 text-main-pink">Our Mission</h2>
          <p className="text-[1.5rem] text-dark-blue max-w-4xl mx-auto">
            We’re committed to building intelligent, open-source tools that provide real-time emotional support, promote mental wellness, and empower individuals to take control of their well-being — anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;