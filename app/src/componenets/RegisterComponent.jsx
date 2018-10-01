import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
      <div>
        <h2>Sign up</h2>
        <form className="register-form m-2" onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="firstname">First Name</label>
            <br />
            <input
              id="firstname"
              className="mb-2 form-control-sm"
              type="text"
              name="firstname"
              placeholder="Enter first name"
              onChange={this.handleChange}
            />
            <br />

            <label htmlFor="lastname">Last Name</label>
            <br />
            <input
              id="lastname"
              className="mb-2 form-control-sm"
              type="text"
              name="lastname"
              placeholder="Enter last name"
              onChange={this.handleChange}
            />
            <br />

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

            <button
              className="btn btn-primary"
              id="submit"
              onClick={this.handleSubmit}
            >
              Sign up
            </button>

              <Link className="btn btn-link" to="/login">Login</Link>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default RegisterComponent;
