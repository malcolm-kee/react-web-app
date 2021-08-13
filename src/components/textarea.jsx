import cn from "classnames";
import PropTypes from "prop-types";
import * as React from "react";
import { callAll } from "../lib/call-all";
import { FieldContext } from "./field-context";

/**
 * Unspecified props will be spreaded to the underlying `textarea` element.
 *
 * Provided ref will be forwarded to the underlying `textarea` element.
 */
export const Textarea = React.forwardRef(function Textarea(
  { onChangeValue, ...props },
  forwardedRef
) {
  const fieldId = React.useContext(FieldContext);

  return (
    <textarea
      id={fieldId}
      {...props}
      className={cn(
        "block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md",
        props.className
      )}
      onChange={callAll(
        onChangeValue && ((ev) => onChangeValue(ev.target.value)),
        props.onChange
      )}
      ref={forwardedRef}
    />
  );
});

Textarea.propTypes = {
  onChangeValue: PropTypes.func,
};
