import { render } from "@testing-library/react";
import { Button } from "./button";

test('<Button variant="primary" >', () => {
  const { container } = render(<Button>Text</Button>);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="inline-flex justify-center items-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
      type="button"
    >
      Text
    </button>
  `);
});
