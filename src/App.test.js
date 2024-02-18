import {
  fireEvent,
  render,
  screen,
  configure,
  within,
} from "@testing-library/react";
// import renderer from "react-test-renderer";
import App from "./App";
// import Users from "./Users";
import handleExternalPrint from "./helper";
import userEvent from "@testing-library/user-event";

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

// test("getByLabelText 1", () => {
//   render(<App />);
//   const input = screen.getByLabelText("Username");
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue("Hello");
// });

// test("getByLabelText 2", () => {
//   render(<App />);
//   const skills = screen.getByLabelText("Skills");
//   expect(skills).toBeInTheDocument();
//   expect(skills).toBeChecked();
// });

// test("getAllByLabelText 1", () => {
//   render(<App />);
//   const inputs = screen.getAllByLabelText("Username");
//   for (let i = 0; i < inputs.length; i++) {
//     expect(inputs[i]).toBeInTheDocument();
//     expect(inputs[i]).toHaveValue("Hello");
//   }
// });

// test("getAllByLabelText 2", () => {
//   render(<App />);
//   const skills = screen.getAllByLabelText("Skills");
//   for (let i = 0; i < skills.length; i++) {
//     expect(skills[i]).toBeInTheDocument();
//     // expect(inputs[i]).toHaveValue("Hello");
//   }
// });

// Get placeholder test
// test("getByPlaceholderText", () => {
//   render(<App />);
//   const placeHolderInput = screen.getByPlaceholderText("This is place holder");
//   expect(placeHolderInput).toBeInTheDocument();
// });

// test("getAllByPlaceholderText", () => {
//   render(<App />);
//   const placeHolderInputs = screen.getAllByPlaceholderText(
//     "This is place holder"
//   );
//   for (let i = 0; i < placeHolderInputs.length; i++) {
//     expect(placeHolderInputs[i]).toBeInTheDocument();
//   }
// });

// test("getByText single button testing", () => {
//   render(<App />);
//   const btn = screen.getByText("Login");
//   expect(btn).toBeInTheDocument();
// });

// test("getByText single p tag testing", () => {
//   render(<App />);
//   const p = screen.getByText("p test");
//   expect(p).toBeInTheDocument();
//   expect(p).toHaveClass("paraStyle");
//   expect(p).toHaveAttribute("id", "para1");
// });

// test("getByText single h1 tag testing", () => {
//   render(<App />);
//   const h = screen.getByText("heading tag");
//   expect(h).toBeInTheDocument();
// });

// test("getAllByText multiple h1 tag testing", () => {
//   render(<App />);
//   const hs = screen.getAllByText("heading tag");
//   for (let i = 0; i < hs.clientHeight; i++) {
//     expect(hs[i]).toBeInTheDocument();
//   }
// });

// test("Test by getTestId", () => {
//   render(<App />);
//   const div1 = screen.getByTestId("div1");
//   expect(div1).toBeInTheDocument();
// });

// test("Test h2 by getTestId", () => {
//   render(<App />);
//   const div1 = screen.getByTestId("h2");
//   expect(div1).toBeInTheDocument();
// });

// test("Test by getAllTestId", () => {
//   render(<App />);
//   const div1 = screen.getAllByTestId("div1");
//   for (let i = 0; i < div1.length; i++) {
//     expect(div1[i]).toBeInTheDocument();
//   }
// });

// configure({ testIdAttribute: "element-id" });

// test("test by overriding the test attribute", () => {
//   render(<App />);
//   const ele = screen.getByTestId("override");
//   expect(ele).toBeInTheDocument();
// });

// test("testing with getByDisplayValue", () => {
//   render(<App />);
//   const ele = screen.getByDisplayValue("Hello");
//   expect(ele).toBeInTheDocument();
// });

// test("testing textarea with getByDisplayValue", () => {
//   render(<App />);
//   const ele = screen.getByDisplayValue("Hello from textarea");
//   expect(ele).toBeInTheDocument();
// });

// test("testing radio with getByDisplayValue", () => {
//   render(<App />);
//   const ele = screen.getByDisplayValue("male");
//   expect(ele).toBeInTheDocument();
// });

// test("testing textarea with getAllByDisplayValue", () => {
//   render(<App />);
//   const ele = screen.getAllByDisplayValue("Hello");
//   for (let i = 0; i < ele.length; i++) {
//     expect(ele[i]).toBeInTheDocument();
//   }
// });

// test("testing by getByTitle", () => {
//   render(<App />);
//   const titleEl = screen.getByTitle("Click");
//   expect(titleEl).toBeInTheDocument();
// });

// test("testing span by getByTitle", () => {
//   render(<App />);
//   const titleEl = screen.getByTitle("blackIcon");
//   expect(titleEl).toBeInTheDocument();
// });

// test("testing span by getAllByTitle", () => {
//   render(<App />);
//   const titleEl = screen.getAllByTitle("blackIcon");
//   for (let i = 0; i < titleEl.length; i++) {
//     expect(titleEl[i]).toBeInTheDocument();
//   }
// });

// test("testing alt image by getByAltText", () => {
//   render(<App />);
//   const imageEL = screen.getByAltText("img");
//   expect(imageEL).toBeInTheDocument();
// });

// test("testing alt image by getAllByAltText", () => {
//   render(<App />);
//   const imageEL = screen.getAllByAltText("img");
//   for (let i = 0; i < imageEL.length; i++) {
//     expect(imageEL[i]).toBeInTheDocument();
//   }
// });

// test("Assertion testing with input", () => {
//   render(<App />);
//   const input = screen.getByRole("textbox");
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue("Hello");
//   expect(input).toBeEnabled();
//   // expect(input).toBeDisabled();
//   expect(input).toHaveAttribute("id", "user");
//   expect(input).toHaveClass("user-style");
// });

// test("Negative Assertion testing with input", () => {
//   render(<App />);
//   const btn = screen.getByRole("button");
//   expect(btn).toBeInTheDocument();
//   expect(btn).not.toHaveClass("btn1");
//   // expect(btn).not.toHaveAttribute("id");
// });

// test("test match with string", () => {
//   render(<App />);
//   // const div = screen.getByText("Hello world");
//   const div = screen.getByText("Hello", { exact: false });
//   expect(div).toBeInTheDocument();
// });

// test("test match with regex", () => {
//   render(<App />);
//   // const div = screen.getByText("Hello world");
//   // const div = screen.getByText(/hello/i);
//   const div = screen.getByText(/hello w?orld/i); // w will be ignore
//   expect(div).toBeInTheDocument();
// });

// test("Test match with function", () => {
//   render(<App />);
//   // const divEl = screen.getByText((content, el) => content.startsWith("Hello"));
//   // const divEl = screen.getByText((content, el) => content.endsWith("world"));
//   // const divEl = screen.getByText((content, el) => {
//   //   return content.includes("ll");
//   // });
//   const divEl = screen.getByText((content, el) => {
//     return content.length === 11;
//   });
//   expect(divEl).toBeInTheDocument();
// });

// test("Queryby test case", () => {
//   render(<App />);
//   // const divel = screen.getByText("Logout");
//   const divel = screen.queryByText("Login");
//   expect(divel).not.toBeInTheDocument();
// });

// test("test element by findby", async () => {
//   render(<App />);
//   const textEl = await screen.findByText("data found", {}, { timeout: 4000 });
//   expect(textEl).toBeInTheDocument();
// });

// test("test with custom query", () => {
//   render(<App />);
//   const divEl = document.querySelector("#testid");
//   expect(divEl).toBeInTheDocument();
// });

// test("test within the element/function", () => {
//   render(<App />);
//   const hEL = screen.getByText("Hello world");
//   let subEL = within(hEL).getByText("Hello");
//   let subEL2 = within(hEL).getByText("Hi");
//   expect(hEL).toBeInTheDocument();
//   expect(subEL).toBeInTheDocument();
//   expect(subEL2).toBeInTheDocument();
// });

// test("Test user event click event", async () => {
//   userEvent.setup();
//   render(<App />);
//   const btn = screen.getByText("Click me");
//   await userEvent.click(btn);
//   expect(screen.getByText("hello")).toBeInTheDocument();
// });

test("Test onchange keyboard event", async () => {
  userEvent.setup();
  render(<App />);
  const el = screen.getByRole("textbox");
  await userEvent.type(el, "Hello");
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
