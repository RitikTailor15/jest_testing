import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  console.log("***** Before All UseCase *****");
});

beforeEach(() => {
  console.log("***** Before Each UseCase *****");
});

test("Test First React App", () => {
  render(<App />);
  const text = screen.getByText(/Test First React App/i);
  const title = screen.getByTitle(/Car Image/i);
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

// test("Test Input Box", () => {
//   render(<App />);
//   const inputEl = screen.getByRole("textbox");
//   const placeholder = screen.getByPlaceholderText("Enter user name");
//   expect(inputEl).toBeInTheDocument();
//   expect(placeholder).toBeInTheDocument();
//   expect(inputEl).toHaveAttribute("name", "username");
//   expect(inputEl).toHaveAttribute("id", "userId");
//   expect(inputEl).toHaveAttribute("value", "Ritik Tailor");
//   expect(inputEl).toHaveAttribute("type", "text");
// });

describe("UI Test Group", () => {
  test("Group First Test", () => {
    render(<App />);
    const checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });
});

/*
  describe can also be used 
  as describe.skip it will skip the whole group
  and describe.only will run that group and skip the others 
 */

// Test onChange event

test("Test onChange event on input box", () => {
  render(<App />);
  const inputEl = screen.getByRole("textbox");
  expect(inputEl).toBeInTheDocument();
  fireEvent.change(inputEl, { target: { value: "Ritik Tailor" } });
  expect(inputEl.value).toBe("Ritik Tailor");
});

test("Test Click Event with Button", () => {
  render(<App />);
  const btnEl = screen.getByRole("button");

  fireEvent.click(btnEl);
  expect(screen.getByText("Update screen Data")).toBeInTheDocument();
});

afterAll(() => {
  console.log("***** Before All UseCase *****");
});

afterEach(() => {
  console.log("***** Before Each UseCase *****");
});
