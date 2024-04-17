import SingleProductImages from '@/components/singleProduct/SingleProductImages';
import React from 'react';
import { PiWarningCircle } from 'react-icons/pi';

const Product = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 wrapper">
      <div>
        <div className="border-b border-gris-claire py-4">
          <h1 className="text-4xl md:text-5xl font mb-2">Ameri-Cana</h1>
          <span className="text-gris-claire">Ameri-Cana™ 36" (41" Flat)</span>
        </div>

        <div className="border-b border-gris-claire py-4 ">
          <p className="mb-4">
            Adaptable to any environment, our popular Ameri-Cana panel is suitable for roofing or
            siding applications on agricultural, residential, light commercial or light industrial
            building. It's ideal as a roofing sheet for long and low rafters (as low as 3/12). Ideal
            Roofing's Ameri-Cana panel offers superior strength with a strong 80,000 PSI full-hard
            steel core and a five specially designed 3/4" high ribs on 9" centres. Superior strength
            means savings on wood or steel purlins for your customer (consult your load ta......)
          </p>

          <div className="text-xl text-green-primary cursor-pointer">Show more...</div>
        </div>

        <div className="border-b border-gris-claire py-4 flex gap-4 items-center justify-center">
          <PiWarningCircle className="h-[32px] w-[32px] shrink-0" />
          <p className="text-sm">
            For Product Inquiries and Availability, please contact our nearest location.
          </p>
        </div>

        <div className="border-b border-gris-claire py-4 ">
          <div className="flex gap-6 justify-between overflow-auto whitespace-nowrap text-sm px-2">
            <div>Technical Data Sheet</div>
            <div>Brochures</div>
            <div>Installation Manual</div>
            <div>Warranties</div>
          </div>
        </div>
      </div>

      <SingleProductImages />
    </div>
  );
};

export default Product;
