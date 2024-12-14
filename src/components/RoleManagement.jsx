import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  Typography,
} from '@mui/material';
import {
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
      {/* Main Content Area */}
      <Box sx={{ padding: '16px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,  marginBottom: 3, }}
          
        >
            <Typography variant='h6'>
                Role Management
            </Typography>
          <TextField 
             placeholder='Search Person '
            label="Search Role"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width:'400px', marginRight: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => console.log('Add Role Clicked')}
          >
            Add Role
          </Button>
        </Box>

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
