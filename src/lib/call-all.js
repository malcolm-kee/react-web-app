export function callAll(...fns) {
  return function callAllFns(...args) {
    fns.forEach((fn) => typeof fn === "function" && fn(...args));
  };
}
