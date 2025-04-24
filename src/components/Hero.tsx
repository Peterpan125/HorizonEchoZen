
import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroClassic from '../assets/echo-zen_classic.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-20 md:mb-24">
          <span className="text-white block mb-2">Turn Your Home Smart</span>
          <span className="text-echo-accent">With Echo Zen</span>
        </h1>

        <div className="relative mx-auto max-w-xs md:max-w-sm mb-16">
          <div className="blue-glow animate-glow">
            <img 
              src={heroClassic} 
              alt="Echo Zen Classic Puck" 
              className="w-full animate-float"
            />
          </div>
        </div>

        <a 
          href="#about" 
          className="inline-flex items-center border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-echo-dark transition-colors duration-300"
        >
          What is this <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
