import React, { useState, useEffect } from 'react';
import { useDebouncedValue } from '../Hook/useDebouncedValue';

export default function List() {
  const [value, setValue] = useState('');
  const debouncedSearchTerm = useDebouncedValue(value, 500);

  useEffect(() => {}, [debouncedSearchTerm]);

  return (
    <div>
      List
      <p class="text-sm ...">The quick brown fox ...</p>
      <p class="text-base ...">The quick brown fox ...</p>
      <p class="text-lg ...">The quick brown fox ...</p>
      <p class="text-xl ...">The quick brown fox ...</p>
      <p class="text-2xl ...">The quick brown fox ...</p>{' '}
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
