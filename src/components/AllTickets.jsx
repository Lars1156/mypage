import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  InputAdornment,
  Grid,
} from '@mui/material';
import { Search as SearchIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import ReactSpeedometer from 'react-speedometer';

function ViewAllTickets() {
  const [searchQuery, setSearchQuery] = useState('');

  const tickets = [
    { id: 1, ticketNumber: 'TCKT001', title: 'Login Issue', status: 'Open', priority: 'High', createdOn: '2024-01-01' },
    { id: 2, ticketNumber: 'TCKT002', title: 'Payment Failure', status: 'In Progress', priority: 'Medium', createdOn: '2024-01-02' },
    { id: 3, ticketNumber: 'TCKT003', title: 'UI Bug', status: 'Closed', priority: 'Low', createdOn: '2024-01-03' },
    { id: 4, ticketNumber: 'TCKT004', title: 'Data Sync Issue', status: 'Open', priority: 'High', createdOn: '2024-01-04' },
    { id: 5, ticketNumber: 'TCKT005', title: 'Crash on Save', status: 'In Progress', priority: 'Critical', createdOn: '2024-01-05' },
    { id: 6, ticketNumber: 'TCKT006', title: 'API Timeout', status: 'Closed', priority: 'Medium', createdOn: '2024-01-06' },
  ];

  const priorityToValue = {
    Critical: 100,
    High: 75,
    Medium: 50,
    Low: 25,
  };

  const filteredTickets = tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ padding: '16px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        View All Tickets
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <TextField
          placeholder="Search by Ticket Number or Title"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: '300px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary">
          Create New Ticket
        </Button>
      </Box>

      <Grid container spacing={2}>
        {filteredTickets.map((ticket) => (
          <Grid item xs={12} sm={6} md={4} key={ticket.id}>
            <Card sx={{ minHeight: '300px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{ticket.ticketNumber}</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                  {ticket.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  Status: {ticket.status}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  Created On: {ticket.createdOn}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<VisibilityIcon />}
                  sx={{ marginLeft: 'auto' }}
                >
                  View
                </Button>
              </CardActions>

              {/* Position Speedometer at the bottom left */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ReactSpeedometer
                  value={priorityToValue[ticket.priority]}
                  minValue={0}
                  maxValue={100}
                  segments={4}
                  needleColor="steelblue"
                  width={120}
                  height={80}
                  textColor="black"
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ViewAllTickets;
