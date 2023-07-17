import { useState } from "react";

let count = 0;

/**
 * React hook that always returns an id value that is stable across re-renders
 * @param { string } prefix - a prefix to apply to id
 * @returns { string }
 */
export function useId(prefix: string): string{
  const [value, ] = useState(() => [prefix, ++count].filter(Boolean).join('-'));

  console.log(value + "호출")

  return value;
}