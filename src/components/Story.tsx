import React from 'react';
import image from '@/assets/images/histoire.webp';

export const Histoire: React.FC = () => {
  return (
    <section id="histoire" className="py-20 bg-[#42312B] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Notre Histoire</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={image}
              alt="Notre atelier"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">L'Art du Henné Traditionnel</h3>
            <p className="text-lg mb-6">
              Sarahenna est né d'une passion pour l'art ancestral du henné et le désir de partager 
              cette tradition millénaire. Chaque motif est créé à la main avec des produits naturels, 
              perpétuant un savoir-faire transmis de génération en génération.
            </p>
            <p className="text-lg mb-6">
              Notre collection de bougies artisanales s'inspire des motifs traditionnels du henné Fessi, 
              créant des pièces uniques qui illuminent votre intérieur d'une touche d'élégance orientale.
            </p>
            <div className="flex gap-4">
              <div className="bg-[#A18C85] p-4 rounded-lg">
                <h4 className="font-semibold mb-2">100% Naturel</h4>
                <p>Ingrédients naturels et traditionnels</p>
              </div>
              <div className="bg-[#A18C85] p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Fait Main</h4>
                <p>Chaque pièce est unique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};