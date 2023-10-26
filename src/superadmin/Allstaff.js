import React, { useState } from 'react';

function AllStaff() {
  const initialStaff = [
    { name: 'John Doe', id: '001', phone: '(123) 456-7890', eligible: 'Yes' },
    { name: 'Jane Smith', id: '002', phone: '(987) 654-3210', eligible: 'No' },
    { name: 'Bob Johnson', id: '003', phone: '(555) 123-4567', eligible: 'Yes' },
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
    <div className="container">
      <h1 className='text-center'>All Staffs</h1>
      <div className="mb-3">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Name"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Filter by ID"
              value={filterId}
              onChange={(e) => setFilterId(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Phone"
              value={filterPhone}
              onChange={(e) => setFilterPhone(e.target.value)}
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
          <div className="col-auto">
            <a className="btn btn-warning" href="/addstaff">
              Add Staff
            </a>
          </div>
        </div>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Phone</th>
            <th>Eligible</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.id}</td>
              <td>{employee.phone}</td>
              <td>{employee.eligible}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllStaff;
