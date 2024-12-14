import React from "react";
import Dashboard from "./components/Dashboard";
import { Routes , Route } from "react-router-dom";
import RoleManagement from "./components/RoleManagement";
import AllTickets from "./components/AllTickets";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/roles" element = {<RoleManagement/>}/>
        <Route path = '/tickets'element = {<AllTickets/>}/>
       </Routes>
    </div>
  );
}

export default App;
