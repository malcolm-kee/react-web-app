import cn from "classnames";
import PropTypes from "prop-types";
import * as React from "react";
import { callAll } from "../lib/call-all";
import { FieldContext } from "./field-context";

/**
 * Unspecified props will be spreaded to the underlying `input` element.
 *
 * Provided ref will be forwarded to the underlying `input` element.
 */
export const TextInput = React.forwardRef(function TextInput(
  { type = "text", onChangeValue, ...props },
  forwardedRef
) {
  const fieldId = React.useContext(FieldContext);

  return (
    <input
      type={type}
      {...props}
      id={props.id || fieldId}
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

TextInput.propTypes = {
  onChangeValue: PropTypes.func,
};
