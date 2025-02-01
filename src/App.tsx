import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Candles } from './components/Candles';
import { Story } from './components/Story';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Candles />
      <Story />
      <Contact />
    </div>
  );
}

export default App;