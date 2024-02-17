import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test First React App", () => {
  render(<App />);
  const text = screen.getByText(/Test First React App/i);
  const title = screen.getByTitle(/Car Image/i);
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
