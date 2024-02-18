import { fireEvent, render, screen } from "@testing-library/react";
// import renderer from "react-test-renderer";
import App from "./App";
// import Users from "./Users";
import handleExternalPrint from "./helper";

// beforeAll(() => {
//   console.log("***** Before All UseCase *****");
// });

// beforeEach(() => {
//   console.log("***** Before Each UseCase *****");
// });

// test("Test First React App", () => {
//   render(<App />);
//   const text = screen.getByText(/Test First React App/i);
//   const title = screen.getByTitle(/Car Image/i);
//   expect(text).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
// });

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

// describe("UI Test Group", () => {
//   test("Group First Test", () => {
//     render(<App />);
//     const checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   });
// });

/*
  describe can also be used 
  as describe.skip it will skip the whole group
  and describe.only will run that group and skip the others 
 */

// Test onChange event

// test("Test onChange event on input box", () => {
//   render(<App />);
//   const inputEl = screen.getByRole("textbox");
//   expect(inputEl).toBeInTheDocument();
//   fireEvent.change(inputEl, { target: { value: "Ritik Tailor" } });
//   expect(inputEl.value).toBe("Ritik Tailor");
// });

// test("Test Click Event with Button", () => {
//   render(<App />);
//   const btnEl = screen.getByRole("button");

//   fireEvent.click(btnEl);
//   expect(screen.getByText("Update screen Data")).toBeInTheDocument();
// });

// test("Test snapshot of App component", () => {
//   const component = render(<App />);
//   expect(component).toMatchSnapshot();
// });

// test("Test Class component function", () => {
//   const componentData = renderer.create(<Users />).getInstance();
//   expect(componentData.getUserList()).toMatch("User List returned");
// });

// afterAll(() => {
//   console.log("***** Before All UseCase *****");
// });

// afterEach(() => {
//   console.log("***** Before Each UseCase *****");
// });

// test("Function method test with click event", () => {
//   render(<App />);
//   const btn = screen.getByTestId("btn1");
//   fireEvent.click(btn);
//   expect(screen.getByText("hello")).toBeInTheDocument();
// });

// test("Function method test without click event", () => {
//   expect(handleExternalPrint()).toMatch("hi");
// });

// test("Test by get Role", () => {
//   render(<App />);
//   const textComp = screen.getByRole("textbox");
//   const btn = screen.getByRole("button");

//   expect(textComp).toBeInTheDocument();
//   expect(textComp).toHaveValue("hello");
//   expect(textComp).toBeDisabled();
//   expect(btn).toBeInTheDocument();
// });

// test("Multiple element with same role", () => {
//   render(<App />);
//   const btn1 = screen.getByRole("button", { name: "Click 1" });
//   const btn2 = screen.getByRole("button", { name: "Click 2" });
//   const input1 = screen.getByRole("textbox", { name: "User name" });
//   const input2 = screen.getByRole("textbox", { name: "User age" });
//   const div1 = screen.getByRole("dummy");

//   expect(div1).toBeInTheDocument();
//   expect(btn1).toBeInTheDocument();
//   expect(btn2).toBeInTheDocument();
//   expect(input1).toBeInTheDocument();
//   expect(input2).toBeInTheDocument();
// });

// test("getAllByRole test", () => {
//   render(<App />);
//   const btns = screen.getAllByRole("button");
//   const options = screen.getAllByRole("option");

//   for (let i = 0; i < btns.length; i++) {
//     expect(btns[i]).toBeInTheDocument();
//   }

//   for (let i = 0; i < options.length; i++) {
//     expect(options[i]).toBeInTheDocument();
//   }
// });

test("getByLabelText 1", () => {
  render(<App />);
  const input = screen.getByLabelText("Username");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("Hello");
});

test("getByLabelText 2", () => {
  render(<App />);
  const skills = screen.getByLabelText("Skills");
  expect(skills).toBeInTheDocument();
  expect(skills).toBeChecked();
});
