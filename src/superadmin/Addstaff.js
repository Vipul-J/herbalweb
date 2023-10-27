import React from 'react';

function Addstaff() {
  return (
    <div className="bg-fixed bg-center bg-cover h-screen bg-image">
      <div className="container mx-auto p-5">
        <h1 className="text-center text-5xl text-black font-serif mt-8 mb-6">Add Staff</h1>
        <form>
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block  font-serif text-white">Name</label>
                <input type="text" className="glassy-input-sm w-full bg-transparent p-2 rounded border border-gray-300 text-white" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="email" className="block font-serif text-white">Email</label>
                <input type="email" className="glassy-input-sm w-full bg-transparent p-2 rounded border border-gray-300 text-white" id="email" name="email" />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="mobile" className="block  font-serif text-white">Mobile Number</label>
                <input type="tel" className="glassy-input-sm w-full bg-transparent p-2 rounded border border-gray-300 text-white" id="mobile" name="mobile" />
              </div>
              <div>
                <label htmlFor="qualification" className="block font-serif text-white">Qualification</label>
                <input type="text" className="glassy-input-sm w-full bg-transparent p-2 rounded border border-gray-300 text-white" id="qualification" name="qualification" />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block font-serif text-white">Address</label>
            <textarea className="glassy-input-sm w-full bg-transparent p-2 rounded border border-gray-300 text-white" id="address" name="address"></textarea>
          </div>
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="designation" className="block font-serif text-white">Designation</label>
                <select className="glassy-input-sm w-full bg-transparent p-2 rounded border border-gray-300 text-black" id="designation" name="designation">
                  <option value="">Select</option>
                  <option value="Manager">Manager</option>
                  <option value="KitchenStaff">Kitchen Staff</option>
                  <option value="Waiter">Waiter</option>
                </select>
              </div>
              <div>
                <label htmlFor="pdfUpload" className="block font-serif text-white">PDF Upload</label>
                <input type="file" className="glassy-input-sm w-full bg-transparent p-2 rounded border border-gray-300 text-white" id="pdfUpload" name="pdfUpload" accept=".pdf" />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <button type="submit" className="glassy-button bg-green-800 font-serif text-white p-2 rounded float-right">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addstaff;
