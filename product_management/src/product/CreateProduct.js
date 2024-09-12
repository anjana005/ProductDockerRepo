import React, { useState } from 'react';

function CreateProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const URLLocal = "http://localhost:8080/api/Product";
  const URLDocker = "http://localhost:7137/api/Product";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(null);

    const newProduct = {
      name,
      price: parseFloat(price),
      description,
      imageURL
    };

    try {
      const response = await fetch(URLDocker, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      setSuccess(true);
      setName('');
      setPrice('');
      setDescription('');
      setImageURL('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Create Product</h2>

      {success && (
        <div className="text-green-600 text-center mb-4">Product created successfully!</div>
      )}

      {error && (
        <div className="text-red-600 text-center mb-4">Error: {error}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="imageURL">
            Image URL
          </label>
          <input
            id="imageURL"
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
