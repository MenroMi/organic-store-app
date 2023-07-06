// basic
import { useState, useEffect } from "react";

const useDebounce = (params: any, debounce: number = 400): any => {
  const [newParams, setNewParams] = useState<any>(params);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const stringify = (any: any) => JSON.stringify(any);

  useEffect(() => {
    let timerID: NodeJS.Timeout;

    if (stringify(params) !== stringify(newParams)) {
      timerID = setTimeout(() => {
        return setNewParams(params);
      }, debounce);
    }

    setIsEnd(true);

    return () => {
      setIsEnd(false);
      clearInterval(timerID);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return isEnd;
};

export default useDebounce;
