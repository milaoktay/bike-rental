import React from "react";
import { supabase } from "../../utils/supabase";
import ProductCard from "../products/ProductCard";

const fetchProducts = async () => {
  const res = await supabase.from("bikes").select();
  return res.data;
};

async function CityFilteredProducts() {
  const products = await fetchProducts();

  return (
    <div>
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default CityFilteredProducts;
