import React, { useState, useEffect } from 'react';
import SearchBar from '../components/Products/SearchBar';
import Filters from '../components/Products/Filters';
import ProductsCollection from '../components/Products/ProductsCollection';

export default function List() {
  return (
    <div className="wrapper">
      <SearchBar />
      <Filters />
      <div className="mt-8">
        <ProductsCollection />
      </div>
    </div>
  );
}
