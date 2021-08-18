import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import * as React from "react";
import { TextField } from "./text-field";

const TestBed = () => {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <TextField value={value} onChangeValue={setValue} label="Name" />
      <div data-testid="output">{value}</div>
    </div>
  );
};

test("<TextField />", () => {
  render(<TestBed />);

  user.type(screen.getByLabelText("Name"), "123");

  expect(screen.getByTestId("output").textContent).toBe("123");
});
