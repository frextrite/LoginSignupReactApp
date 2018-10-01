import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginComponent from "./componenets/LoginComponent";
import RegisterComponent from "./componenets/RegisterComponent";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
