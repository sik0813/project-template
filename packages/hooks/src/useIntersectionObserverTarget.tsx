import { useEffect, useRef } from 'react';

interface useIntersectionObserverProps {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
  onIntersect: IntersectionObserverCallback;
}

function useIntersectionObserver<T extends HTMLElement = HTMLElement>({
  root = null,
  rootMargin = '0px',
  threshold = 0.7,
  onIntersect,
}: useIntersectionObserverProps): { target: React.RefObject<T> } {
  const target = useRef<T>(null);

  useEffect(() => {
    const node = target.current;
    if (!node) return;

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });
    observer.observe(node);

    return () => !node || observer.unobserve(node);
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { target };
}

export default useIntersectionObserver;
