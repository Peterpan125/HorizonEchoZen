
import React from 'react';
import { Music, Headphones } from 'lucide-react';
import orbitSpeaker from '../assets/echo-zen_orbit.png';
import globeImage from '../assets/News.jpg';

const Intro = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column with image and overlaid text */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-echo-card">
              <div className="p-8 relative">
                <img 
                  src={orbitSpeaker} 
                  alt="Echo Zen Orbit" 
                  className="w-full blue-glow"
                />
                <div className="absolute bottom-12 left-12 max-w-xs">
                  <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                    Meet Horizon Echo Zen,<br />
                    your compact smart assistant<br />
                    that brings convenience to<br />
                    your home
                  </h2>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column with global popularity and streaming */}
          <div className="flex flex-col gap-8">
            {/* Global popularity card */}
            <div className="bg-echo-card rounded-3xl p-8 relative">
              <div className="absolute right-8 bottom-0 w-36 opacity-50">
                <img 
                  src={globeImage} 
                  alt="Globe" 
                  className="w-full"
                />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 max-w-xs">
                The most popular smart speaker in the world
              </h3>
            </div>
            
            {/* Streaming card */}
            <div className="bg-echo-card rounded-3xl p-8">
              <div className="mb-6">
                <p className="text-echo-text text-lg">Support multiple music platform</p>
                <h3 className="text-white text-2xl md:text-3xl font-bold">Stream & enjoy</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-echo-card-border rounded-xl p-4 flex items-center space-x-4">
                  <Music className="h-10 w-10 text-white" />
                  <span className="text-white font-medium">Spotify</span>
                </div>
                <div className="bg-echo-card-border rounded-xl p-4 flex items-center space-x-4">
                  <Headphones className="h-10 w-10 text-white" />
                  <span className="text-white font-medium">Apple Music</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
