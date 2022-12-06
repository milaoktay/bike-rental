import React from "react";
import { CityFilterProps } from "../../typings";
import { supabase } from "../../utils/supabase";
import ProductCard from "../products/ProductCard";

const fetchProducts = async () => {
  const res = await supabase.from("bikes").select();
  return res.data;
};

async function CityFilteredProducts({ params: { city } }: CityFilterProps) {
  let products = await fetchProducts();

  products = products?.filter((product) => product.city.toLowerCase() == city);

  console.log(products);
  return (
    <div>
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default CityFilteredProducts;
