import React from 'react';

export default function WrapperBody({ children, customClass }) {
  return <div className={`flex-grow py-2  ${customClass} `}>{children}</div>;
}
