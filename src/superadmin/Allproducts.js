import React, { useState } from 'react';

function Allproducts() {
  const initialProducts = [
    {
      id: '001',
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      conversion: '5 scoops left',
    },
    {
      id: '002',
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      conversion: '10 scoops left',
    },
    {
      id: '003',
      name: 'Product 3',
      description: 'This is the description for Product 3.',
      conversion: '3 scoops left',
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filterProductName, setFilterProductName] = useState('');
  const [filterConversion, setFilterConversion] = useState('');

  const handleFilter = () => {
    const filteredProducts = initialProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(filterProductName.toLowerCase()) &&
        product.conversion.toLowerCase().includes(filterConversion.toLowerCase())
      );
    });
    setProducts(filteredProducts);
  };

  const handleReset = () => {
    setFilterProductName('');
    setFilterConversion('');
    setProducts(initialProducts);
  };

  return (
    <div className="bg-fixed bg-center bg-cover h-screen bg-image">
      <div className="container mx-auto p-5">
        <h1 className="text-center text-5xl text-black font-serif mt-8 mb-6">Product Information</h1>
        <div className="mb-8 mt-4">
          <div className="flex justify-center space-x-4">
            <input
              type="text"
              className="glassy-input p-2 rounded-full font-serif bg-opacity-50"
              placeholder="Filter by Product Name"
              value={filterProductName}
              onChange={(e) => setFilterProductName(e.target.value)}
            />
            <input
              type="text"
              className="glassy-input p-2 rounded-full font-serif bg-opacity-50"
              placeholder="Filter by Conversion"
              value={filterConversion}
              onChange={(e) => setFilterConversion(e.target.value)}
            />
            <button className="glassy-button bg-green-800 text-white p-2 rounded-lg" onClick={handleFilter}>
              Filter
            </button>
            <button className="glassy-button bg-green-800 text-white p-2 rounded-lg" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <div className="table-responsive">
        <table className="table-auto w-full bg-opacity-50 h-15 bg-gray-100 p-6 h-10 rounded-lg border border-black text-bold font-serif">
            <thead>
              <tr>
                <th className="text-black border">Product ID</th>
                <th className="text-black border">Product Name</th>
                <th className="text-black border">Description</th>
                <th className="text-black border">Conversion (Scoops Left)</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="text-black border h-10">
                  <td className="text-black border" style={{ width: '15%' }}>
                    {product.id}
                  </td>
                  <td className="text-black border" style={{ width: '25%' }}>
                    {product.name}
                  </td>
                  <td className="text-black border" style={{ width: '35%' }}>
                    {product.description}
                  </td>
                  <td className="text-black border" style={{ width: '25%' }}>
                    {product.conversion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Allproducts;
