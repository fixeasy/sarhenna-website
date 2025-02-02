import { Product, Service, Testimonial } from './types';
import image1 from '@/assets/images/henne-charge-1.png';
import image2 from '@/assets/images/henne-moyen-1.png';
import image3 from '@/assets/images/henne-moyen-2.png';

import bougie1 from '@/assets/images/bougies/bougie-1.png';
import bougie2 from '@/assets/images/bougies/coming-soon.avif';
import bougie3 from '@/assets/images/bougies/coming-soon.avif';

export const hennaServices: Service[] = [
  {
    id: 'simple',
    name: 'Modèle Simple',
    price: 5,
    description: 'Motifs délicats et épurés, parfaits pour une touche subtile.',
    image: image1,
  },
  {
    id: 'medium',
    name: 'Modèle Moyen',
    price: 8,
    description: 'Designs plus élaborés avec des motifs traditionnels.',
    image: image2,
  },
  {
    id: 'complex',
    name: 'Modèle Chargé',
    price: 15,
    description: 'Créations complexes et détaillées pour les occasions spéciales.',
    image: image3,
  },
];

export const candles: Product[] = [
  {
    id: 'small',
    name: 'Petit Format',
    price: 5,
    description: 'Bougie artisanale décorée style henné Fessi, format idéal pour offrir.',
    image: bougie1,
  },
  {
    id: 'large',
    name: 'Grand Format',
    price: 10,
    description: 'Grande bougie décorative avec motifs henné Fessi élaborés.',
    image: bougie2,
  },
  {
    id: 'set',
    name: 'Lot de 3',
    price: 17,
    description: '2 petits formats + 1 grand format, parfait pour décorer votre intérieur.',
    image: bougie3,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah',
    content: 'Un travail d\'une finesse exceptionnelle ! Le henné a sublimé mon mariage.',
    image: '',
  },
  {
    id: '2',
    name: 'Leila',
    content: 'Les bougies sont magnifiques, elles apportent une touche orientale à mon intérieur.',
    image: '',
  },
];