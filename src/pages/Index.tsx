
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Controls from '../components/Controls';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <Controls />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
