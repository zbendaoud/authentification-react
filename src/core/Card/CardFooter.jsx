import React from 'react';

export default function CardFooter({ option1, option2, link1, link2 }) {
  return (
    <div className="text-center">
      <a href={link1} className="block text-blue-600 underline hover:text-blue-700 hover:underline">
        {option1}
      </a>
      <a href={link2} className="block text-blue-600 underline hover:text-blue-700 hover:underline">
        {option2}
      </a>
    </div>
  );
}
