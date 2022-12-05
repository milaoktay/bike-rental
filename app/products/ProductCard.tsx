import Link from "next/link";
import React from "react";
import { Product } from "../../typings";

type ProductProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-60 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={product.image}
            alt={product.title}
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {product.title}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              reprehenderit quos culpa corporis asperiores vero quo dolores
              veniam.
            </p>
            <p className="text-gray-600 text-xs">{product.price}€/day</p>
            <p className="text-gray-600 text-xs">
              Rented out by {product.owner}
            </p>
            <Link
              href={`/products/${product.id.toString()}`}
              className="px-2 py-1 bg-blue-400 rounded-lg text-white mt-4"
            >
              See details and rent
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
