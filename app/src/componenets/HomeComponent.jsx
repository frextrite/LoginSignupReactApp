import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/register">Signup</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default HomeComponent;
