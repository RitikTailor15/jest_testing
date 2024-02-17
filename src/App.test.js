import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test First React App", () => {
  render(<App />);
  const text = screen.getByText(/Test First React App/i);
  const title = screen.getByTitle(/Car Image/i);
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("Test Input Box", () => {
  render(<App />);
  const inputEl = screen.getByRole("textbox");
  const placeholder = screen.getByPlaceholderText("Enter user name");
  expect(inputEl).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("name", "username");
  expect(inputEl).toHaveAttribute("id", "userId");
  expect(inputEl).toHaveAttribute("value", "Ritik Tailor");
  expect(inputEl).toHaveAttribute("type", "text");
});
