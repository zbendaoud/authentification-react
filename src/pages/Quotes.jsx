import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const Quotes = () => {
  return (
    <div className="wrapper">
      <h3 className="capitalize text-xl font-bold">My quotes</h3>

      <div className="mt-4 lg:mt-8">
        <Table className="whitespace-nowrap w-full">
          <TableHeader className="capitalize">
            <TableRow>
              <TableHead>Quote Number</TableHead>
              <TableHead>Project Name</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>Last Accessed</TableHead>
              <TableHead>Customer Info</TableHead>
              <TableHead>Creation Date</TableHead>
              <TableHead>Lines</TableHead>
              <TableHead>Delivery Address</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Checkout</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>53314</TableCell>
              <TableCell>Test PN</TableCell>
              <TableCell>Macha L</TableCell>
              <TableCell>Macha L</TableCell>
              <TableCell>Contractor A</TableCell>
              <TableCell>2024-04-17</TableCell>
              <TableCell>5</TableCell>
              <TableCell>125 Maple St</TableCell>
              <TableCell>$3562.85</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>53314</TableCell>
              <TableCell>Test PN</TableCell>
              <TableCell>Macha L</TableCell>
              <TableCell>Macha L</TableCell>
              <TableCell>Contractor A</TableCell>
              <TableCell>2024-04-17</TableCell>
              <TableCell>5</TableCell>
              <TableCell>125 Maple St</TableCell>
              <TableCell>$3562.85</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>53314</TableCell>
              <TableCell>Test PN</TableCell>
              <TableCell>Macha L</TableCell>
              <TableCell>Macha L</TableCell>
              <TableCell>Contractor A</TableCell>
              <TableCell>2024-04-17</TableCell>
              <TableCell>5</TableCell>
              <TableCell>125 Maple St</TableCell>
              <TableCell>$3562.85</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>53314</TableCell>
              <TableCell>Test PN</TableCell>
              <TableCell>Macha L</TableCell>
              <TableCell>Macha L</TableCell>
              <TableCell>Contractor A</TableCell>
              <TableCell>2024-04-17</TableCell>
              <TableCell>5</TableCell>
              <TableCell>125 Maple St</TableCell>
              <TableCell>$3562.85</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Quotes;
