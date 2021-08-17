import { classNames } from "./classnames";

test("canary test to make sure test setup works", () => {
  expect(true).toBe(true);
});

test("classnames combine multiple classNames into one", () => {
  const result = classNames("text-lg", "bg-black font-bold");

  expect(result).toBe("text-lg bg-black font-bold");
});

test("classNames can handle array", () => {
  const result = classNames("text-lg", false, ["font-bold"]);

  expect(result).toBe("text-lg font-bold");
});
