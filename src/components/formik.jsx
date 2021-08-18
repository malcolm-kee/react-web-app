import { useField } from "formik";
import { Field } from "./field";
import { TextInput } from "./text-input";
import { Label } from "./label";

export const FormikTextField = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <Field>
      {label && <Label>{label}</Label>}
      <TextInput {...field} {...props} />
      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs">{meta.error}</div>
      )}
    </Field>
  );
};
