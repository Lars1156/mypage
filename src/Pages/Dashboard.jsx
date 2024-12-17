import React from "react";
import {
    Grid,
    Typography,
    Card,
    CardContent,
    LinearProgress, Paper ,Box
}from '@mui/material';
const tickets = [
    { id: 1, title: "Bug in login page", status: "in-progress", progress: 40 },
    { id: 2, title: "Add new feature to dashboard", status: "completed", progress: 100 },
    { id: 3, title: "Fix alignment issue", status: "in-progress", progress: 60 },
    { id: 4, title: "Improve API performance", status: "not-started", progress: 0 },
    { id: 5, title: "Redesign footer section", status: "completed", progress: 100 },
  ];
function Dashboard(){
    <>
   <Grid container spacing={3} sx={{ marginBottom: 3 }}>
               <Grid item xs={12} sm={6} md={3}>
                 <Card>
                   <CardContent>
                     <Typography variant="h6" gutterBottom>
                       All Tickets
                     </Typography>
                     <Typography>
                       2300
                     </Typography>
                   </CardContent>
                 </Card>
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                 <Card>
                   <CardContent>
                     <Typography variant="h6" gutterBottom>
                       Client Replies
                     </Typography>
                     <Typography>
                       121
                     </Typography>
                   </CardContent>
                 </Card>
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                 <Card>
                   <CardContent>
                     <Typography variant="h6" gutterBottom>
                       Staff Replies
                     </Typography>
                     <Typography>
                        91
                     </Typography>
                   </CardContent>
                 </Card>
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                 <Card>
                   <CardContent>
                     <Typography variant="h6" gutterBottom>
                       Unanswred
                     </Typography>
                     <Typography>
                        231
                     </Typography>
                   </CardContent>
                 </Card>
               </Grid>
             </Grid>
             <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Ticket Progress
      </Typography>
      {tickets.map((ticket) => (
        <Paper
          key={ticket.id}
          elevation={3}
          sx={{ p: 2, mb: 2, backgroundColor: "#f9f9f9" }}
        >
          <Typography variant="subtitle1">{ticket.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            Status: {ticket.status}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={ticket.progress}
            sx={{
              height: 10,
              borderRadius: 5,
              mt: 1,
              "& .MuiLinearProgress-bar": {
                backgroundColor:
                  ticket.progress === 100 ? "#4caf50" : "#1a90ff",
              },
            }}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 0.5, display: "block" }}
          >
            {ticket.progress}% completed
          </Typography>
        </Paper>
      ))}
    </Box>
             </>
}
export default Dashboard;