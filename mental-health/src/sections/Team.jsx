import React from 'react';

const team = [
  {
    name: 'Giribala Arun',
    role: 'Front-End Developer',
    description: 'Crafts intuitive UI, ensures responsive design, and fine-tunes visual polish using React and Tailwind CSS.',
    image: '/assets/people.svg',
  },
  {
    name: 'Joel Sony',
    role: 'Back-End Developer',
    description: 'Builds robust APIs, manages server logic, and optimizes data flow for seamless integration with the front end.',
    image: '/assets/people.svg',
  },
  {
    name: 'Kesiya Reji',
    role: 'Model Training Engineer',
    description: 'Designs and trains machine learning models, focusing on accuracy, performance, and ethical AI behavior.',
    image: '/assets/people.svg',
  },
  {
    name: 'Kevin Jose',
    role: 'Model Training Engineer',
    description: 'Specializes in data processing, hyperparameter tuning, and deploying scalable ML pipelines.',
    image: '/assets/people.svg',
  },
];

const Team = () => {
  return (
    <section id="team" className="w-full bg-white py-20 px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-main-pink to-main-purple mb-6">
          The Team Behind Lenni
        </h1>
        <p className="text-[1.2rem] text-dark-blue max-w-3xl mx-auto mb-12">
          Meet the passionate minds building Lenni — a mental health companion designed with empathy, technology, and purpose.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 w-[280px] p-6 text-center border-2 border-light-blue"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-black flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <h3 className="text-[1.75rem] font-semibold text-main-pink mb-1">
                {member.name}
              </h3>
              <p className="text-dark-blue font-medium mb-3 text-[1.2rem]">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 text-[1rem]">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;