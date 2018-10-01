import React, { Component } from "react";

class LoginComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form id="login">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" />
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
