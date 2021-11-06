import { TOffer } from '../types/offer';

export const offers: TOffer[] = [
  {
    id: '1',
    name: 'Beautiful &amp; luxurious apartment at great location',
    price: 412,
    isPremium: true,
    img: 'img/apartment-01.jpg',
    stars: '4.1',
    type: 'Apartment',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    whatIs: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    bedrooms: 12,
    maxAdults: 22,
    user: {
      img: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
  },
  {
    id: '2',
    name: 'Beautiful &amp; luxurious apartment at great location2',
    price: 11,
    isPremium: true,
    img: 'img/apartment-02.jpg',
    stars: '1.6',
    type: 'Apartment',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    whatIs: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    bedrooms: 1,
    maxAdults: 1,
    user: {
      img: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: false,
    },
  },
  {
    id: '3',
    name: 'Beautiful 3',
    price: 11111,
    isPremium: true,
    img: 'img/apartment-03.jpg',
    stars: '5',
    type: 'Apartment2',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    whatIs: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    bedrooms: 1,
    maxAdults: 1,
    user: {
      img: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
  },
];
