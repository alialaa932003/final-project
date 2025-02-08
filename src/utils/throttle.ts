export function throttle<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastContext: any = null;

  const later = function () {
    if (lastArgs) {
      func.apply(lastContext, lastArgs);
    }
    timeout = null;
  };

  return function (this: any, ...args: Parameters<T>) {
    lastArgs = args;
    lastContext = this;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
  };
}
