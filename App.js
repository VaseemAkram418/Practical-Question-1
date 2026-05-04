import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>

      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>

      <p>Hobbies:</p>
      <ul>
        {props.hobby.map((h, index) => (
          <li key={index}>{h}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponent;

import React from "react";
import ParentComponent from "./ParentComponent";
import LikeButton from "./LikeButton";

function App() {
  return (
    <div>
      <ParentComponent />
      <LikeButton />
    </div>
  );
}

export default App;