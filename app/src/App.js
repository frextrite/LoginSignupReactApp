import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginComponent from "./componenets/LoginComponent";
import RegisterComponent from "./componenets/RegisterComponent";
import HomeComponent from "./componenets/HomeComponent";
import ForgotComponent from "./componenets/ForgotComponent";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
            <Route path="/forgot" component={ForgotComponent} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
