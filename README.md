# React test with Jest

### What is Testing

1. Software testing is the process of finding errors in a software product before it is launched.
2. Validate functioning and features of software

### Type of Testng

Tester :

1. Manual Testing
2. Automatic Testing

Developer : 

1. Unit testing : Testing individual units or components
2. Integrated Testing : Testing between two units or components
3. E-2-E Testing : Test start to end complete projec

### React Testing Tools

1. Jest framework
2. React Testing library

### Where we will focus?

- Mostly we focus on unit and integrated Testing
- But we will try to cover some E-2-E testing topics
- React developer needs to do component testing mostly that come under unit testing.

### Run First React Test

- Install React app
- Check Testing Library
- Run test case
- Check output
- Interview Question

### Write basic Test case

- Make JS file a simple function
- Make test file
- What is Test function
- What is expect function
- Write Test case
- Run test case

```jsx
// sum.js
export default function sum(a,b){
	return a + b;
}

// sum.test.js
import sum from 'sum';

test('testing for sum function', () => {
	expect(sum(10, 10)).toBe(20);
})

// run command
> npm run test
```

### Write First React Test

- Make New Test function
- Write test case for check text on screen
- Write test for case-insensitive text
- Test title for image
- Write multiple expect in the same test function

### Test Input Box

- Make Input Box in App component
- Write Test case function
- The test Input box is present or not
- Test Input box.
    - name
    - Placeholder
    - Id
    - Value
    - Type

### Test Case Run Options

- How to run specific test files
- What is watch mode?
- How to run the failed test case
- How to run call test cases
- How to quit watch mode
- How to filter test files for run
- How to filter test case.

### Test Grouping with Describe

- What is Describe?
- How to make test cases group?
- Run test case with Describe
- Skip in Describe
- Only in Describe
- Nested Describe

### Test onChange Event with Input Box

- Make Input Box in the component
- Define state and use with on change event
- Import component in test file
- Write code for test case
- Run test case

### Test Click Event with Button

- Make Button ans state in the component
- Update state with button click event.
- Import Component in test file
- Write code for test click event
- Run test case

### File and folder naming convention

- What file name we can use for test case file?
- Folder name for testing files
- Run test case with naming convention.
- file_name.test.js, file_name.test.jsx, file_name.spec.js, file_name.spec.jsx, __**tests__**

### Before and After Hooks

- use of before and after hook
- beforeAll and beforeEach
- AfterAll and afterEach
- Example

### Snapshot testing

- What is snapshot testing?
- Example?
- When this is useful?
- How to update snapshots?

### Important Points for testing

- What we should test?
    - Testing component rendering
    - UI elements that we write
    - Functions which we write
    - API testing
    - Event testing
    - Props and states
    - UI Condition testing | UI state testing
- What things we should not test?
    - External UI library code.
    - No need to test default function of JS and react
    - Sometime we should mock function rather than testing it in details.
- Important points
    - Do not write snapshots in starting of the project.
    - Run test case after completing you functionality.
    - Make a standard for code coverage.

### Class Component method testing

- Why I am talking about class component?
- Make Class component
- Install React test renderer
- Test Class component method

### Function Component method testing

- Discuss possible case foe method testing
- Define the button, click event and method
- Test method with event
- Test method without event

### RTL Query

- What is RTL Query?
- Why need RTL Query?
- Steps in testing UI.
    - Render Component
    - Find element and action
    - Assertions
- How RTL Query finds elements?
    - By Element Type
    - By Element name
    - By Element id
    - By Test Id
    - etc
- Type of RTL Queries.
    - Find single Element
        - getBy
        - queryBy
        - findBy
    - Find multiple Element
        - getAllBy
        - queryAllBy
        - findAllBy

### getByRole Query

- What is the Role in getByRole?
- What is semantic elements?
    - Button, heading Tags and table are semantic Element
    - Div and span are not semantic elements
- Test textbox with getByRole
    - text box present or not
    - test box value
    - text box disabled or not
- Test button with getByRole

### Multiple elements with Role Custom Role

- Multiple elements with the same role issue
- Multiple buttons with role
- Multiple input box with role
- Custom Role

### RTL Query : getAllByRole

- Handle Multiple elements
- Multiple buttons with the same role
- Multiple select options box with same role

### RTL Query : getByLabelText

- use of getByLabelText
- Test input field with getByLabelText
- Test checkbox with getByLabelText

### RTL Query : getAllByLabelText

- Use of getAllByLabelText
- Test Multiple input field
- Test Multiple checkbox

### RTL Query : getByPlaceholderText, getAllByPlaceholdertext

- Use of getByPlaceholderText
- Use of getAllByPlaceholderText
- Test single input field
- Test multiple input field

### RTL Query : getBytext, getAllByText

- use of getByText
- use of getAllByText
- Test single button, h1, and p tag
- Test multiple button, h1 and p tag

### RTL Query : getByTestId, getAllByTestId

- use of getByTestId
- use of getAllByTestId
- Test single elements with test id
- Test Multiple elements with test id

### Overriding data-testid

- Why need to override test id
- How to override test id
- Test elements after override test id

### RTL Query : getByDisplayValue, getAllByDisplayValue

- Use of getByDisplayValue
- Use of getAllByDisplayValue
- Test single element with getByDisplayValue
- Test multiple elements with getAllByDisplayValue

### RTL Query : getByTitle, getAllByTitle

- use of getByTitle
- use of getAllByTitle
- Test single element with getByTitle
- Test multiple elements with getAllByTitle

### RTL Query : getByAltText, getAllByAltText

- use of getByAltText
- use of getAllByAltText
- Test single image with getByAltText
- Test multiple image with getAllByAltText

### Priority order for RTL Queries

- Refer the doc and follow the same order.

### Assertion Methods

- What are assertion Methods?
- Test element with approx 10 Assertion Methods
- Assertion Not Methods

### TextMatch with string and regex

- What is Text Match
- Text Match with string
- Text match with regex

### TextMatch with function

- What is text match
- text match with function

### Query Types

- getBy
- queryBy
- findBy

### queryBy and queryAllBy

- Use of query by Type.
- How to test element with query
- Example of queryBy and queryAllBy
- Interview Questions

### findBy and findAllBy

- use of find by
- write React code
- Test element with findBy
- Test elements with findByAll

### Test with JS query | Custom Query

### Querying within Elements

- find element within an element
    
    ```jsx
    <div> Parent Tag
    	<p>
    		Child tag
    	</p>
    </div>
    ```
    

### Click Event with user event

- Why we should use user event library
- Update user event library
- Write click event with state
- Test click event with user event
- Read about fireEvent and user event library

### onChange Event Testing OR keyboard Interactions

- What is keyboard interaction?
- Write code for on-change event
- Test on change event
- Interview Questions

### act function

- use of act function
- issue before using act function
- Apply act function
- Interview Questions

### Test Component Props

- Make component
- Pass Props and Display on UI
- Write test case to test props
- Interview Questions

### Functional Props testing and Mocking

- Add props and click event to component
- Function mocking in testing file
- Write test case to test functional Props
- Interview Questions

### Debugging in react testing library

- Automatic debugging
- prettyDOM
- debug
- DEBUG_PRINT_LIMIT=10000 npm test
- logRoles

### Testing Playground on Chrome

- What is testing playground?
- How to install and use it?
- Make test case query

### MSW and HTTP Request Testing

- What is MSW?
- Use of MSW?
- Why we mock API?
- Why we should use MSW?

### MSW

- Mostly we test rest API by mocking
- MSW stands for Mock Service Worker
- React Testing library recommend to use MSW
- We can mock api with jest also.

### API testing with MSW

- Install MSW
- Make Mock service folder
- Make serve file
- Make server handler file
- Write code for API testing
- Call server in test setup file