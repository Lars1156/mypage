import React from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, AppBar, Typography , Toolbar } from '@mui/material';
import Sidebar from "./SideBar";
function AppDashboard (){
    return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" sx={{backgroundColor:'white'}}>
            <Toolbar sx={{height:60}}>
              <Typography variant="h6" sx={{color:'black', marginLeft:30,fontSize:'20px'}}>Dashboard/VendorDetails</Typography>
              </Toolbar>
          </AppBar>
    
          <Sidebar />
          
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              p: 3,
              marginTop: '64px', // Adjusts for the height of the AppBar
            }}
          >
            <Outlet /> {/* Renders the nested route */}
          </Box>
        </Box>
    )
}

export default AppDashboard;