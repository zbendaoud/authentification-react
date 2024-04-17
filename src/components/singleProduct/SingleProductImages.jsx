import React from 'react';
import house from '../../assets/house.png';
import diagram from '../../assets/diagram.png';
import product from '../../assets/product.webp'

const SingleProductImages = () => {
  return (
    <div>
      <div className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 md:p-6">
        <img src={house} className="w-full object-contain" alt="product-image" />
      </div>
      <div className="  flex  gap-3 justify-center overflow-auto mt-5">
        <img src={house} className="w-[25%] object-contain" alt="product-image" />
        <img src={product} className="w-[25%] object-contain" alt="product-image" />
        <img src={diagram} className="w-[25%] object-contain" alt="product-image" />
      </div>
    </div>
  );
};

export default SingleProductImages;
