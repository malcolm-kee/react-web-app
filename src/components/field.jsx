import { useId } from "hooks/use-id";
import { FieldContext } from "./field-context";

export const Field = ({ fieldId, children }) => {
  const ensuredId = useId(fieldId);

  return (
    <FieldContext.Provider value={ensuredId}>
      <div className="space-y-1">{children}</div>
    </FieldContext.Provider>
  );
};
