import { Button } from '@/components/ui/button';
import React from 'react';
import { BiPrinter } from 'react-icons/bi';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import product from '../assets/product.webp';
import { Input } from '@/components/ui/input';

const Cart = () => {
  return (
    <div className="wrapper">
      <div className="flex lg:items-center lg:justify-between lg:flex-row flex-col gap-4">
        <div className="flex items-center gap-4 justify-between lg:justify-normal">
          <h3 className="capitalize text-xl font-bold">Your shopping cart</h3>
          <Button>Save</Button>
        </div>
        <div>
          <Button className="text-lg font-semibold" size="lg">
            <BiPrinter className="mr-2 h-8 w-8" /> Print
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row w-100 lg:mt-8">
        <Table className="whitespace-nowrap lg:w-[70%] w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Items</TableHead>
              <TableHead>QTY</TableHead>
              <TableHead>Option(s)</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="w-[100px]>"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="flex gap-2 min-w-max">
                <img
                  src={product}
                  alt="product-image"
                  className="border-gris-claire border rounded-lg w-40 aspect-w-1 aspect-h-1"
                />

                <div>
                  <h3 className="font-bold mb-2">Monteciano</h3>
                  <div className="text-gris-claire text-lg">
                    <p>color: Adirondack Autumn</p>
                    <p>Gauge: 0.29</p>
                    <p>width: </p>
                    <p>Length: 12</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-40 ">
                <Input placeholder="Quantity" className="w-40" />
              </TableCell>
              <TableCell>
                <div className="text-gris-claire text-lg">
                  <p>P1: 6</p>
                  <p>P2: 5</p>
                  <p>Cond </p>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className=" text-lg">
                  <p>$154262</p>
                  <p className="text-gris-claire">$154.262/ea</p>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="flex gap-2 min-w-max">
                <img
                  src={product}
                  alt="product-image"
                  className="border-gris-claire border rounded-lg w-40 aspect-w-1 aspect-h-1"
                />

                <div>
                  <h3 className="font-bold mb-2">Monteciano</h3>
                  <div className="text-gris-claire text-lg">
                    <p>color: Adirondack Autumn</p>
                    <p>Gauge: 0.29</p>
                    <p>width: </p>
                    <p>Length: 12</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-40 ">
                <Input placeholder="Quantity" className="w-40" />
              </TableCell>
              <TableCell>
                <div className="text-gris-claire text-lg">
                  <p>P1: 6</p>
                  <p>P2: 5</p>
                  <p>Cond </p>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className=" text-lg">
                  <p>$154262</p>
                  <p className="text-gris-claire">$154.262/ea</p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="border border-gris-claire rounded-lg p-4 lg:w-[30%]">
          <div className="border-b-2 border-black flex flex-col gap-8 pb-8">
            <div className="flex justify-between items-center">
              <p>Misc Charges : </p>
              <p>$245</p>
            </div>

            <div className="flex justify-between items-center">
              <p>Lines Total : </p>
              <p>$2485</p>
            </div>

            <div className="flex justify-between items-center">
              <p>Delivery Fee : </p>
              <p>$250</p>
            </div>
          </div>

          <div className="border-b-2 border-black flex flex-col gap-8 py-8">
            <div className="flex justify-between items-center">
              <p>Subtotal : </p>
              <p>$245978</p>
            </div>

            <div className="flex justify-end items-center">
              <p>+ Applicable Taxes</p>
            </div>
          </div>

          <div className="py-8">
            <div className="flex justify-between items-center">
              <p className="font-bold">Grand Total : </p>
              <p>$245978</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button className="w-100 rounded-md">Cart Detail</Button>
            <Button className="w-100 rounded-md bg-green-primary text-white hover:bg-green-primary/90 border-green-primary">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
