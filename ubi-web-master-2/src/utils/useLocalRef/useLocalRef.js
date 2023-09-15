import { useRef } from 'react';

export const useLocalRef = ( data ) => {
  const { ref } = data || {};
  const localRef = useRef();

  return ref || localRef;
};
