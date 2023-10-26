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
    <div className="container">
      <h1 className="text-center">Product Information</h1>
      <div className="mb-3">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Product Name"
              value={filterProductName}
              onChange={(e) => setFilterProductName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Conversion"
              value={filterConversion}
              onChange={(e) => setFilterConversion(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={handleFilter}>
              Filter
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-secondary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Conversion (Scoops Left)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.conversion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Allproducts;
