import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';

const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          { text: 'Home', icon: <HomeIcon /> },
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'Settings', icon: <SettingsIcon /> },
        ].map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />

      {/* Navigation Bar */}
      <AppBar position="fixed" style={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{ marginRight: '16px' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            MUI Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        style={{ display: { xs: 'block', sm: 'none' } }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        style={{ width: drawerWidth, flexShrink: 0, display: { xs: 'none', sm: 'block' } }}
      >
        {drawer}
      </Drawer>

      {/* Content */}
      <main style={{ flexGrow: 1, padding: '16px', marginTop: '64px' }}>
        <Typography paragraph>
          Welcome to the MUI Dashboard! Start building your components here.
        </Typography>
      </main>
    </div>
  );
};

export default Dashboard;
