import React from 'react';

export default function PartFooter({ children, width = '1/3' }) {
  return <div className={`flex lg:h-full h-1/3 lg:w-${width}   border`}> {children}</div>;
}
