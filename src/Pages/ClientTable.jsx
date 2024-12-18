import React , {useState} from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, InputLabel, FormControl
  , Grid, Typography,Card,CardContent } from '@mui/material';
import { KeyboardArrowDown as KeyboardArrowDownIcon,} from '@mui/icons-material';   
function ClientTable (){
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
  return(
    <Box> 
                <Grid container spacing={3} sx={{ marginBottom: 3 }}>
            <Grid item xs={6} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Possission Done
                  </Typography>
                  <Typography>
                    2300
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Possission Penading
                  </Typography>
                  <Typography>
                    5100
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                     Commerclals
                  </Typography>
                  <Typography>
                   250
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Office Spaces
                  </Typography>
                  <Typography>
                    150
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
    </Box>
  )
}
export default ClientTable