
import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "🚀",
      title: "Faster Response Time",
      description: "Optimized hardware for quicker Sona responses."
    },
    {
      id: 2,
      icon: "🔊",
      title: "Improved Sound Processing",
      description: "Richer bass and clearer audio for an immersive experience."
    },
    {
      id: 3,
      icon: "⚡",
      title: "Energy-Saving Mode",
      description: "Uses less power when idle, making it more eco-friendly."
    },
    {
      id: 4,
      icon: "🧠",
      title: "Advanced AI Capabilities",
      description: "Sona is now smarter with enhanced conversational AI"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-white">New </span>
          <span className="text-echo-accent">Features</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(feature => (
            <div 
              key={feature.id} 
              className="bg-echo-card rounded-3xl p-8 purple-glow"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{feature.icon}</span>
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-echo-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
