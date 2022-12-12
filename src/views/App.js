import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";
import { Component } from "react";

let App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Nguyễn Minh Hậu</p>
        <MyComponent />
      </header>
    </div>
  );
};

export default App;
