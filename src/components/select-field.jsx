import PropTypes from "prop-types";
import * as React from "react";
import { Field } from "./field";
import { Label } from "./label";
import { Select } from "./select";

/**
 * `<SelectField />` composed of `<Label />` and `<Select />` component.
 *
 * Unspecified props will be forwarded to the underlying `<Select />` element.
 *
 * `ref` will be forwarded to `<Select />` element.
 */
export const SelectField = React.forwardRef(function SelectField(
  { label, id, ...selectProps },
  ref
) {
  return (
    <Field fieldId={id}>
      {label && <Label>{label}</Label>}
      <Select {...selectProps} ref={ref} />
    </Field>
  );
});

SelectField.propTypes = {
  label: PropTypes.node,
};
