export type User = {
  img: string,
  name: string,
  isPro: boolean,
};

export type Offer = {
  id: string;
  img: string;
  price: number;
  stars: string;
  name: string;
  type: string;
  isPremium: boolean;
  description: string;
  whatIs: string[];
  bedrooms: number;
  maxAdults: number;
  user: User;
}
