import React from 'react';
import { Instagram } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://knot9prod.s3.amazonaws.com/thumbnails/327013/hover_327013033.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Sarahenna</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          L'art du henné traditionnel et des bougies artisanales
        </p>
        <a
          href="https://www.instagram.com/sarahenna69"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#A18C85] hover:bg-[#42312B] text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors"
        >
          <Instagram size={24} />
          Réservez sur Instagram
        </a>
      </div>
    </div>
  );
};