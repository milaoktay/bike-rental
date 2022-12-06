export type Product = {
  id: number;
  created_at: string;
  title: string;
  owner: string;
  price: number;
  available: boolean;
  image: string;
  description: string;
  city: string;
};

export type SingleProductProps = {
  params: {
    productId: string;
  };
};

export type CityFilterProps = {
  params: { city: string };
};
