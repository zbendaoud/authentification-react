import React from 'react';

export default function Footer({ children }) {
  return (
    <div
      className="bg-white"
      style={{
        position: 'stiky',
        bottom: 0,
        width: '100%',
        height: '20%',
        border: 'solid 1px yellow'
      }}>
      {children}
    </div>
  );
}
