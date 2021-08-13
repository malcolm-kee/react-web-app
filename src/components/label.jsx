import cn from "classnames";
import * as React from "react";
import { FieldContext } from "./field-context";

export const Label = (props) => {
  const fieldId = React.useContext(FieldContext);

  return (
    <label
      htmlFor={fieldId}
      {...props}
      className={cn("block text-sm font-medium text-gray-900", props.className)}
    />
  );
};
