import { useState } from "react";
import "./App.css";
// import handleExternalPrint from "./helper";
// import Users from "./Users";

function App() {
  // const [data, setData] = useState("");
  // const [screenData, setScreenData] = useState("");
  // const [btnData, setBtnData] = useState("");

  // const handleBtnData = () => {
  //   setBtnData("hello");
  // };

  return (
    <div className="App">
      {/* <p>Test First React app</p> */}
      {/* <input
        type="text"
        placeholder="Enter user name"
        name="username"
        id="userId"
        value="Ritik Tailor"
        readOnly
      /> */}
      {/* <br />
      <img
        title="Car Image"
        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg"
        style={{
          width: "500px",
        }}
        alt="img"
      />
      <br />
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={() => setScreenData("Update screen Data")}>
        Update screen
      </button>
      <p>{screenData}</p>
      <Users /> */}
      {/* <button data-testid="btn1" onClick={handleBtnData}>
        Update
      </button>
      <button onClick={handleExternalPrint}>Print</button>
      <p>{btnData}</p> */}
      {/* <input type="text" defaultValue="hello" disabled />
      <button>Click me</button> */}
      {/* <button>Click 1</button>
      <button>Click 2</button>
      <label htmlFor="input1">User name</label>
      <input type="text" id="input1" />
      <label htmlFor="input2">User age</label>
      <input type="text" id="input2" />
      <div role="dummy">Hello</div> */}
      {/* <button>Click me</button>
      <button>Click me</button>
      <button>Click me</button>
      <button>Click me</button>
      <button>Click me</button>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select> */}
      <label htmlFor="user-name">Username</label>
      <input type="text" id="user-name" defaultValue="Hello" />
      <label htmlFor="user-skills">Skills</label>
      <input type="checkbox" id="user-skills" defaultChecked />
    </div>
  );
}

export default App;
