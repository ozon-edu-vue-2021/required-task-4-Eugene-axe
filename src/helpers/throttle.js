export default function throttle(func, ms) {
  let throttleTimer = null;

  return function (args) {
    if (throttleTimer) {
      clearTimeout(throttleTimer);
    }
    throttleTimer = setTimeout(() => func(args), ms);
  };
}
