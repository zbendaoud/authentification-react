import React from 'react';

export default function CardShadow({ children, customClass, height = '70%' }) {
  return (
    <div className={` ${customClass} border-y-4 rounded-md space-y-4`} style={{ height: height }}>
      <>{children}</>
    </div>
  );
}
