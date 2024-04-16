import React from 'react'
import ProductCard from './ProductCard'
import { Select, Button } from '@chakra-ui/react';
import product from '../../assets/product.png';
import ProductCard2 from './ProductCard2';

const ProductsCollection = () => {
  return (
    <div className='grid w-full grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-10'>
      <ProductCard2/>
      
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      
    </div>
  )
}

export default ProductsCollection
