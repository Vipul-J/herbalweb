import React from 'react';

function Addcustomer() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className='text-center'>Add Customer</h1>
          <form>
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" id="mobile" name="mobile" />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="referred" className="form-label">Referred By</label>
                <input type="text" className="form-control" id="referred" name="qualification" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea className="form-control" id="address" name="address"></textarea>
              </div>
            </div>
            <div className="row mb-3"> 
              <div className="col-12 col-md-6">
                <label htmlFor="pdfUpload" className="form-label">PDF Upload</label>
                <input type="file" className="form-control" id="pdfUpload" name="pdfUpload" accept=".pdf" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <button type="submit" className="btn btn-dark float-end">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addcustomer;
