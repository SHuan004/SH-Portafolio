"use client";

import { useState, useEffect, useRef, type RefObject } from "react";

type IntersectionObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T | null>, boolean] {
  const {
    root = null,
    rootMargin = "0px",
    threshold = 0,
    once = false,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T | null>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (once && hasTriggered.current) return;

        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) {
            hasTriggered.current = true;
            observer.unobserve(element);
          }
        } else {
          if (!once) {
            setIsIntersecting(false);
          }
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [root, rootMargin, threshold, once]);

  return [elementRef, isIntersecting];
}
