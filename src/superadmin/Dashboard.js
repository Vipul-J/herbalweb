import React from 'react';

function Dashboard() {
  const containerStyle = {
    backgroundImage: `url('https://careers.na.panasonic.com/sites/default/files/styles/pna_pna_hero_tile_primary_1item_desktop_large/public/2021-05/plsca_employee_1200.png?itok=kzicM8qE')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={containerStyle}>
      <h1 className="text-4xl font-bold font-serif text-black mb-8 mt-0 py-4">Welcome Super Admin</h1>
      <div className="flex flex-col sm:flex-row">
        <a href="/allstaffs">
          <div className="w-96 rounded-lg shadow-2xl hover:shadow-3xl border p-2 relative transform hover:scale-105 mr-4">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-female-team-leader-group-different-people_23-2148833268.jpg?w=360"
              alt=""
              className="rounded-t-lg w-full h-72 object-cover"
            />
            <div className="p-6 flex flex-col  justify-center">
              <h5 className="mb-2 text-3xl font-bold text-black text-decoration-none dark-text-black font-serif">
                Staff Functions
              </h5>
              <p className="mb-3 font-normal text-decoration-none text-black dark-text-black font-mono">
                Add Staff, View Staff Performance, and many such functions
              </p>
              <a href="/allstaffs" className="card-button flex items-center  text-decoration-none justify-center">
                Staff
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke=""
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </a>
        <a href="/allcustomers">
          <div className="w-96 rounded-lg shadow-2xl hover:shadow-3xl border p-2 relative transform hover:scale-105 mr-4">
            <img
              src="https://media.licdn.com/dms/image/D4D12AQGDYad-fSPk3w/article-cover_image-shrink_720_1280/0/1685360238705?e=2147483647&v=beta&t=VYabIuHgoXMvcptFjssAsfTpoIZWiQlJd4dAEpGEqU0"
              alt=""
              className="rounded-t-lg w-full h-72 object-cover"
            />
            <div className="p-6 flex flex-col justify-center">
              <h5 className="mb-2 text-2xl font-bold text-black text-decoration-none dark-text-black font-serif">
                Customer Functions
              </h5>
              <p className="mb-3 font-normal text-black dark-text-black text-decoration-none font-mono">
                View Customer Details, Add, Update them, and other functions
              </p>
              <a href="/allcustomers" className="card-button flex items-center  text-decoration-none justify-center">
                Customers
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke=""
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </a>
        <a href="/allproducts">
          <div className="w-96 rounded-lg shadow-2xl hover:shadow-3xl border p-2 relative transform hover:scale-105">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-essential-oil-bottle-collection_23-2148843379.jpg"
              alt=""
              className="rounded-t-lg w-full h-72 object-cover"
            />
            <div className="p-6 flex flex-col justify-center">
              <h5 className="mb-2 text-2xl font-bold text-black text-decoration-none dark-text-black font-serif">
                Product Functions
              </h5>
              <p className="mb-3 font-normal text-black dark-text-black  text-decoration-none font-mono">
                View Product Details, Add them to Inventory, and other such functions
              </p>
              <a href="/allproducts" className="card-button flex items-center text-decoration-none justify-center">
                Products
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke=""
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
