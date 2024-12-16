import React from "react";
import { Outlet } from "react-router-dom";
import {
    Drawer, List, ListItem, ListItemText, AppBar, Toolbar, IconButton, Typography, Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 240;

const Layout = () => {
  const [open, setOpen] = React.useState(true); // Sidebar open state

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar - Top Bar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar (Drawer) */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List>
          <ListItem button component="a" href="/">
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem button component="a" href="/vendor">
            <ListItemText primary="Vendor Details" />
          </ListItem>
          <ListItem button component="a" href="/settings">
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          marginLeft: `${drawerWidth}px`,
          transition: 'margin-left 0.3s',
        }}
      >
        {/* Outlet renders the content of the active route */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;