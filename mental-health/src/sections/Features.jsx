import React from 'react';

const features = [
  {
    title: 'Conversational AI',
    description:
      'Lenni engages users in natural, emotionally intelligent conversations. It’s not just about answering questions — it’s about listening, responding with empathy, and building trust over time. Whether someone’s venting, reflecting, or just seeking connection, Lenni adapts to the moment.',
  },
  {
    title: 'Multi-Modal Communication',
    description:
      'Users can interact through voice or text, switching seamlessly based on comfort and context. Lenni’s voice interface is designed to feel warm and human-like, while the text experience remains crisp and intuitive. Accessibility is baked in from the start.',
  },
  {
    title: 'Privacy-First Design',
    description:
      'Lenni is built with user safety at its core. All interactions are encrypted, and no personal data is stored without consent. The system is designed to be transparent, secure, and respectful — because mental health support should never come at the cost of privacy.',
  },
  {
    title: 'Crisis Detection',
    description:
      'Using advanced language models and behavioral cues, Lenni can detect signs of emotional distress or crisis. When triggered, it shifts into a more supportive mode — offering grounding techniques, emergency resources, or even escalating to human support if needed.',
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full bg-white py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-5xl font-bold text-gradient mb-12 text-center">
          Key Features
        </h1>

        <div className="space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-main-pink mb-2 text-center">
                {feature.title}
              </h2>
              <p className="text-dark-blue text-[1.1rem] leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;