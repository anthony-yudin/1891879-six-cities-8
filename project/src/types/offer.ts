export type TUser = {
  img: string,
  name: string,
  isPro: boolean,
};

export type TOffer = {
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
  user: TUser;
}
