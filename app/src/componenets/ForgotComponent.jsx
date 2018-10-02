import React, { Component } from "react";
import "./ForgotComponent.css";
import { Link } from 'react-router-dom';

class ForgotComponent extends Component {
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
      <div className="forgot">
        <div className="wrap-forgot">
          <form className="forgot-form m-2">
            <h1 className="form-head">Forgot Password</h1>
            <fieldset>
            <div className="wrap-label-input">
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
              <button
                className="forgot-btn btn btn-primary"
                id="submit"
                onClick={this.handleSubmit}
              >
                Reset
              </button>
              <button
                className="login-btn btn btn-link"
                id="submit"
                onClick={this.handleSubmit}
              >
                <Link to="/login">Login</Link>
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default ForgotComponent;
