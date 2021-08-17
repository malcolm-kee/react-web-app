import { Button } from "./button";
import * as ReactDOM from "react-dom";

test('<Button variant="primary" >', () => {
  const container = document.createElement("div");

  ReactDOM.render(<Button>Text</Button>, container);

  expect(container.firstChild.type).toBe("button");

  ReactDOM.unmountComponentAtNode(container);
});
