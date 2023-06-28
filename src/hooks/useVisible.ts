"use client";

import { IOptions } from "@/types";
import { useState, useEffect, useRef } from "react";

export default function useVisible() {
  const [value, setValue] = useState(false);
  const [options, setOptions] = useState<IOptions>({
    root: null,
    threshold: 0,
    rootMargin: "0px",
  });
  const elemRef = useRef(null);

  useEffect(() => {
    const ref = elemRef.current;

    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setValue(false);
          return;
        }

        setValue(true);
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, options);

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [elemRef]);

  return { value, setValue, setOptions, elemRef };
}
