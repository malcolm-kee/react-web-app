import { Badge } from "./badge";
import { render } from "@testing-library/react";

test("<Badge>Text</Badge>", () => {
  const { container } = render(<Badge>Text</Badge>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <span
      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
    >
      Text
    </span>
  `);
});

test(`<Badge color="red">Text</Badge>`, () => {
  const { container } = render(<Badge color="red">Text</Badge>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <span
      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
    >
      Text
    </span>
  `);
});
