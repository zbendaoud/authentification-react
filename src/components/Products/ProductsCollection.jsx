import React from 'react'
import ProductCard from './ProductCard'
import { Select, Button } from '@chakra-ui/react';
import product from '../../assets/product.png';

const ProductsCollection = () => {
  return (
    <div className='grid w-full grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-10'>
      <ProductCard/>
      
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      
    </div>
  )
}

export default ProductsCollection
