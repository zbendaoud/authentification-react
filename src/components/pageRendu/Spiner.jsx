import React from 'react';

export default function Spiner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
}
