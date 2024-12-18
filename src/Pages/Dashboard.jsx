import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import './cssFolder/dash.css'
const tickets = [
  { id: 1, title: "Bug in login page", status: "in-progress", progress: 40 },
  { id: 2, title: "Add new feature to dashboard", status: "completed", progress: 100 },
  { id: 3, title: "Fix alignment issue", status: "in-progress", progress: 60 },
  { id: 4, title: "Improve API performance", status: "not-started", progress: 0 },
  { id: 5, title: "Redesign footer section", status: "completed", progress: 100 },
];

const chartData = tickets.map((ticket) => ({
  name: ticket.title,
  progress: ticket.progress,
}));

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} md={3}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                All Tickets
              </Typography>
              <Typography>2300</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Client Replies
              </Typography>
              <Typography>121</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Staff Replies
              </Typography>
              <Typography>91</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Unanswered
              </Typography>
              <Typography>231</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box className="chart-container" sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Ticket Reply Time
        </Typography>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="green" stopOpacity={0.8} />
                <stop offset="95%" stopColor="green" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="progress"
              stroke="#1a90ff"
              fillOpacity={1}
              fill="url(#colorProgress)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
}

export default Dashboard;
