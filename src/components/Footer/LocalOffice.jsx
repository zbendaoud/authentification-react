import React from 'react';

export default function LocalOffice() {
  return (
    <div className="w-full">
      <div className="flex flex-row lg:flex-col lg:space-y-3 ">
        <div className="text-center lg:text-lg">
          <div className="inline-block bg-vert-claire text-green-500  lg:text-black lg:p-2 lg:pt-4 w-full">
            Head Office
          </div>
        </div>
        <div className="text-gris-claire text-center lg:text-lg ">Québec office</div>
        <div className="text-gris-claire text-center lg:text-lg">Brampton office </div>
        <div className="text-gris-claire text-center lg:text-lg"> Moncton office </div>
      </div>
      <div className="  lg:hidden flex text-xs items-center justify-center mt-4">
        © Powered By: Ideal Roofing Company Limited, Manufacturers
      </div>
    </div>
  );
}
