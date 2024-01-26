import { useState, useEffect, useRef, useCallback } from 'react';

interface UseComponentVisibleResult<T extends HTMLElement> {
  ref: React.RefObject<T>;
  // | string
  // | ((instance: HTMLDivElement | null) => void)
  // | React.RefObject<HTMLDivElement>
  // | null
  // | undefined;
  isComponentVisible: boolean;
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useComponentVisible<T extends HTMLElement>(
  initialIsVisible: boolean
): UseComponentVisibleResult<T> {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef<T>(null);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsComponentVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  };
}
