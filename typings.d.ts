export type Product = {
  id: number;
  created_at: string;
  title: string;
  owner: string;
  price: number;
  available: boolean;
  image: string;
  description: string;
};

export type SingleProductProps = {
  params: {
    productId: string;
  };
};
