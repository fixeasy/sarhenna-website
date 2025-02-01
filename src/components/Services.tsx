import React from 'react';
import { hennaServices } from '../data';
import { Instagram } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#EDE6DD]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#42312B] mb-12">Nos Services Henné</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {hennaServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="w-full h-64 bg-[#A18C85]" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-[#A18C85]">{service.price}€</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/sarhenna69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#A18C85] hover:bg-[#42312B] text-white px-8 py-3 rounded-full transition-colors"
          >
            <Instagram size={24} />
            Réserver maintenant
          </a>
        </div>
      </div>
    </section>
  );
};