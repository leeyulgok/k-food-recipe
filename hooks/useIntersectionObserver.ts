import { useEffect, RefObject } from "react";

const useIntersectionObserver = (
  ref: RefObject<HTMLDivElement>,
  onIntersect: (entry: IntersectionObserverEntry) => void
) => {
  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(onIntersect);
        },
        {
          root: ref.current.parentElement,
          threshold: 0.5,
        }
      );

      const nodes = ref.current.childNodes;
      nodes.forEach((node) => {
        if (node instanceof Element) {
          observer.observe(node);
        }
      });

      return () => {
        nodes.forEach((node) => {
          if (node instanceof Element) {
            observer.unobserve(node);
          }
        });
      };
    }
  }, [ref, onIntersect]);
};

export default useIntersectionObserver;
