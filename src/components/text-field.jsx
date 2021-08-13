import PropTypes from "prop-types";
import * as React from "react";
import { Field } from "./field";
import { Label } from "./label";
import { TextInput } from "./text-input";

/**
 * `<TextField />` composed of `<Label />` and `<TextInput />` component.
 *
 * Unspecified props will be forwarded to the underlying `<TextInput />` element.
 *
 * `ref` will be forwarded to `<TextInput />` element.
 */
export const TextField = React.forwardRef(function TextField(
  { label, id, ...inputProps },
  ref
) {
  return (
    <Field fieldId={id}>
      {label && <Label>{label}</Label>}
      <TextInput {...inputProps} ref={ref} />
    </Field>
  );
});

TextField.propTypes = {
  label: PropTypes.node,
};
