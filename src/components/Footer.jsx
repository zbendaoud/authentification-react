import React from 'react';

export default function Footer({ children }) {
  return (
    <div
      className="bg-white w-full"
      style={{
        height: '20%',
        border: 'solid 1px yellow'
      }}>
      {children}
    </div>
  );
}
