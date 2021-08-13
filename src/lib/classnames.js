export const classNames = (...classes) => {
  const result = [];

  classes.forEach((cls) => {
    if (Array.isArray(cls)) {
      const innerResult = classNames(...cls);
      if (innerResult) {
        result.push(innerResult);
      }
    } else {
      if (typeof cls === "string") {
        result.push(cls);
      }
    }
  });

  return result.join(" ");
};
