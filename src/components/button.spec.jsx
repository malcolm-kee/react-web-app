import { render } from "@testing-library/react";
import { Button } from "./button";

test('<Button variant="primary" >', () => {
  const { container } = render(<Button>Text</Button>);

  expect(container.firstChild.type).toBe("button");
});
