import React from "react";
import { CityFilterProps, Product } from "../../typings";
import { supabase } from "../../utils/supabase";
import ProductCard from "../products/ProductCard";

const fetchProducts = async () => {
  const res = await supabase.from("bikes").select();
  return res.data;
};

async function CityFilteredProducts({ params: { city } }: CityFilterProps) {
  let products = (await fetchProducts()) as Product[];

  products = products?.filter((product) => product.city.toLowerCase() == city);

  return (
    <div>
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default CityFilteredProducts;
