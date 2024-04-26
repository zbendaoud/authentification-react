import React from 'react';
import product from '../../assets/product.webp';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const ProductCard2 = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        <Link className='className="w-full md:w-1/3 bg-white grid place-items-center' to="/product/9">
          <div >
            <img
              src={product}
              alt="Product Image"
              className=" border-gris-claire border rounded-lg"
            />
          </div>
        </Link>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <Link to="/product/9">
            <h3 className="font-black md:text-3xl text-xl">Product Name</h3>
          </Link>
          <Link to="/product/9">
            <p className="md:text-lg text-gray-500 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates maxime
              laborum placeat repellendus tenetur iure earum magnam et magni, nam labore. Blanditiis
              cum ab sapiente dolorum debitis maxime odit.
            </p>
          </Link>
          <div className="flex gap-2">
            <div className="flex flex-wrap gap-2">
              <select className="bg-white rounded-lg border border-gray-300 py-1 px-2 text-sm">
                <option value="" disabled selected>
                  Gauge
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              <select className="bg-white rounded-lg border border-gray-300 py-1 px-2 text-sm">
                <option value="" disabled selected>
                  Color
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              <input
                className="bg-white rounded-lg border border-gray-300 py-1 px-2 text-sm max-w-[80px]"
                placeholder="Quantity"
              />
              <input
                className="bg-white rounded-lg border border-gray-300 py-1 px-2 text-sm max-w-[80px]"
                placeholder="Length"
              />
            </div>
            <div>
              <Button className="bg-green-primary text-white rounded-lg py-1 px-2 text-sm border-green-primary">
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
