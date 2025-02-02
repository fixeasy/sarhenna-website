import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#EDE6DD]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#42312B] mb-12">Contact</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Restons en Contact</h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/sarahenna69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg hover:text-[#A18C85] transition-colors"
                >
                  <Instagram size={24} />
                  @Sarahenna69
                </a>
                <div className="flex items-center gap-3 text-lg">
                  <MapPin size={24} />
                  <span>Lyon, France</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#A18C85] focus:ring focus:ring-[#A18C85] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#A18C85] focus:ring focus:ring-[#A18C85] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#A18C85] focus:ring focus:ring-[#A18C85] focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#A18C85] hover:bg-[#42312B] text-white px-6 py-3 rounded-full transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};