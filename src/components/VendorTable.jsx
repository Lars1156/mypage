import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

// Sample vendor data
const vendorData = [
  {
    vendorName: 'John Doe',
    companyName: 'Tech Solutions Inc.',
    mobileNo: '+1234567890',
    project: 'Green Valley Residency',
  },
  {
    vendorName: 'Jane Smith',
    companyName: 'Innovate Corp.',
    mobileNo: '+9876543210',
    project: 'Sunny Meadows Apartments',
  },
  {
    vendorName: 'Mike Johnson',
    companyName: 'BuildTech Ltd.',
    mobileNo: '+1122334455',
    project: 'Blue Sky Villas',
  },
  {
    vendorName: 'Emily Davis',
    companyName: 'Green Energy Co.',
    mobileNo: '+9988776655',
    project: 'Harmony Heights',
  },
  {
    vendorName: 'Chris Brown',
    companyName: 'Urban Designers',
    mobileNo: '+8899776655',
    project: 'Silver Oak Residency',
  },
  {
    vendorName: 'Lisa Taylor',
    companyName: 'Smart Builders',
    mobileNo: '+7766554433',
    project: 'Golden Sunrise Apartments',
  },
  {
    vendorName: 'Robert Wilson',
    companyName: 'Elite Constructions',
    mobileNo: '+6677889900',
    project: 'Crystal Lake Villas',
  },
  {
    vendorName: 'Sophia Martinez',
    companyName: 'DreamScape Developers',
    mobileNo: '+4455667788',
    project: 'Ocean Breeze Heights',
  },
  {
    vendorName: 'David Lee',
    companyName: 'ProBuild Inc.',
    mobileNo: '+3344556677',
    project: 'Maple Woods Estate',
  },
  {
    vendorName: 'Sarah White',
    companyName: 'GreenField Constructions',
    mobileNo: '+2233445566',
    project: 'Emerald Garden Homes',
  },
];

const VendorTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Vendor Name</b></TableCell>
            <TableCell><b>Company Name</b></TableCell>
            <TableCell><b>Mobile No</b></TableCell>
            <TableCell><b>Project</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vendorData.map((vendor, index) => (
            <TableRow key={index}>
              <TableCell>{vendor.vendorName}</TableCell>
              <TableCell>{vendor.companyName}</TableCell>
              <TableCell>{vendor.mobileNo}</TableCell>
              <TableCell>{vendor.project}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VendorTable;
