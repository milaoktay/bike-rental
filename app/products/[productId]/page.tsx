import React from "react";
import { SingleProductProps } from "../../../typings";
import { supabase } from "../../../utils/supabase";

const fetchProduct = async (productId: string) => {
  const res = await supabase.from("bikes").select("*").eq("id", productId);
  return res.data;
};

async function SingleProduct({ params: { productId } }: SingleProductProps) {
  let product = {
    title: "",
    image: "",
    description: "",
    price: "",
    owner: "",
    city: "",
  };
  const res = await fetchProduct(productId);
  if (res !== null) {
    [product] = res;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <h1 className="m-5 text-gray-900 text-xl font-medium mb-2">
          {product.title}
        </h1>
        <img
          className="m-5 object-cover "
          src={product.image}
          alt={product.title}
        />
        <p className="text-gray-700 text-base mb-4">{product.description}</p>
        <p className="text-gray-600 text-xs">{product.price}€/day</p>
        <p className="text-gray-600 text-xs">Rented out by {product.owner}</p>
        <p className="text-gray-700 text-base mb-4">{product.city}</p>
        <button className="m-2 px-2 py-1 bg-blue-200 text-gray-700 rounded-lg font-medium text-xl">
          Rent this bike
        </button>
      </div>
    </>
  );
}

export default SingleProduct;
