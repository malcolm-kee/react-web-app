import PropTypes from "prop-types";
import * as React from "react";
import { Field } from "./field";
import { Label } from "./label";
import { Textarea } from "./textarea";

/**
 * `<TextareaField />` composed of `<Label />` and `<Textarea />` component.
 *
 * Unspecified props will be forwarded to the underlying `<Textarea />` element.
 *
 * `ref` will be forwarded to `<Textarea />` element.
 */
export const TextareaField = React.forwardRef(function TextareaField(
  { label, id, ...textareaProps },
  ref
) {
  return (
    <Field fieldId={id}>
      {label && <Label>{label}</Label>}
      <Textarea {...textareaProps} ref={ref} />
    </Field>
  );
});

TextareaField.propTypes = {
  label: PropTypes.node,
};
