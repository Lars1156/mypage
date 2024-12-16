import React from "react";
import { Link } from "react-router-dom";
import { Box, Drawer, List, ListItem, ListItemText, ListItemIcon, Typography ,Divider} from '@mui/material';
import {Notifications as NotificationsIcon , Dashboard as DashboardIcon ,
    People as PeopleIcon, Security as SecurityIcon, Settings as SettingsIcon,} from '@mui/icons-material';
    import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
    function Sidebar() {
        return (
            <Drawer
            sx={{
             width: 240,
             flexShrink: 0,
             '& .MuiDrawer-paper': { width: 240,boxSizing: 'border-box',backgroundColor: 'white', color: 'black',},}} variant="permanent" anchor="left">
        <Box sx={{ height: 48,width:'100%'}}>
           <Typography sx={{fontSize : '200',marginLeft : '20px',marginTop:'10px'}}> LOGO 
                <Typography sx={{textAlign : 'center',}} >mayur desai</Typography>
           </Typography>
        </Box>
        <List>
          <ListItem button component={Link} to={'/activity'}>
            <ListItemIcon>
              <NotificationsIcon sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary="Activity" />
          </ListItem>
        </List>
        <ListItem button>
            <ListItemIcon>
              <DashboardIcon sx={{ color: 'Black' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to={'/client'}>
            <ListItemIcon>
              <PeopleIcon sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SecurityIcon sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary="Role" />
          </ListItem>
            <ListItem button component={Link} to={'/vendor'}>
             <ListItemIcon>
               <AssignmentIndIcon sx={{ color: 'black' }} />
            </ListItemIcon>
             <ListItemText primary="Vendor Details" />
          </ListItem>
          <Box sx={{ marginTop: 'auto' }}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon sx={{ color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
        <Divider/>
      </Drawer>
        );
      }
      
      export default Sidebar;