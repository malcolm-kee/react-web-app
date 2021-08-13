import * as React from "react";

let currentId = 0;

export const useId = (providedId) => {
  const [id] = React.useState(() => providedId || String(currentId++));
  return id;
};
