import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginComponent.css";

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
      <div className="login">
        <div className="wrap-login">
          <form className="login-form m-2">
            <h1 className="form-head">Welcome</h1>
            <fieldset>
              <div className="wrap-username">
                <input
                  className="input-field username"
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  required
                  />
                <br />
                <label className="label-field" htmlFor="username">
                  Username
                </label>
                <br />
              </div>
              <div className="wrap-password">
                <input
                  id="password"
                  className="input-field password"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  required
                />
                <br />
                <label className="label-field" htmlFor="password">Password</label>
                <br />
              </div>
              <button
                className="login-btn btn btn-primary"
                id="submit"
                onClick={this.handleSubmit}
              >
                Login
              </button>
              <p className="small">
                Not Registered? <Link to="/register">Create an account</Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
