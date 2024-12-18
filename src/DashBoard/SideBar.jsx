import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
  Box,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Notifications as NotificationsIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Security as SecurityIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 240,
        boxSizing: 'border-box',
        backgroundColor: 'white',
        color: 'black',
        height: '100%',
      }}
      role="presentation"
      onClick={isMobile ? toggleDrawer : undefined}
    >
      <Box sx={{ height: 48, width: '100%' }}>
        <Typography sx={{ fontSize: '200', marginLeft: '20px', marginTop: '10px', textAlign:"center"}}>
          Help Desk
          <Typography sx={{ textAlign: 'center' }}>mayur desai</Typography>
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem button component={Link} to={'/card'}>
          <ListItemIcon>
            <NotificationsIcon sx={{ color: 'black' }} />
          </ListItemIcon>
          <ListItemText primary="Activity" />
        </ListItem>
        <ListItem button component={Link} to={'/'}>
          <ListItemIcon>
            <DashboardIcon sx={{ color: 'black' }} />
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
        <Divider />
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
      </List>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <AppBar position="fixed" sx={{backgroundColor:'white'}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="#00000"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{color:'black'}}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? isDrawerOpen : true}
        onClose={toggleDrawer}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Sidebar;
