
import React from 'react';
import { Check } from 'lucide-react';
import classicPuck from '../assets/echo-zen_classic.png';
import orbitSpeaker from '../assets/echo-zen_orbit.png';
import pulseSpeaker from '../assets/echo-zen_pulse.png';

const Pricing = () => {
  const products = [
    {
      id: "classic",
      name: "Classic",
      image: classicPuck,
      price: "₹3,499",
      features: [
        "Compact, hockey-puck shape with a fabric-covered exterior",
        "Improved speaker, offers better bass and clearer sound",
        "Sona voice assistant for smart home control, music streaming, weather updates, and more."
      ]
    },
    {
      id: "orbit",
      name: "Orbit",
      image: orbitSpeaker,
      price: "₹5,499",
      features: [
        "Spherical shape for a modern look and improved sound distribution.",
        "Larger 1.6-inch speaker with better bass and clarity",
        "Faster Sona responses, motion and temperature sensors for smart home automation, and tap controls"
      ]
    },
    {
      id: "pulse",
      name: "Pulse",
      image: pulseSpeaker,
      price: "₹4,499",
      features: [
        "Cylindrical shape for a modern and sleek look",
        "Improved speaker for richer sound and stronger bass",
        "Sona voice assistant, smart home control, tap-to-snooze alarm, and built-in temperature sensor"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-white">Get Yours </span>
          <span className="text-echo-accent">NOW</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div 
              key={product.id} 
              className="bg-echo-dark border border-echo-card-border rounded-3xl p-8 flex flex-col"
            >
              <h3 className="text-echo-accent text-2xl font-bold mb-6 text-center">
                {product.name}
              </h3>
              
              <div className="flex-1 flex justify-center mb-6">
                <div className="blue-glow w-40">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full"
                  />
                </div>
              </div>
              
              <p className="text-white text-4xl font-bold mb-6 text-center">
                {product.price}
              </p>
              
              <button className="bg-white text-echo-dark rounded-full py-3 px-6 font-bold mb-8 hover:bg-opacity-90 transition-colors">
                Buy
              </button>
              
              <ul className="space-y-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-echo-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
