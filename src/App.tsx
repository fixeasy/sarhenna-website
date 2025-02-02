import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Bougies } from './components/Candles';
import { Histoire } from './components/Story';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Bougies />
      <Histoire />
      <Contact />
    </div>
  );
}

export default App;