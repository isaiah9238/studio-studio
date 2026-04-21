"use client"

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'fortress_conveyor_buffer';

export function useConveyor<T>(key: string, initialValue: T) {
  const [data, setData] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    const stored = localStorage.getItem(`${STORAGE_KEY}_${key}`);
    return stored ? JSON.parse(stored) : initialValue;
  });

  const persist = useCallback((value: T) => {
    setData(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`${STORAGE_KEY}_${key}`, JSON.stringify(value));
    }
  }, [key]);

  const clearConveyor = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`${STORAGE_KEY}_${key}`);
    }
  }, [key]);

  return { data, persist, clearConveyor };
}
