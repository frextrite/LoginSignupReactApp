import React, { Component } from "react";
import { Link } from 'react-router-dom';

class LoginComponent extends Component {
  state = {};

  handleChange = e => {
    const { name, value } = e.target;
    console.log({ [name]: value });
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form className="login-form m-2">
          <h1>Welcome</h1>
          <fieldset>
            <label htmlFor="username">Username</label>
            <br />
            <input
              id="username"
              className="mb-2 form-control-sm"
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              className="mb-2 form-control-sm"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
            <br />
            <p className="small">Not Registered? <Link to="/register">Create an account</Link></p>
            <button
              className="btn btn-primary"
              id="submit"
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
