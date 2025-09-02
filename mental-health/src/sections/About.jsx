import React from 'react';

const features = [
  {
    title: 'AI-Powered',
    description: 'Advanced machine learning algorithms trained on therapeutic techniques',
    icon: '/assets/aipowered.svg',
  },
  {
    title: 'Real-Time',
    description: 'Instant responses with voice and text chat capabilities',
    icon: '/assets/realtime.svg',
  },
  {
    title: 'Accessible',
    description: 'Available 24/7 to anyone needing mental health support',
    icon: '/assets/accessible.svg',
  },
  {
    title: 'Open Source',
    description: 'Built with modern web technologies and best practices',
    icon: '/assets/opensource.svg',
  },
];

const About = () => {
  return (
    <section id="about" className="w-full bg-white flex flex-col items-center py-20 px-6">
      <div className="page-heading">
        <h1 className="text-4xl font-bold text-gradient">About Lenni</h1>
        <p className="text-lg text-black max-w-4xl text-[1.5rem]">
          Lenni is an innovative AI-powered counseling platform designed to provide 24/7 support for individuals seeking mental wellness guidance.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-12 w-full max-w-[1400px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 w-[300px] max-w-full border-2 border-light-blue"
          >
            <img src={feature.icon} alt={feature.title} className="w-20 h-20 mb-4" />
            <h3 className="text-[1.75rem] font-semibold text-main-pink mb-2">{feature.title}</h3>
            <p className="text-dark-blue text-[1.2rem]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;