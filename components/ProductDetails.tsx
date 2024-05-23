import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="border p-4 rounded-md">
      <h1 className="text-2xl mb-2">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-bold">Price: ${product.price}</p>
      <div className="mt-4">
        <img src={product.image} alt={product.name} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ProductDetails;
