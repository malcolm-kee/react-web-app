import { SelectField } from "./select-field";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import * as React from "react";

const TestBed = () => {
  const [value, setValue] = React.useState("1");

  return (
    <div>
      <SelectField value={value} onChangeValue={setValue} label="Amount">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </SelectField>
      <div data-testid="output">{value}</div>
    </div>
  );
};

test("<SelectField />", () => {
  render(<TestBed />);

  user.selectOptions(screen.getByLabelText("Amount"), screen.getByText("Two"));

  expect(screen.getByTestId("output").textContent).toBe("2");
});
