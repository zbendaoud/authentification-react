import React, { useState, useEffect } from 'react';

export default function List() {
  return (
    <div>
      List
      <p className="text-sm ...">The quick brown fox ...</p>
      <p className="text-base ...">The quick brown fox ...</p>
      <p className="text-lg ...">The quick brown fox ...</p>
      <p className="text-xl ...">The quick brown fox ...</p>
      <p className="text-2xl ...">The quick brown fox ...</p>{' '}
    </div>
  );
}
