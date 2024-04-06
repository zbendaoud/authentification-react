import React from 'react';

export default function CardShadow({ children, customClass }) {
  return (
    <div className={`shadow bg-white bg-opacity-10 ${customClass}`}>
      <>{children}</>
    </div>
  );
}
