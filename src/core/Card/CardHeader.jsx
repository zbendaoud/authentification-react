import React from 'react';

export default function CardHeader({ link }) {
  return (
    <div className="w-3/6 lg:w-3/6 flex justify-center items-center">
      <img src={link} alt="Logo indisponible" className="" />
    </div>
  );
}
