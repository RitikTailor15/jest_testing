import { useState } from "react";
import "./App.css";
import Users from "./Users";

function App() {
  const [data, setData] = useState("");
  const [screenData, setScreenData] = useState("");
  return (
    <div className="App">
      <p>Test First React app</p>
      {/* <input
        type="text"
        placeholder="Enter user name"
        name="username"
        id="userId"
        value="Ritik Tailor"
        readOnly
      /> */}
      <br />
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
      <Users />
    </div>
  );
}

export default App;
