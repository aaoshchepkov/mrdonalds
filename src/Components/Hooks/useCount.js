import { useState } from 'react';

export function useCount(starCount) {
  const [count, setCount] = useState(starCount || 1);
  const onChange = e => setCount(e.target.value);
  return { count, setCount, onChange }
}