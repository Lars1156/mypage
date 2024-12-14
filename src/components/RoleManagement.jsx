import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Add as AddIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

function RoleManagement() {
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data for roles
  const roles = [
    { id: 1, roleName: 'Admin', transaction: 'Full Access', accessLevel: 'High' },
    { id: 2, roleName: 'Manager', transaction: 'Limited Access', accessLevel: 'Medium' },
    { id: 3, roleName: 'Developer', transaction: 'Read/Write', accessLevel: 'Medium' },
    { id: 4, roleName: 'Designer', transaction: 'Read Only', accessLevel: 'Low' },
    { id: 5, roleName: 'Tester', transaction: 'Read Only', accessLevel: 'Low' },
    { id: 6, roleName: 'HR', transaction: 'Limited Access', accessLevel: 'Medium' },
    { id: 7, roleName: 'Support', transaction: 'Read/Write', accessLevel: 'Medium' },
  ];

  // Filtered roles based on search query
  const filteredRoles = roles.filter((role) =>
    role.roleName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* AppBar */}
      <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '1.5rem' }}>
            Role Management
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Box sx={{ padding: '16px', backgroundColor: '#f4f4f4', height: '100vh' }}>
        {/* Header with Search and Add Role Button */}
        <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 3 }}>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Search Role"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => console.log('Add Role Clicked')}
            >
              Add Role
            </Button>
          </Grid>
        </Grid>

        {/* Table for Roles */}
        <TableContainer component={Paper}>
          <Table aria-label="roles table">
            <TableHead>
              <TableRow>
                <TableCell><strong>Role Name</strong></TableCell>
                <TableCell><strong>Transaction</strong></TableCell>
                <TableCell><strong>Access Level</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRoles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell>{role.roleName}</TableCell>
                  <TableCell>{role.transaction}</TableCell>
                  <TableCell>{role.accessLevel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default RoleManagement;
