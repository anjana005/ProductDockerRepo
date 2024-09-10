import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full flex flex-col">
   
      <div className="flex justify-center mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="rounded-md w-full h-64 object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="text-2xl font-semibold text-blue-600 mb-4">${product.price}</div>
      </div>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded">
          View
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
