import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Dashboard from './superadmin/Dashboard';
import Allstaff from './superadmin/Allstaff';
import Addstaff from './superadmin/Addstaff';
import Allcustomer from './superadmin/Allcutomer';
import Addcustomer from './superadmin/Addcustomer';
import Allproducts from './superadmin/Allproducts';

function App() {
  return (
    <Router>
      <Routes>
         <Route exact path="/" element={<Dashboard />} />  
         <Route exact path="/allstaffs" element={<Allstaff />} />  
         <Route exact path="/addstaff" element={<Addstaff />} />  
         <Route exact path="/allcustomers" element={<Allcustomer />} />  
         <Route exact path="/addcustomer" element={<Addcustomer />} />  
         <Route exact path="/allproducts" element={<Allproducts />} />  
       </Routes>
    </Router>
  );
}

export default App;
