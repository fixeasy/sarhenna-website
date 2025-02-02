import React from 'react';
import { candles } from '../data';
import { Instagram } from 'lucide-react';

export const Bougies: React.FC = () => {
  return (
    <section id="bougies" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#42312B] mb-12">Bougies Artisanales</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {candles.map((candle) => (
            <div key={candle.id} className="bg-[#EDE6DD] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src={candle.image} 
                alt={candle.name}
                className="w-full h-128 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{candle.name}</h3>
                <p className="text-gray-600 mb-4">{candle.description}</p>
                <p className="text-2xl font-bold text-[#A18C85]">{candle.price}€</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/sarahenna69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#A18C85] hover:bg-[#42312B] text-white px-8 py-3 rounded-full transition-colors"
          >
            <Instagram size={24} />
            Commander sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
};