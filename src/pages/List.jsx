import React, { useState, useEffect } from "react";
import { useDebouncedValue } from "../Hook/useDebouncedValue";

export default function List() {
  const [value, setValue] = useState("");
  const debouncedSearchTerm = useDebouncedValue(value, 500);

  useEffect(() => {}, [debouncedSearchTerm]);

  return (
    <div>
      List
      <p>liste ordonée ou pas</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
