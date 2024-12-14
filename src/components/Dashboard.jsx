import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, InputLabel, FormControl
, Card, CardContent, Grid 
 } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon , Dashboard as DashboardIcon ,People as PeopleIcon, Security as SecurityIcon, Settings as SettingsIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState('');

  const handleProjectChange = (event) => {
    setProject(event.target.value);
  };
  const rows = [
    { srNo: 1, customerName: 'John Doe', mobileNo: '123-456-7890', wingUnit: 'A1', registeredFamilyMembers: 4 },
    { srNo: 2, customerName: 'Jane Smith', mobileNo: '987-654-3210', wingUnit: 'B2', registeredFamilyMembers: 3 },
    { srNo: 3, customerName: 'Alice Johnson', mobileNo: '555-123-4567', wingUnit: 'C3', registeredFamilyMembers: 5 },
    { srNo: 4, customerName: 'Bob Brown', mobileNo: '444-987-6543', wingUnit: 'D4', registeredFamilyMembers: 2 },
    { srNo: 5, customerName: 'Charlie White', mobileNo: '666-333-7777', wingUnit: 'E5', registeredFamilyMembers: 3 },
    { srNo: 6, customerName: 'David Wilson', mobileNo: '222-555-8888', wingUnit: 'F6', registeredFamilyMembers: 4 },
    { srNo: 7, customerName: 'Emily Taylor', mobileNo: '111-222-3333', wingUnit: 'G7', registeredFamilyMembers: 1 },
    { srNo: 8, customerName: 'Frank Harris', mobileNo: '333-666-9999', wingUnit: 'H8', registeredFamilyMembers: 2 },
    { srNo: 9, customerName: 'Grace Lee', mobileNo: '777-888-9999', wingUnit: 'I9', registeredFamilyMembers: 3 },
    { srNo: 10, customerName: 'Henry Clark', mobileNo: '999-000-1111', wingUnit: 'J10', registeredFamilyMembers: 4 },
  ];


  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar/Drawer */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: 'white',
            color: 'black',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{
            height: 48,
            width:'100%'
          }}
        >
           <Typography
            sx={{
              fontSize : '200',
              marginLeft : '20px',
              marginTop:'10px'
              
            }}
           >
            LOGO 
                <Typography
                 sx={{
                  textAlign : 'center',
                 }}
                >
                    mayur desai 
                </Typography>
           </Typography>
        </Box>
        <List>
          <ListItem button>
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
          <ListItem button>
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
      </Drawer>

      {/* Main content */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {/* AppBar */}
        <AppBar position="sticky" sx={{ backgroundColor: 'White', height:'200'}}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '1.5rem', color: 'black' }}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Main Content Area */}
        <main style={{ padding: '16px', backgroundColor: '#f4f4f4', height: '100vh' }}>
        <Grid container spacing={3} sx={{ marginBottom: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Card 1
                  </Typography>
                  <Typography>
                    Some content here for Card 1.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Card 2
                  </Typography>
                  <Typography>
                    Some content here for Card 2.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Card 3
                  </Typography>
                  <Typography>
                    Some content here for Card 3.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Card 4
                  </Typography>
                  <Typography>
                    Some content here for Card 4.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        <FormControl fullWidth sx={{ marginBottom: 2 , height:40 , width:200 ,  marginLeft: 0 }}>
            <InputLabel>Select Project</InputLabel>
            <Select
              value={project}
              onChange={handleProjectChange}
              label="Select Project"
              IconComponent={KeyboardArrowDownIcon} // Set the dropdown icon
            >
              <MenuItem value={1}>Project A</MenuItem>
              <MenuItem value={2}>Project B</MenuItem>
              <MenuItem value={3}>Project C</MenuItem>
              <MenuItem value={4}>Project D</MenuItem>
            </Select>
          </FormControl>
          <TableContainer component={Paper} sx={{ maxHeight: 400, overflow: 'auto' }}>
            <Table stickyHeader aria-label="customer data table">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Sr No</strong></TableCell>
                  <TableCell><strong>Customer Name</strong></TableCell>
                  <TableCell><strong>Mobile No</strong></TableCell>
                  <TableCell><strong>Wing/Unit</strong></TableCell>
                  <TableCell><strong>Registered Family Members</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.srNo}>
                    <TableCell>{row.srNo}</TableCell>
                    <TableCell>{row.customerName}</TableCell>
                    <TableCell>{row.mobileNo}</TableCell>
                    <TableCell>{row.wingUnit}</TableCell>
                    <TableCell>{row.registeredFamilyMembers}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </main>
      </Box>
    </div>
  );
}

export default Dashboard;
