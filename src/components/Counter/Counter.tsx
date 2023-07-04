"use client";

import { useEffect, useState } from "react";

const Counter = ({
  number,
  duration,
  character,
  isOnce,
  setIsOnce,
}: {
  number: string;
  duration: string;
  character?: string;
  isOnce: boolean;
  setIsOnce: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [count, setCount] = useState<string>("0");

  useEffect(() => {
    let start = 0;
    const end = parseInt(number);

    if (isOnce) return;

    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setTimeout(function countNumber() {
      start += 1;
      setCount(`${start}`);
      if (start === end) {
        setIsOnce(true);
        clearTimeout(timer);
        return;
      }

      timer = setTimeout(countNumber, incrementTime);
    }, incrementTime);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number, duration]);

  return (
    <p className="font-bold text-[42px] text-primary-green">
      {isOnce ? number : `${count}` + character}
    </p>
  );
};

export default Counter;
