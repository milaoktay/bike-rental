import React from "react";
import { supabase } from "../../utils/supabase";
import ProductCard from "./ProductCard";

const fetchProducts = async () => {
  const res = await supabase.from("bikes").select();
  return res.data;
};

async function Products() {
  const products = await fetchProducts();

  return (
    <div>
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
export default Products;
