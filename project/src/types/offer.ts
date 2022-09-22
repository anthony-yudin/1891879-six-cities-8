export type TUser = {
  img: string,
  name: string,
  isPro: boolean,
};

export type TReview = {
  id: string,
  user: TUser,
  stars: number,
  text: string,
  date: string
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
  reviews: TReview[];
}
