import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load the contact Us Page", () => {
  render(<Contact />);
  const Heading = screen.getByRole("heading");
  expect(Heading).toBeInTheDocument();
});
test("Should have button", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Should have submit button", () => {
  render(<Contact />);
  const submit = screen.getByText("Submit");
  expect(submit).toBeInTheDocument();
});
