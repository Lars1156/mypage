import React from 'react';
import { Card, CardContent, CardHeader, Grid,
        Button,
    Typography , Box} from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';


const tickets = [
  {
    "ticket_id": "TICKET001",
    "create_date_time": "2024-12-14T10:30:00",
    "issue": "Plumbing issue in the kitchen",
    "location": "Flat 101, Building A, City Center",
    "assignee": "John Doe",
    "created_by": "Michael Scott",
    "flat_no": "101"
  },
  {
    "ticket_id": "TICKET002",
    "create_date_time": "2024-12-14T11:00:00",
    "issue": "Heating system malfunction",
    "location": "Flat 203, Building B, Downtown",
    "assignee": "Jane Smith",
    "created_by": "Dwight Schrute",
    "flat_no": "203"
  },
  {
    "ticket_id": "TICKET003",
    "create_date_time": "2024-12-14T12:15:00",
    "issue": "Electrical short circuit",
    "location": "Flat 505, Building C, Riverfront",
    "assignee": "Alice Johnson",
    "created_by": "Jim Halpert",
    "flat_no": "505"
  },
  {
    "ticket_id": "TICKET004",
    "create_date_time": "2024-12-14T14:45:00",
    "issue": "Water leakage from ceiling",
    "location": "Flat 302, Building D, Park Lane",
    "assignee": "Robert Brown",
    "created_by": "Pam Beesly",
    "flat_no": "302"
  },
  {
    "ticket_id": "TICKET005",
    "create_date_time": "2024-12-14T15:30:00",
    "issue": "Broken window glass",
    "location": "Flat 104, Building E, North Hill",
    "assignee": "Emma Wilson",
    "created_by": "Stanley Hudson",
    "flat_no": "104"
  }
];


function TicketCard() {
  return (
    <Grid container direction="column" spacing={3}>
      {tickets.map((ticket) => (
        <Grid item xs={12} key={ticket.ticket_id}>
          <Card elevation={3} sx={{ width: '100%', height: 'auto' , borderRadius:'15px' }}>
            <CardHeader
              title={
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                  Ticket ID: {ticket.ticket_id}
                </Typography>
              }
              subheader={`Created on: ${ticket.create_date_time}`}
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end'  }}>
                 <Button sx={{padding : '20px , 10px ', backgroundColor:'green' , color:'white'}}
                 >Open</Button>
              </Box>
              <Typography variant="body2" paragraph>
                {ticket.issue}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold'  }}>
                Assignee: {ticket.assignee}
              </Typography>
              <ModeEditOutlineIcon/>
            </Box>
              <Typography variant="body2">{ticket.location}</Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
              <Typography variant="body2"> <NearMeIcon sx={{ marginRight: '8px' }} />Add Comments</Typography>
              <Typography variant='body2' sx={{}}>CreatedBy: {ticket.created_by},{ticket.flat_no}</Typography>
            </Box>
           
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default TicketCard;
