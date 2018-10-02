import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RegisterComponent.css";

class RegisterComponent extends Component {
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
      <div className="register">
        <div className="wrap-register">
          <form className="register-form m-2" onSubmit={this.handleSubmit}>
            <h2 className="form-head">Sign up</h2>
            <fieldset>
              <div className="wrap-label-input">
                <input
                  id="firstname"
                  className="input-field"
                  type="text"
                  name="firstname"
                  onChange={this.handleChange}
                  required
                />
                <br />
                <label className="label-field" htmlFor="firstname">
                  First Name
                </label>
                <br />
              </div>

              <div className="wrap-label-input">
                <input
                  id="lastname"
                  className="input-field"
                  type="text"
                  name="lastname"
                  onChange={this.handleChange}
                  required
                />
                <br />
                <label className="label-field" htmlFor="lastname">
                  Last Name
                </label>
                <br />
              </div>

              <div className="wrap-label-input">
                <input
                  id="username"
                  className="input-field"
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

              <div className="wrap-label-input">
                <input
                  id="password"
                  className="input-field"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  required
                />
                <br />
                <label className="label-field" htmlFor="password">
                  Password
                </label>
                <br />
              </div>

              <button
                className="signup-btn btn btn-primary"
                id="submit"
                onClick={this.handleSubmit}
              >
                Sign up
              </button>

              <Link className="login-btn btn btn-link" to="/login">
                Login
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterComponent;
