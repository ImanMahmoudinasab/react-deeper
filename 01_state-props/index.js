import React, { useState } from "react";
import ReactDOM from "react-dom";
import { formatDateTime } from "../utils/date";
import "../common/elements.scss";
import "./styles.css";

function RootComponent() {
  console.count("RootComponent component rendered");
  return (
    <div className="root">
      <ParentComponent />
    </div>
  );
}

function ParentComponent(props) {
  console.count("ParentComponent component rendered");

  const [state, setState] = useState();

  const onChangeStateClick = function () {
    setState(formatDateTime(Date.now()));
  };

  return (
    <div className="parent">
      <div className="code">{state}</div>
      <button onClick={onChangeStateClick}>Change state</button>
      <ChildComponent />
    </div>
  );
}

function ChildComponent(props) {
  console.count("ChildComponent component rendered");
  const [state, setState] = useState();

  const onChangeStateClick = function () {
    setState(formatDateTime(Date.now()));
  };
  return (
    <div className="child">
      <div className="code">{state}</div>
      <button onClick={onChangeStateClick}>Change state</button>
    </div>
  );
}

var mountNode = document.getElementById("app");
ReactDOM.render(<RootComponent />, mountNode);
