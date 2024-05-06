export function debounce(func: Function, delay: number) {
  let timer;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args);
    }, delay);
  };
}

export function throttle(func: Function, interval: number) {
  let isRunning = false;

  return (...args: any) => {
    if (!isRunning) {
      isRunning = true;
      // @ts-ignore
      func.apply(this, args);

      setTimeout(() => {
        isRunning = false;
      }, interval);
    }
  };
}
