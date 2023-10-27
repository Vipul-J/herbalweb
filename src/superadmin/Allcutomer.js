import React, { useState } from 'react';


function Allcustomer() {
  const initialStaff = [
    { name: 'John Doe', id: '001', phone: '991122992', eligible: 'Yes' },
    { name: 'Jane Smith', id: '002', phone: '887766225', eligible: 'No' },
    { name: 'Bob Johnson', id: '003', phone: '778866554', eligible: 'Yes' },
    { name: 'Aftab A', id: '004', phone: '777727222', eligible: 'No' },
    { name: 'Vipul J', id: '005', phone: '4455661111', eligible: 'Yes' },
    { name: 'Subaita', id: '006', phone: '9999778899', eligible: 'Yes' },
  ];

  const [staff, setStaff] = useState(initialStaff);
  const [filterName, setFilterName] = useState('');
  const [filterId, setFilterId] = useState('');
  const [filterPhone, setFilterPhone] = useState('');

  const handleFilter = () => {
    const filteredStaff = initialStaff.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(filterName.toLowerCase()) &&
        employee.id.includes(filterId) &&
        employee.phone.includes(filterPhone)
      );
    });
    setStaff(filteredStaff);
  };

  const handleReset = () => {
    setFilterName('');
    setFilterId('');
    setFilterPhone('');
    setStaff(initialStaff);
  };

  return (
    <div className="bg-fixed bg-center bg-cover h-screen bg-image">
      <div className="container mx-auto p-5">
        <h1 className="text-center text-5xl text-black font-serif mt-8 mb-6">All Customers</h1>
        <div className="mb-8 mt-4">
          <div className="flex justify-center space-x-4">
            <input
              type="text"
              className="glassy-input p-2 rounded-full font-serif bg-opacity-50"
              placeholder="Filter by Name"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
            <input
              type="text"
              className="glassy-input p-2 rounded-full font-serif bg-opacity-50"
              placeholder="Filter by ID"
              value={filterId}
              onChange={(e) => setFilterId(e.target.value)}
            />
            <input
              type="text"
              className="glassy-input p-2 rounded-full font-serif bg-opacity-50"
              placeholder="Filter by Phone"
              value={filterPhone}
              onChange={(e) => setFilterPhone(e.target.value)}
            />
            <button className="glassy-button bg-green-800 text-white p-2 font-serif rounded-lg" onClick={handleFilter}>
              Filter
            </button>
            <button className="glassy-button bg-green-800  font-serif text-white p-2 rounded-lg" onClick={handleReset}>
              Reset
            </button>
            <a className="glassy-button bg-green-800 font-serif text-white p-2 rounded-lg" href="/addcustomer">
              Add Customer
            </a>
          </div>
        </div>
        <table className="table-auto w-full bg-opacity-50 h-15 bg-gray-100 p-6 h-10 rounded-lg border border-black text-bold font-serif">
          <thead>
            <tr>
              <th className="text-black border">Name</th>
              <th className="text-black border">ID</th>
              <th className="text-black border">Phone</th>
              <th className="text-black border">Eligible</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((employee, index) => (
              <tr key={index} className="text-black border h-10">
                <td className="text-black border" style={{ width: '25%' }}>
                  {employee.name}
                </td>
                <td className="text-black border" style={{ width: '15%' }}>
                  {employee.id}
                </td>
                <td className="text-black border" style={{ width: '25%' }}>
                  {employee.phone}
                </td>
                <td className="text-black border" style={{ width: '35%' }}>
                  {employee.eligible}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Allcustomer;
