
import React from 'react';
import classicPuck from '../assets/echo-zen_classic.png';
import motionDetection from '../assets/motion.png';
import tempSensor from '../assets/sensor.jpg';
import touchControl from '../assets/tap.jpg';

const Controls = () => {
  const controlMethods = [
    {
      id: 1,
      image: classicPuck,
      title: "With voice",
      description: "Use your Sona speaker to set up and control Smart Home devices"
    },
    {
      id: 2,
      image: motionDetection,
      title: "With motion detection",
      description: "Use motion detection feature to automatically turn on smart devices"
    },
    {
      id: 3,
      image: tempSensor,
      title: "With temperature sensor",
      description: "Enjoy perfect comfort as Sona adjusts the AC based on the room temperature."
    },
    {
      id: 4,
      image: touchControl,
      title: "With touch",
      description: "Easily pause music, end calls, dismiss timers, or snooze with a simple tap."
    }
  ];

  return (
    <section id="controls" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-white">Four ways </span>
          <span className="text-echo-accent">you can control Echo-Zen</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {controlMethods.map(method => (
            <div 
              key={method.id} 
              className="bg-echo-card rounded-3xl overflow-hidden purple-glow"
            >
              <div className="p-4">
                <img 
                  src={method.image} 
                  alt={method.title} 
                  className="w-full h-60 object-cover rounded-2xl"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-white text-2xl font-bold mb-2">{method.title}</h3>
                <p className="text-echo-text">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Controls;
