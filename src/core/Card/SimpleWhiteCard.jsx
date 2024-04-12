import React, { Children } from 'react';

export default function SimpleWhiteCard({ children, title = '' }) {
  return (
    <div className="bg-white text-black h-max py-4 rounded-md shadow-md px-6">
      <h1 className="text-xl font-semibold text-center">{title}</h1>
      {children}
    </div>
  );
}
