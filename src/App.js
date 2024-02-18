import { useEffect, useState } from "react";
import "./App.css";
// import handleExternalPrint from "./helper";
// import Users from "./Users";
import User from "./User";

function App() {
  // const [data, setData] = useState("");
  // const [screenData, setScreenData] = useState("");
  // const [btnData, setBtnData] = useState("");

  // const handleBtnData = () => {
  //   setBtnData("hello");
  // };

  // let login = false;
  // const [findData, setFinData] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFinData(true);
  //   }, 1000);
  // });

  // const [userDataEv, setUserDataEv] = useState("");
  // const [name, setName] = useState("");
  const [apiData, setAPIData] = useState([]);
  const getAPIData = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    setAPIData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);
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
      {/* <label htmlFor="user-name">Username</label>
      <input type="text" id="user-name" defaultValue="Hello" />
      <label htmlFor="user-skills">Skills</label>
      <input type="checkbox" id="user-skills" defaultChecked /> */}
      {/* <label htmlFor="user-name1">Username</label>
      <input type="text" id="user-name1" defaultValue="Hello" />

      <label htmlFor="user-name2">Username</label>
      <input type="text" id="user-name2" defaultValue="Hello" />

      <label htmlFor="user-name3">Username</label>
      <input type="text" id="user-name3" defaultValue="Hello" />

      <label htmlFor="user-skills1">Skills</label>
      <input type="checkbox" id="user-skills1" defaultChecked />

      <label htmlFor="user-skills2">Skills</label>
      <input type="checkbox" id="user-skills2" defaultChecked />

      <label htmlFor="user-skills3">Skills</label>
      <input type="checkbox" id="user-skills3" defaultChecked /> */}
      {/* <input type="text" placeholder="This is place holder" />
      <input type="text" placeholder="This is place holder" />
      <input type="text" placeholder="This is place holder" /> */}
      {/* <button>Login</button>
      <p className="paraStyle" id="para1">
        p test
      </p>
      <h1>heading tag</h1>
      <h1>heading tag</h1> */}
      {/* <div data-testid="div1">Testing with test id</div>
      <h2 data-testid="h2">h2 Testing with test id</h2>
      <div data-testid="div1">Testing with test id</div> */}
      {/* <div element-id="override">Overiding test id</div> */}
      {/* <input type="text" defaultValue="Hello" />
      <textarea defaultValue="Hello" />
      <input type="radio" defaultValue="male" /> */}
      {/* <button title="Click">Click me</button>
      <span title="blackIcon">&#x2660;</span>
      <span title="blackIcon">&#x2660;</span> */}
      {/* <img
        title="Car Image"
        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg"
        style={{
          width: "500px",
        }}
        alt="img"
      />
      <img
        title="Car Image"
        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg"
        style={{
          width: "500px",
        }}
        alt="img"
      /> */}
      {/* <input
        type="text"
        defaultValue="Hello"
        className="user-style"
        id="user"
      />
      <button className="btn" id="btnId">
        Click me
      </button> */}
      {/* <div>Hello world</div>
      {login ? <button>Login</button> : <button>Logout</button>} */}
      {/* {findData ? <h1>data found</h1> : <h1>no data found</h1>} */}
      {/* <div id="testid">Hello world</div> */}
      {/* <div>
        Hello world
        <p>Hi</p>
        <p>Hello</p>
        <p>Hey</p>
      </div> */}
      {/* <p>{userDataEv}</p>
      <button onClick={() => setUserDataEv("hello")}>Click me</button> */}
      {/* <h2>{name}</h2>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name"
      /> */}
      {/* <User name="Ritik Tailor" /> */}
      {/* <h2>Heading 2</h2> */}
      <h1>API call</h1>
      {apiData.map((data) => {
        return <div key={data?.id}>{data?.name}</div>;
      })}
    </div>
  );
}

export default App;
