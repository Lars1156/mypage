import React from "react";
// import Dashboard from './Pages/Dashboard'
import { Routes , Route } from "react-router-dom";
import RoleManagement from "./components/RoleManagement";
import AllTickets from "./components/AllTickets";
import TicketCard from "./components/TicketCard";
import VendorTable from "./components/VendorTable";
import Layout from "./DashBoard/Layout";
// import Sidebar from "./DashBoard/SideBar";
import AppDashboard from "./DashBoard/AppDashboard";
import ClientTable from "./Pages/ClientTable";
import Dashboard from './Pages/Dashboard'
// import SidebarWithAppBar from "./DashBoard/SidebarWithAppbar";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<AppDashboard/>}>
        <Route index element={<Dashboard/>}/>
          <Route path="/vendor" element={<VendorTable/>}/>
          <Route path="/client" element={<ClientTable/>}/>
          <Route path="/card" element={<TicketCard/>}/>
        </Route>
        
        <Route path="/ly" element ={<Layout/>}/>
        <Route path="/roles" element = {<RoleManagement/>}/>
        <Route path = '/tickets'element = {<AllTickets/>}/>
        <Route path="/card" element = {<TicketCard/>}/>
        <Route path = "/vendor" element ={<VendorTable/>}/>
       </Routes>
    </div>
  );
}

export default App;
