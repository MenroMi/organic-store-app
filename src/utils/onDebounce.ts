function onDebounce(func: any, timeout: number = 300) {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const onHandleDebounce = (func: any, ...args: any[]) => {
  const debounce = onDebounce(func);
  debounce(...args);
};

export default onHandleDebounce;
