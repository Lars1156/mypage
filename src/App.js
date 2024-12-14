import React from "react";
import Dashboard from "./components/Dashboard";
import { Routes , Route } from "react-router-dom";
import RoleManagement from "./components/RoleManagement";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/roles" element = {<RoleManagement/>}/>
       </Routes>
    </div>
  );
}

export default App;
